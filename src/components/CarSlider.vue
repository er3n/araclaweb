<template>
  <div class="section" id="araclar">
    <div class="inner">
      <h2>Kiralık Araçlar ve Fiyatları</h2>
      <slick class="slider" ref="slick" :options="slickOptions">

        <div class="slide">
          <img src="https://res.cloudinary.com/aracla-com/image/upload/v1502797848/a3.jpg" alt="Audi A3 16. Tdi" height="90">
          <h3>Audi A3</h3>
          <h4>1.6 Tdi Otomatik Vites</h4>
          <div class="price-group">
            <p>Saatlik:
              <strong>18 ₺</strong>
              <small> 10 km ücretsiz</small>
            </p>
            <p>Günlük:
              <strong>178 ₺</strong>
              <small> 120 km ücretsiz</small>
            </p>
            <p>Haftalık:
              <strong>1022 ₺</strong>
              <small> 480 km ücretsiz</small>
            </p>
          </div>
          <div class="ek-bilgi">
            Ücretsiz verilen mesafenin aşımında km başı 0.50 ₺ mesafe ücreti ödersiniz.
          </div>

        </div>

        <div class="slide">
          <img src="https://res.cloudinary.com/aracla-com/image/upload/v1502798084/passat_owredc.jpg" alt="Passat 16. Tdi Siyah Manual Vites" height="90">
          <h3>VW Passat</h3>
          <h4>1.6 Tdi Manual Vites</h4>
          <div class="price-group">
            <p>Saatlik:
              <strong>15 ₺</strong>
              <small> 10 km ücretsiz</small>
            </p>
            <p>Günlük:
              <strong>152 ₺</strong>
              <small> 120 km ücretsiz</small>
            </p>
            <p>Haftalık:
              <strong>854 ₺</strong>
              <small> 480 km ücretsiz</small>
            </p>
          </div>
          <div class="ek-bilgi">
            Ücretsiz verilen mesafenin aşımında km başı 0.60 ₺ mesafe ücreti ödersiniz.
          </div>

        </div>

        <div class="slide">
          <img src="https://res.cloudinary.com/aracla-com/image/upload/v1502798450/volvo-v40-siyah_640w_r6rdpd.jpg" alt="Volvo V40 Siyah" height="90">
          <h3>Volvo</h3>
          <h4>V40 T3 Otomatik Vites</h4>
          <div class="price-group">
            <p>Saatlik:
              <strong>14 ₺</strong>
              <small> 10 km ücretsiz</small>
            </p>
            <p>Günlük:
              <strong>145 ₺</strong>
              <small> 120 km ücretsiz</small>
            </p>
            <p>Haftalık:
              <strong>819 ₺</strong>
              <small> 480 km ücretsiz</small>
            </p>
          </div>
          <div class="ek-bilgi">
            Ücretsiz verilen mesafenin aşımında km başı 0.70 ₺ mesafe ücreti ödersiniz.
          </div>

        </div>

        <div class="slide">
          <img src="https://res.cloudinary.com/aracla-com/image/upload/v1502802296/volvo-v40-beyaz_640w_jdu1k2.jpg" alt="Volvo V40 Beyaz" height="90">
          <h3>Volvo</h3>
          <h4>V40 D2 Otomatik Vites</h4>
          <div class="price-group">
            <p>Saatlik:
              <strong>16 ₺</strong>
              <small> 10 km ücretsiz</small>
            </p>
            <p>Günlük:
              <strong>167 ₺</strong>
              <small> 120 km ücretsiz</small>
            </p>
            <p>Haftalık:
              <strong>924 ₺</strong>
              <small> 480 km ücretsiz</small>
            </p>
          </div>
          <div class="ek-bilgi">
            Ücretsiz verilen mesafenin aşımında km başı 0.50 ₺ mesafe ücreti ödersiniz.
          </div>

        </div>

        <div class="slide">
          <img src="../img/cars/micra-2.jpg" alt="Nissan Micra" height="90">
          <h3>Nissan Micra</h3>
          <h4>1.2 Street Otomatik Vites</h4>
          <div class="price-group">
            <p>Saatlik:
              <strong>9,5 ₺</strong>
              <small> 10 km ücretsiz</small>
            </p>
            <p>Günlük:
              <strong>102 ₺</strong>
              <small> 120 km ücretsiz</small>
            </p>
            <p>Haftalık:
              <strong>546 ₺</strong>
              <small> 480 km ücretsiz</small>
            </p>
          </div>
          <div class="ek-bilgi">
            Ücretsiz verilen mesafenin aşımında km başı 0.70 ₺ mesafe ücreti ödersiniz.
          </div>

        </div>

      </slick>
    </div>

  </div>
</template>

<script>
import Slick from 'vue-slick'

export default {
  name: 'CarSlider',
  components: { Slick },
  data () {
    return {
      slickOptions: {
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          }
        ]
      }
    }
  }
}
</script>


<style lang="scss">
@import "../styles/global";
@import "../styles/section";


#araclar {
  margin-top: 30px;
  background: #F5F5F5;
  padding: 60px 15px;
  .slider {
    .slick-slide {
      padding-right: 30px !important;
    }
    .slide {
      margin: 15px 15px 15px 0;
      padding: 30px 10px 20px 10px;
      background: #fff;
      text-align: center;
      box-shadow: 0 0 20px rgba(0, 0, 0, .1);
      outline: none;
      img {
        margin: 0 auto 30px auto;
      }
      h3 {
        font-size: 22px;
        font-weight: 300;
        color: #444;
        margin-bottom: 10px;
        text-align: left;
      }
      h4 {
        font-size: 18px;
        font-weight: 500;
        color: #444;
        text-align: left;
        margin-top: 0;
        small {
          color: #888;
          font-size: 16px;
          display: block;
        }
      }
      .price-group {
        margin: 20px auto;
        border-top: 1px dashed #aaa;
        padding-top: 10px;
        p {
          margin-top: 0;
          font-size: 18px;
          font-weight: 400;
          margin-bottom: 8px;
          text-align: left;
          color: #888;
          strong {
            font-weight: 500;
            color: #444;
          }
          small {
            font-size: 17px;
            font-weight: 400;
            color: $main-color;
          }
        }
        .line {
          display: block;
          position: relative;
          background: url(../img/icons/right-arrow-2.svg) 65px 5px no-repeat;
          background-size: 12px;
          height: 24px;
          span {
            position: absolute;
            left: 0;
            font-size: 14px;
            font-weight: 400;
            color: #707070;
            &:last-child {
              left: 90px;
              font-weight: 600;
            }
            small {
              font-size: 14px;
            }
          }
        }
      }
      .ek-bilgi {
        font-size: 16px;
        line-height: 1.6;
        color: darken($link-color, 15%);
        font-weight: 400;
        text-align: left;
      }
      .btn-hesapla {
        padding: 12px 0;
        margin: 20px 0 0 0;
      }
    }
  }

  @media screen and (max-width: 320px) {
    .slide {
      img {
        max-height: 48px !important;
      }
      h3 {
        font-size: 18px;
      }
      h4 {
        font-size: 16px;
      }
    }
  }

  @media screen and (max-width: $break-mobile) {
    h2 {
      font-size: 22px;
    }
    .slider {
      .slide {
        padding: 10px;
        img {
          max-height: 64px;
          margin-bottom: 15px;
        }
        h3 {
          font-size: 22px;
        }
        h4 {
          font-size: 18px;
        }
        .price-group {
          margin: 10px 0;
          p {
            font-size: 18px;
            line-height: 1;
            margin-bottom: 15px;
            small {
              display: block;
              font-size: 16px;
            }
          }
        }
        .ek-bilgi {
          font-size: 14px;
          line-height: 1.4;
        }
      }
    }
  }

  @media screen and (min-width: $break-mobile + 1) and (max-width: $break-tablet) {
    .slide {
      width: 260px !important;
      border: none !important;
      box-shadow: 0 0 20px rgba(0, 0, 0, .1);
    }
  }

  @media screen and (min-width: $break-tablet + 1) and (max-width: $break-laptop) {
    .slide {
      img {
        height: 80px;
      }
    }
  }

  @media screen and (min-width: $break-laptop + 1) {
    background: #F5F5F5;
    padding: 0 15px;
    .slide {
      box-shadow: 0 0 20px rgba(0, 0, 0, .1);
    }
  }
}
</style>