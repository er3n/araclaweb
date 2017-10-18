<template>
  <header>
    <div class="modal" v-if="modal" v-cloak></div>

    <a href="#" class="logo">
      <img src="../img/logo.png" srcset="../img/logo_2x.png 2x" alt="Aracla Logo">
    </a>

    <div class="top-menus">
      <ul>
        <li><a href="#">Park Noktaları</a></li>
        <li><a href="#">Araçlar</a></li>
        <li><a href="#">Hakkımızda</a></li>
        <li><a href="#">İletişim</a></li>
      </ul>
      <div class="mobile-menu">
        <a @click="toggleHeaderMenu" v-click-outside="closeMenu">
          <img src="../img/icons/mobile-menu.svg" height="40" alt="Mobil Menü">
        </a>
        <div v-if="isMenuOpened" v-cloak class="submenu">
          <ul>
            <li><a href="#">Park Noktaları</a></li>
            <li><a href="#">Araçlar</a></li>
            <li><a href="#">Hakkımızda</a></li>
            <li><a href="#">İletişim</a></li>
          </ul>
        </div>
      </div>
      <div v-cloak v-if="!user" class="sign-button">
        <a @click="openPage('signLoginPage')">
          <img src="../img/profile.png" alt="Profil Butonu" height="24">
        </a>
      </div>
      <div v-cloak v-if="user" class="logged-in">
        <a @click="showHideProfileSubMenu" v-click-outside="closeProfileSubMenu">
                        <span
                          :style="{ backgroundImage: 'url(' + profilePhoto + ')', backgroundSize: 'cover' }"
                          class="picture"></span>
          <span class="text">{{ fullName }}</span>
          <img src="../img/icons/expand-button.svg" height="10">
        </a>
        <div v-if="subMenuOpened" class="profile-submenu">
          <a href="hesap/ayarlar">Ayarlar</a>
          <a href="hesap/odeme-bilgisi">Ödeme Bilgisi</a>
          <a href="hesap/sifre">Şifre</a>
          <a href="hesaplar">Oturumlar</a>
          <a @click="logout">Çıkış</a>
        </div>
      </div>
    </div>


    <div
      v-cloak
      v-if="signLoginPage"
      class="signup-login-container active">
      <div class="inner">
        <div v-if="waitForResponse" class="preloader">
          <div class="spinner">
            <img src="../img/spinner.svg" alt="Yükleniyor" width="64">
            <span>Lütfen bekleyin</span>
          </div>
        </div>
        <a @click="closePage('signLoginPage')" class="close-button" data-relation="close"><img src="../img/icons/close.svg"
                                                                                               alt="Kapat"
                                                                                               width="20"></a>
        <p v-if="loginError" class="info error">
          Hatalı Kullanıcı adı ya da şifre
        </p>
        <p>
          <input type="text" name="loginEmail" class="email" placeholder="Email Adresiniz" required v-model="username">
          <small></small>
        </p>
        <p>
          <input @keyup.enter="authenticate" type="password" name="loginPassword" class="password"
                 placeholder="Parolanız" required v-model="password">
          <small></small>
        </p>
        <button @click="authenticate" class="login-button">Giriş Yap</button>
        <a @click="openPage('passwordResetPage', 'signLoginPage')" class="forgot">Parolanızı mı unuttunuz?</a>
        <div class="line"></div>
        <p class="register">Hesabınız yok mu? <a @click="openPage('preSignPage', 'signLoginPage')">Kaydolun</a></p>
      </div>
    </div>

    <div
      v-cloak
      v-if="preSignPage"
      class="pre-signup active">
      <div class="inner">
        <a @click="closePage('preSignPage')" class="close-button"><img src="../img/icons/close.svg" alt="Kapat" width="20"></a>
        <a href="#" class="facebook-button" data-relation="facebook">Facebook ile Kaydol</a>
        <a href="#" class="google-button" data-relation="google">Google ile Kaydol</a>
        <p class="yada">ya da</p>
        <a @click="openPage('signWithEmailPage', 'preSignPage')" class="register-with-mail-button">Mail ile Kaydol</a>
        <div class="line"></div>
        <p class="register">Zaten üye misiniz? <a @click="openPage('signLoginPage', 'preSignPage')">Giriş Yapın</a></p>
      </div>
    </div>

    <div
      v-cloak
      v-if="passwordResetPage"
      class="forgot-password active">
      <div class="inner">
        <a @click="closePage('passwordResetPage')" class="close-button"><img src="../img/icons/close.svg" alt="Kapat"
                                                                             width="20"></a>
        <span class="title">Şifremi Unuttum</span>
        <div class="line"></div>
        <p>Kayıt olurken kullandığınız email adresini yazarak mailinize şifre sıfırlama bağlantısı gönderin.</p>
        <input type="text" name="forgotEmail" class="email" placeholder="Email Adresiniz" v-model="mailToRemember">
        <div class="controls">
          <a @click="openPage('signLoginPage', 'passwordResetPage')" class="black"><img src="../img/icons/back-arrow.svg"
                                                                                        alt="Giriş Sayfasına Dön"
                                                                                        height="12"> Giriş Sayfasına Dön</a>
          <button @click="sendResetPassword" class="send-reset-button">Gönder</button>
        </div>
      </div>
    </div>

    <div
      v-cloak
      v-if="signWithEmailPage"
      class="signup-with-email active">
      <div class="inner">
        <a @click="closePage('signWithEmailPage')" class="close-button"><img src="../img/icons/close.svg" alt="Kapat"
                                                                             width="20"></a>
        <form method="post" name="registerForm" id="registerForm">
          <span class="title no-margin-top">Hesap Bilgileri</span>
          <p><input type="email" name="registerEmail" class="email" placeholder="Email Adresiniz" required>
            <small></small>
          </p>
          <p><input type="tel" name="registerTelefon" class="phone" placeholder="Telefon" required>
            <small></small>
          </p>
          <p><input type="password" name="registerSifre" class="password" placeholder="Parola" required>
            <small></small>
          </p>
          <p><input type="password" name="registerSifre2" class="password" placeholder="Parola Tekrar" required>
            <small></small>
          </p>

          <span class="title">Kimlik Bilgileri</span>
          <p><input type="text" name="registerAdSoyad" class="name" placeholder="Ad Soyad" required>
            <small></small>
          </p>
          <p><input type="tel" name="registerTCNo" class="code" placeholder="TC Kimlik No" required>
            <small></small>
          </p>
          <p><input type="tel" name="registerEhliyetSeriNo" class="code" placeholder="Ehliyet Seri No" required>
            <small></small>
          </p>
          <p><input type="date" name="registerEhliyetVerilisTarihi" class="calendar"
                    placeholder="Ehliyet Veriliş Tarihi" required>
            <small>Ehliyet veriliş tarihi</small>
          </p>

          <span class="title">Ödeme Bilgileri</span>
          <p><input type="text" name="registerKartAdSoyad" class="name" placeholder="Kart Sahibinin Adı Soyadı"
                    required>
            <small></small>
          </p>
          <p><input type="tel" name="registerKartNumarasi" class="card" placeholder="Kart Numarası" required>
            <small></small>
          </p>
          <div class="card-info">
            <p><input type="tel" name="registerKartAy" class="card month" maxlength="2" placeholder="Ay" required>
              <small></small>
            </p>
            <p><input type="tel" name="registerKartYil" class="card year" maxlength="2" placeholder="Yıl" required>
              <small></small>
            </p>
            <p><input type="tel" name="registerKartSifre" class="card cvv" maxlength="3" placeholder="CVV" required>
              <small></small>
            </p>
          </div>

          <span class="title">Fatura Bilgileri</span>
          <p><input type="text" name="registerFaturaAdres1" class="adres" placeholder="Adres1" required>
            <small></small>
          </p>
          <p><input type="text" name="registerFaturaAdres2" class="adres" placeholder="Adres2">
            <small></small>
          </p>
          <div class="adres-info">
            <p><input type="text" name="registerFaturaSehir" class="posta-kodu" placeholder="Posta Kodu" required>
              <small></small>
            </p>
            <p><input type="text" name="registerFaturaSehir" class="city" placeholder="Şehir" required>
              <small></small>
            </p>
          </div>
          <div class="sozlesme-container">
            <p>
              <input id="uyelikSozlesmesi" type="checkbox" name="registerSatisSozlemesi" required>
              <label for="uyelikSozlesmesi"><a href="#">Üyelik Sözleşmesini</a> kabul ediyorum</label>
            </p>
            <p>
              <input id="mobilSatisSozlesmesi" type="checkbox" name="mobilSatisSozlemesi" required>
              <label for="mobilSatisSozlesmesi"><a href="#">Mesafelı Satış Sözleşmesini</a> kabul ediyorum</label>
            </p>
          </div>
          <a class="register-with-mail-button">Kaydı Tamamla</a>
        </form>
      </div>
    </div>
  </header>
</template>


<script>
  export default {
    name: 'HeaderComponent',
    data () {
      return {
        homepage: '/',
        user: undefined,
        modal: false,
        signLoginPage: false,
        preSignPage: false,
        passwordResetPage: false,
        signWithEmailPage: false,
        subMenuOpened: false,
        isMenuOpened: false,
        username: '',
        password: '',
        mailToRemember: '',
        waitForResponse: false,
        loginError: false
      }
    },
    methods: {
      showSignLoginPage (from) {
        if (from) this._data[from] = false
        this.signLoginPage = true
        this.modal = true
      },
      showPreSignPage (from) {
        if (from) this._data[from] = false
        this.preSignPage = true
      },
      showPasswordResetPage (from) {
        if (from) this._data[from] = false
        this.passwordResetPage = true
      },
      openPage (pageForOpen, pageForClose) {
        console.log('ok')
        if (pageForClose) this._data[pageForClose] = false
        this._data[pageForOpen] = true
        this.modal = true
      },
      closePage (page) {
        this._data[page] = false
        this.modal = false
      },
      showHideProfileSubMenu () {
        this.subMenuOpened = !this.subMenuOpened
      },
      closeProfileSubMenu () {
        this.subMenuOpened = false
      },
      authenticate () {
        this.loginError = false
        this.waitForResponse = true
        fetch(`/api/authenticate`,
          {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `username=${this.username}&password=${this.password}`
          })
          .then((res) => {
            if (res.status === 200) {
              res.json().then((json) => {
                localStorage.setItem('x-auth-token', json.token)
                document.location.reload()
              })
            } else {
              this.waitForResponse = false
              this.loginError = true
            }
          })
      },
      sendResetPassword () {
        fetch(`/api/account/reset_password/init`, {
          method: 'POST',
          body: `${this.mailToRemember}`
        })
          .then((res) => {
            console.log('password reset gönderildi')
          })
      },
      logout () {
        localStorage.removeItem('x-auth-token')
        this.user = undefined
      },
      toggleHeaderMenu () {
        this.isMenuOpened = !this.isMenuOpened
      },
      closeMenu () {
        this.isMenuOpened = false
      }
    },
    computed: {
      fullName () {
        return `${this.user.firstName} ${this.user.lastName}`
      },
      profilePhoto () {
        return this.user.login
      }
    },
    directives: {
      'click-outside': {
        bind: function (el, binding, vNode) {
          // Define Handler and cache it on the element
          const bubble = binding.modifiers.bubble
          const handler = (e) => {
            if (bubble || (!el.contains(e.target) && el !== e.target)) {
              binding.value(e)
            }
          }
          el.__vueClickOutside__ = handler

          // add Event Listeners
          document.addEventListener('click', handler)
        },

        unbind: function (el, binding) {
          // Remove Event Listeners
          document.removeEventListener('click', el.__vueClickOutside__)
          el.__vueClickOutside__ = null
        }
      }
    },
    created () {
      console.log('header yüklendi')
      let token = localStorage.getItem('x-auth-token')
      if (token) {
        fetch(`/api/authenticate`, {
          headers: {
            'x-auth-token': token
          }
        })
          .then((res) => {
            if (res.status === 200) {
              fetch(`/api/account`, {
                headers: {
                  'x-auth-token': token
                }
              })
                .then((res) => {
                  if (res.status === 200) {
                    res.json()
                      .then((json) => {
                        this.user = json
                      })
                  }
                })
            }
          })
      }
    }

  }
</script>


<style lang="scss" scoped>
  @import "../styles/global";
  @import "../styles/header";
  @import "../styles/signLoginPage";

</style>

