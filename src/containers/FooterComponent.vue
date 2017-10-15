<template>
  <footer>
    <div class="inner">
      <div class="row" id="contacts">
        <div class="social-and-contact">
          <div class="phone">
            <span>Çağrı Merkezi</span>
            <h4>0850 840 2722</h4>
          </div>
          <div class="social-buttons">
            <a href="#" rel="nofollow"><img src="../img/icons/social/facebook.svg" height="20" alt="Facebook"></a>
            <a href="#" rel="nofollow"><img src="../img/icons/social/twitter.svg" height="20" alt="Twitter"></a>
            <a href="#" rel="nofollow"><img src="../img/icons/social/instagram.svg" height="20" alt="Instagram"></a>
            <a href="#" rel="nofollow"><img src="../img/icons/social/linkedin.svg" height="20" alt="Linkedin"></a>
            <a href="#" rel="nofollow"><img src="../img/icons/social/google-plus.svg" height="20" alt="Google Plus"></a>
          </div>
        </div>
        <div class="apps-and-visa">
          <a href="#"><img src="../img/google-play.png" alt="Google Play" width="90"></a>
          <a href="#"><img src="../img/appstore.png" alt="Google Play" width="90"></a>
          <a href="#"><img src="../img/visa.png" alt="Google Play" width="90"></a>
        </div>
      </div>
      <div class="row" id="footer-links">
        <ul>
          <li><a href="#">Üyelik Sözleşmesi</a></li>
          <li><a href="#">Gizlilik Sözleşmesi</a></li>
          <li><a href="#">Mesafeli Satış Sözleşmesi</a></li>
          <li><a href="#">Teslimat ve İade</a></li>
        </ul>
        <ul>
          <li><a href="#">SSS</a></li>
          <li><a href="#">Hakkımızda</a></li>
          <li><a href="#">İletişim</a></li>
        </ul>
      </div>
      <div class="row" id="lead-row">
        <p class="lead">
          Bimobil Yazılım Otomotiv Sanayi ve Ticaret AŞ 2016 Tüm Hakları Saklıdır.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'FooterComponent',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../styles/global";

  footer {
    background: #062232;
    padding: 24px;
    color: #fff;
    .row {
      overflow: hidden;
    }
    .inner {
      max-width: 1200px;
      margin: auto;
    }
    .social-and-contact {
      float: left;
      .phone {
        span {
          font-size: 14px;
          display: block;
          font-weight: 300;
          color: #fff;
        }
        h4 {
          font-size: 20px;
          font-weight: 500;
          color: #fff;
        }
      }
      .social-buttons {
        overflow: hidden;
        margin-top: 20px;
        a {
          float: left;
          margin-right: 10px;
        }
      }
    }
    .apps-and-visa {
      float: right;
      a {
        display: block;
        margin-bottom: 5px;
      }
    }

    ul {
      float: left;
      margin-top: 30px;
      &:last-child {
        float: right;
      }
      li {
        list-style: none;
        a {
          color: #fff;
          font-size: 16px;
          margin-bottom: 5px;
          display: block;
          font-weight: 200;
        }
      }
    }

    .lead {
      font-size: 16px;
      color: #5687A3;
      margin-top: 30px;
      line-height: 24px;
      font-weight: 400;
    }

    @media screen and (min-width: $break-mobile + 1) and (max-width: $break-laptop)  {
      overflow: hidden;
      #footer-links {
        float: left;
        width: 45%;
        ul {
          margin-top: 0;
        }
      }
      #contacts {
        float: right;
        width: 40%;
      }
      #lead-row {
        display: block;
        width: 100%;
      }
    }

    @media screen and (min-width: $break-laptop + 1) {
      overflow: hidden;
      #footer-links {
        float: left;
        width: 45%;
        ul {
          margin-top: 0;
          a {
            font-size: 18px;
            line-height: 24px;
            font-weight: 300;
          }
        }
      }
      #contacts {
        float: right;
        width: 40%;
      }
      #lead-row {
        display: block;
        width: 100%;
      }

      .apps-and-visa {
        img {
          width: 120px;
        }
      }
    }


  }

</style>
