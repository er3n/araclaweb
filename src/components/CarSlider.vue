<template>
  <div class="section" id="araclar">
    <div class="inner">
      <h2>Kiralık Araçlar ve Fiyatları</h2>
      <slick v-if="prices.length > 0" class="slider" ref="slick" :options="slickOptions">

        <div v-for="item in prices" class="slide">

          <img :src="item.imageUrl" :alt="item.model"
               height="90">
          <h3>{{item.mark}} {{item.model}}</h3>
          <h4>{{item.modelAttributes}}</h4>
          <div class="price-group">
            <p>Saatlik:
              <strong>{{item.hourlyPrice}} ₺</strong>
              <small> {{item.hourlyFreeOdemeter}} km ücretsiz</small>
            </p>
            <p>Günlük:
              <strong>{{item.dailyPrice}} ₺</strong>
              <small> {{item.dailyFreeOdemeter}} km ücretsiz</small>
            </p>
            <p>Haftalık:
              <strong>{{item.weeklyPrice}} ₺</strong>
              <small> {{item.weeklyFreeOdemeter}} km ücretsiz</small>
            </p>
          </div>
          <div class="ek-bilgi">
            Ücretsiz verilen mesafenin aşımında km başı 0.50 ₺ mesafe ücreti ödersiniz.
          </div>

        </div>

      </slick>
    </div>

  </div>
</template>

<script>
  import Slick from 'vue-slick'
  import axios from 'axios'

  export default {
    name: 'CarSlider',
    components: {Slick},
    data () {
      return {
        prices: [],
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
    },
    created () {
      console.log('oley')
      axios.get('/api/priceSheet')
        .then((res) => {
          console.log(res.data)
          this.prices = res.data
        })
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
      padding: 30px 15px;
      .slide {
        box-shadow: 0 0 20px rgba(0, 0, 0, .1);
      }
    }
  }
</style>
