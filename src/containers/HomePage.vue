<template>
  <div>

    <div class="main" style="">
      <AraclaNotification ref="notification" />
      <h1>Araç Kiralama Fiyatları</h1>
      <h2>5 TL ‘ den başlayan fiyatlarla şimdi araçlayın!</h2>
      <div id="search-widget" v-cloak v-click-outside="closeSubMenus">
        <div class="col parking-points">
          <span class="title">Park Noktası</span>
          <span class="content" @click="loadParkingPoints"
                :class="{ active: selectedColumn === 'col1' }">{{ selectedParkingPoint.name || "Alış Yeri Seçiniz"
            }}</span>
          <div v-show="selectedColumn === 'col1'" v-cloak class="sub-menu">
            <p v-if="isParkinPointsLoading">Lütfen Bekleyin..</p>
            <h4>Park Noktası Seçiniz <a @click="closeSubMenus" class="close"><img src="../img/icons/close.svg" alt="Kapat" height="16"></a></h4>
            <ul>
              <li v-for="item in parkingPoints">
                <a @click="selectParkingPoint(item)">{{ item.name }} <span class="address">{{ item.description }}</span></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col date-time">
          <span class="title">Alış Tarih - Saat</span>
          <span class="content" @click="showDateTime('col2')"
                :class="{ active: selectedColumn === 'col2' }">{{ startDateLabel }}</span>
          <div v-show="selectedColumn === 'col2' || selectedColumn === 'col3'" v-cloak class="sub-menu">
            <div class="slider" :class="selectedColumn">
              <div class="content">
                <h4>Alış Tarihi ve Saati <a @click="closeSubMenus" class="close"><img src="../img/icons/close.svg"
                                                                                      alt="Kapat" height="16"></a></h4>
                <date-picker
                  name="startDatePicker"
                  @dayselectedoncalendar="selectStartDate"
                  :min-date="today"
                >
                </date-picker>
                <div v-if="startDate" class="time-picker">
                  <select v-model="selectedStartTimeOptionValue">
                    <option value="-1" selected disabled>Alış Saati</option>
                    <option
                      v-for="option in startTimeOptions"
                      :value="option.value"
                    >{{ option.name }}
                    </option>
                  </select>
                  <span>Lütfen alış saatini seçiniz:</span>
                </div>
              </div>
              <div class="content">
                <h4>Teslim Tarihi ve Saati <a @click="closeSubMenus" class="close"><img src="../img/icons/close.svg"
                                                                                        alt="Kapat" height="16"></a>
                </h4>
                <date-picker
                  name="endDatePicker"
                  @dayselectedoncalendar="selectEndDate"
                  :min-date="startDate"
                ></date-picker>
                <div v-if="endDate" class="time-picker">
                  <select v-model="selectedEndTimeOptionValue">
                    <option value="-1" selected disabled>Teslim Saati</option>
                    <option
                      v-for="option in endTimeOptions"
                      :value="option.value"
                      :disabled="option.disabled"
                    >{{ option.name }}
                    </option>
                  </select>
                  <span>Lütfen teslim saatini seçiniz:</span>
                  <a @click="" class="search-btn mobile-search-btn">Ara</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col date-time">
          <span class="title">Teslim Tarih - Saat</span>
          <span class="content" @click="showDateTime('col3')"
                :class="{ active: selectedColumn === 'col3' }">{{ endDateLabel }}</span>
        </div>
        <a @click.prevent="checkAvailableCars" href="#" class="search-btn">Ara</a>
      </div>
    </div>

    <div id="avantaj">
      <div class="section">
        <div class="inner">
          <h2>Aracla.com ' un avantajları</h2>
          <a href="#ucretsiz-yakit" class="col4 white-bg advantage-item">
            <img class="icon" src="../img/icons/ucretsiz-yakit.svg" height="30" alt="Ücretsiz Yakıt">
            <h3>Ücretsiz Yakıt</h3>
            <p>Taşıt tanıma sistemi ile ücretsiz yakıt.</p>
            <span class="detayli-incele">DETAYLI İNCELE <img src="../img/icons/right-arrow.svg" height="7"
                                                             alt="Detaylı İncele"></span>
          </a>
          <a href="#en-ucuz-arac-kiralama" class="col4 white-bg advantage-item">
            <img class="icon" src="../img/icons/kaskolu-arac.svg" height="30" alt="Ücretsiz Yakıt">
            <h3>Kaskolu Araç</h3>
            <p>Rent a Car kasko güvenceli araçlar.</p>
            <span class="detayli-incele">DETAYLI İNCELE <img src="../img/icons/right-arrow.svg" height="7"
                                                             alt="Detaylı İncele"></span>
          </a>
          <a href="" class="col4 white-bg advantage-item">
            <img class="icon" src="../img/icons/yol-yardim.svg" height="30" alt="Yol Yardım">
            <h3>Yol Yardım</h3>
            <p>7/24 Yol Yardım Hizmeti</p>
            <span class="detayli-incele">DETAYLI İNCELE <img src="../img/icons/right-arrow.svg" height="7"
                                                             alt="Detaylı İncele"></span>
          </a>
          <a href="" class="col4 white-bg advantage-item">
            <img class="icon" src="../img/icons/aracla-club.png" height="30" alt="Yol Yardım">
            <h3>Superaracla Club</h3>
            <p>Araçladıkça kazandıran vip klüp</p>
            <span class="detayli-incele">DETAYLI İNCELE <img src="../img/icons/right-arrow.svg" height="7"
                                                             alt="Detaylı İncele"></span>
          </a>
        </div>
      </div>
    </div>

    <CarSlider />

    <div id="dort-adim">
      <div class="section">
        <div class="inner">
          <h2>Kolay ve Hızlı Araç Kiralama</h2>
          <h3>Sadece 4 kısa adımla araç kiralayın!</h3>
          <p>
            Sizlere en iyi hizmeti sunmak bizim ilk önceliğimizdir.
            Dolayısıyla araç kiralamayı sizin için en kolay hale getirdik. <strong>Sadece 4 adımda</strong>
            üyeliğinizi tamamlar ve dilediğiniz aracı kiralarsınız.
          </p>

          <div class="adimlar">
            <div class="adim">
              <img src="../img/icons/baglan.svg" height="40" alt="Bağlan">
              <h4>1. Bağlan</h4>
              <p>İster mobil, ister masa üstü cihazlarınızdan çok hızlı bir şekilde bağlanabilirsiniz</p>
            </div>
            <div class="adim">
              <img src="../img/icons/rezerve-et.svg" height="40" alt="Rezerve Et">
              <h4>2. Rezerve Et</h4>
              <p>İhtiyacınız olan tarih ve saat aralığını girerek aracınızı rezerve edin</p>
            </div>
            <div class="adim">
              <img src="../img/icons/kilit-ac.svg" height="40" alt="Kilit Aç">
              <h4>3. Kilit Aç</h4>
              <p>Araçla Kartınız ile aracınızın  tüm kontrolüne  rahatlıkla erişebilirsiniz.</p>
            </div>
            <div class="adim">
              <img src="../img/icons/kullan.svg" height="40" alt="Kullan">
              <h4>4. Kullan</h4>
              <p>Artık aracınız belirlemiş olduğunuz zamanda kullanıma hazır.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Calculator />

    <OfficeSlider />

    <div id="ucretsiz-yakit">
      <div class="section">
        <div class="inner">
          <h2>Ücretsiz Yakıt</h2>
          <img src="../img/benzin-istasyonu.jpg" alt="Ücretsiz Yakıt">
          <h3>Anlaşmalı İstasyonlardan Ücretsiz Yakıt</h3>
          <p>
            Aracla.com ile <strong>araç kiralarken</strong>
            sadece seçmiş olduğunuz aracın saatlik ücretini ve km başı mesafe ücretini ödersiniz.
            Bunun dışında ekstra <strong>yakıt ücreti ödemezsiniz.</strong> Araçla kartınız ile <strong>anlaşmalı istasyonlardan yakıtınızı ücretsiz doldurursunuz.</strong>
            Yakıt ücreti ödememek için anlaşmalı benzin istasyonlarını tercih etmeniz gereklidir.
          </p>
        </div>
      </div>
    </div>

    <div id="en-ucuz-arac-kiralama">
      <div class="section">
        <div class="inner">
          <h2>Kaskolu En Ucuz Araç Kiralama</h2>
          <!-- <img src="../img/arac-kirala.jpg" alt="En Ucuz Araç Kiralama"> -->
          <img src="../img/kasko.jpg" alt="En Ucuz Araç Kiralama">
          <h3>Kaskolu Saatlik, Günlük ve Aylık Araç Kiralama</h3>
          <p>
            Aracla.com bir <strong>saatlik araç kiralama</strong> platformudur. Fakat ihtiyacınıza göre <strong>günlük, haftalık ya da aylık da araç
            kiralayabilirsiniz</strong>
            Standart araç kiralama firlamalarından aracınızı kiralarken, minimum 1 günlük araç kiralar ve ücretini ödersiniz.
            Fakat aracla.com ile sadece kullandığınız kadar ödeme yaparsınız. Acil durumlarda, önemli iş toplantılarında kısa süreli araç ihtiyacınızı
            karşılamak için tüm gün araç kiralamanıza artık gerek yok. Aracla.com ile saatlik araç kiralar ve kullandığınız kadar ödeme yaparsınız.
            Ekstra yakıt ücreti olmadan anlaşmalı istasyonlarda yakıtınızı araçla kartınız ile ücretsiz doldurursunuz.
          </p>
        </div>
      </div>
    </div>

    <div id="yol-yardim">
      <div class="section">
        <div class="inner">
          <h2>Yol Yardım</h2>
          <img src="../img/yol-yardim.jpg" alt="Araçla Yol Yardım">
          <h3>Yol yardım için 7/24 çağrı merkezimizi arayabilirsiniz</h3>
          <p>
            Kaza, yaralanma vb durumlarda; öncelikle trafik polisi (154), polis (155) ya da jandarma (156) yı
            aramanız, aracın yerini değiştirmeden, en yakın polis ve jandarma karakolundan kaza ve alkol raporu
            almanız gerekmektedir. Sonrasında çağrı merkezimizi arayarak yol yardım alabilirsiniz.
          </p>
          <p>
            aracla.com yanyın, yaralanmalar vb. acil durumlar için, araç bagajlarında yangın tüpü ve ilk yardım
            çantası bulundurur.
          </p>
        </div>
      </div>
    </div>

    <div class="section" id="aracla-club">
      <img src="https://res.cloudinary.com/aracla-com/image/upload/v1495802346/club-white.png" alt="Superaracla Club"
           width="64">
      <h3>SUPERARACLA CLUB</h3>
      <span>_______ Araçladıkça kazandıran ve sizi ödüllendiren araç paylaşım klubü _______</span>
    </div>
    <div class="section" id="aracla-club--bottom">
      <div class="inner">
        <div class="items">
          <div class="item">
            <div class="item--inner">
              <img src="https://res.cloudinary.com/aracla-com/image/upload/v1495802457/no-money.png"
                   alt="Depozito Ücretsiz" height="60">
              <h3>DEPOZİTO VE ÜYELİK ÜCRETSİZ</h3>
            </div>
          </div>
          <div class="item">
            <div class="item--inner">
              <img src="https://res.cloudinary.com/aracla-com/image/upload/v1495802489/kumbara.png"
                   alt="Araçladıkça Kazanın" height="60">
              <h3>ARAÇLADIKÇA ARAÇLALİRA KAZAN</h3>
            </div>
          </div>
          <div class="item">
            <div class="item--inner">
              <img src="https://res.cloudinary.com/aracla-com/image/upload/v1495802517/konumuma-aracla.png"
                   alt="Ücretsiz Konumuma Araçla" height="60">
              <h3>ÜCRETSİZ KONUMUMA ARAÇLA</h3>
            </div>
          </div>
          <div class="item">
            <div class="item--inner">
              <img src="https://res.cloudinary.com/aracla-com/image/upload/v1495802546/davet-et.png"
                   alt="Arkadaşını Davet Et" height="60">
              <h3>ARKADAŞINI DAVET ET, KAZAN</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="video">
      <!-- <video poster="../img/transparent.png">
          <source src="video/trailer.mp4" type="video/mp4">
          <source src="video/trailer-mobile.m4v" type="video/m4v">
      </video> -->
      <div class="center">
        <h3>BİZ KİMİZ?</h3>
        <a href="#" class="play-button"></a>
      </div>
    </div>

    <div id="keywords">
      <div class="section">
        <div class="inner">
          <h2>Kategoriler</h2>
          <div class="col">
            <h3>En Ucuz Araç Kiralama</h3>
            <a href="#">Ankara Araç Kiralama</a>
            <a href="#">İstanbul Araç Kiralama</a>
            <a href="#">İzmir Araç Kiralama</a>
            <a href="#">Antalya Araç Kiralama</a>
            <a href="#">Bursa Araç Kiralama</a>
            <a href="#">Çankaya Araç Kiralama</a>
          </div>
          <div class="col">
            <h3>Periyodik Araç Kiralama</h3>
            <a href="#">Saatlik Araç Kiralama</a>
            <a href="#">Günlük Araç Kiralama</a>
            <a href="#">Haftalık Araç Kiralama</a>
            <a href="#">Aylık Araç Kiralama</a>
            <a href="#">Araç Kiralama Fiyatları</a>
          </div>
          <div class="col">
            <h3>Hava Alanı Araç Kiralama</h3>
            <a href="#">Havalimanı Araç Kiralama</a>
            <a href="#">Esenbaoğ Havalimanı Araç Kiralama</a>
            <a href="#">Sabiha Gökçen Havalimanı Araç Kiralama</a>
            <a href="#">Atatürk Havalimanı Araç Kiralama</a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Calculator from '@/components/Calculator'
  import DatePicker from '@/components/DatePicker'
  import CarSlider from '@/components/CarSlider'
  import OfficeSlider from '@/components/OfficeSlider'
  import AraclaNotification from '@/components/AraclaNotification'
  import {handleException} from '@/utils/ExceptionUtils'
  import axios from 'axios'

  export default {
    name: 'HomePage',
    components: {Calculator, DatePicker, CarSlider, OfficeSlider, AraclaNotification},
    data () {
      return {
        active: false,
        selectedColumn: '',
        parkingPoints: [],
        selectedParkingPoint: {},
        isParkinPointsLoading: true,

        startDate: null,
        endDate: null,

        pickUpDate: null,
        pickUpHour: null,
        dropOffDate: null,
        dropOffHour: null,

        startTimeOptions: [],
        selectedStartTimeOptionValue: -1,
        endTimeOptions: [],
        selectedEndTimeOptionValue: -1,

        today: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())

      }
    },
    methods: {
      loadParkingPoints () {
        this.selectedColumn = 'col1'
        fetch(`/api/offices`)
          .then((res) => {
            return res.json()
          })
          .then((res) => {
            this.parkingPoints = res
            this.isParkinPointsLoading = false
            localStorage.setItem('parkingPoints', JSON.stringify(this.parkingPoints))
          })
      },
      loadTimes () {
        fetch('static/js/jsons/saatler.json')
          .then((res) => {
            return res.json()
          })
          .then((res) => {
            this.startTimeOptions = res.startTime
            this.endTimeOptions = res.endTime
          })
      },
      showDateTime (cname) {
        this.selectedColumn = cname
      },
      selectParkingPoint (item) {
        this.selectedParkingPoint = item
        this.showDateTime('col2')
      },
      closeSubMenus () {
        this.selectedColumn = ''
      },
      selectStartDate (day) {
        this.startDate = day.date
      },
      selectEndDate (day) {
        this.endDate = day.date
      },
      checkAvailableCars () {
        let reservationParams = {
          dropOffDate: this.dropOffDate,
          dropOffHour: this.dropOffHour,
          pickUpDate: this.pickUpDate,
          pickUpHour: this.pickUpHour,
          pickUpLocation: this.selectedParkingPoint.code
        }
        axios.post('/api/calculateAvailableReservations', reservationParams).then((response) => {
          sessionStorage.setItem('reservationParams', JSON.stringify(reservationParams))
          this.$router.push({
            name: 'SelectCar', params: { availableCars: response.data, parkingPoints: this.parkingPoints }
          })
        }).catch((err) => {
          handleException(err, (desc) => {
            this.$refs.notification.goster({
              title: 'Hata!',
              content: desc
            })
          })
        })
      }

    },
    created () {
      console.log('yüklendi')
      this.loadTimes()
    },
    watch: {
      selectedStartTimeOptionValue (t) {
        console.log(t)
        setTimeout(() => {
          this.showDateTime('col3')
        }, 500)
      },

      // set disabled times by checking to dates
      endDate (d) {
        if (this.endDate) {
          if (!this.startDate) return
          this.endTimeOptions.map((option) => {
            if (this.startDate.toString() === d.toString()) {
              if (option.value < this.selectedStartTimeOptionValue + 4) {
                option.disabled = true
              } else {
                option.disabled = false
              }
            } else {
              option.disabled = false
            }
          })
        }
      }
    },
    computed: {
      startDateLabel () {
        let sd = new Date(this.startDate)
        if (this.startDate) {
          // first of all, reset end and times
          this.endDate = null
          this.dropOffDate = null
          this.dropOffHour = null
          this.selectedEndTimeOptionValue = -1

          // create temporary variables
          let tarihLabel = ''
          let saatLabel = ''
          if (this.selectedStartTimeOptionValue >= 0) {
            saatLabel = this.startTimeOptions[this.selectedStartTimeOptionValue].name
            this.pickUpHour = saatLabel
            tarihLabel = `${sd.getDate()}/${sd.getMonth() + 1}/${sd.getFullYear()} - ${saatLabel}`
          } else {
            tarihLabel = `${sd.getDate()}/${sd.getMonth() + 1}/${sd.getFullYear()}`
          }
          this.pickUpDate = `${sd.getDate()}/${sd.getMonth() + 1}/${sd.getFullYear()}`
          return tarihLabel
        } else {
          return 'Alış Tarihi Seçiniz'
        }
      },
      endDateLabel () {
        let ed = new Date(this.endDate)
        if (this.endDate) {
          let tarihLabel = ''
          let saatLabel = ''
          if (this.selectedEndTimeOptionValue >= 0) {
            saatLabel = this.startTimeOptions[this.selectedEndTimeOptionValue].name
            this.dropOffHour = saatLabel
            tarihLabel = `${ed.getDate()}/${ed.getMonth() + 1}/${ed.getFullYear()} - ${saatLabel}`
          } else {
            tarihLabel = `${ed.getDate()}/${ed.getMonth() + 1}/${ed.getFullYear()}`
          }
          this.dropOffDate = `${ed.getDate()}/${ed.getMonth() + 1}/${ed.getFullYear()}`
          return tarihLabel
        } else {
          return 'Teslim Tarihi Seçiniz'
        }
      }
    },
    directives: {
      'click-outside': {
        bind: function (el, binding, vNode) {
          // Provided expression must evaluate to a function.
          if (typeof binding.value !== 'function') {
            const compName = vNode.context.name
            let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`
            if (compName) {
              warn += `Found in component '${compName}'`
            }

            console.warn(warn)
          }
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
    }
  }
</script>

<style lang="scss" >
  @import "../styles/global";
  @import "../styles/main";
  @import "../styles/section";
  @import "../styles/advantage";
  @import "../styles/dortadim";

</style>

