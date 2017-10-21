<template>
  <div class="section" id="park-noktalarimiz">
    <div class="inner">
      <h2>Park Noktalarımız</h2>
      <h3>aracla.com ile size en yakın park noktası üzerinden araçlayın. Kullandığınız kadar ödeyin!</h3>
      <div class="slider">
        <slick class="slider" ref="slick" :options="slickOptions">
          <a href="armakule" class="slide">
            <img src="../img/park-noktalari/arma-kule_640w.jpg" srcset="../img/park-noktalari/arma-kule_320w.jpg 480w"
                 height="240" alt="Arma Kule">
            <span class="title">Arma Kule</span>
          </a>
          <a href="bilkent-cyberpark" class="slide">
            <img src="../img/park-noktalari/cyberpark_640w.jpg" srcset="../img/park-noktalari/cyberpark_320w.jpg 480w"
                 height="240" alt="Bilkent Cyberpark">
            <span class="title">Bilkent Cyberpark</span>
          </a>
          <a href="nextlevel" class="slide">
            <img src="../img/park-noktalari/nextlevel_640w.jpg" srcset="../img/park-noktalari/nextlevel_320w.jpg 480w"
                 height="240" alt="NextLevel">
            <span class="title">Next Level</span>
          </a>
          <a href="base-life-club" class="slide">
            <img src="../img/park-noktalari/base-life-club_640w.jpg" height="240" alt="Base Life Club">
            <span class="title">Base Life Club</span>
          </a>
          <a href="beysupark" class="slide">
            <img src="../img/park-noktalari/beysupark-yasam-merkezi_640w.jpg" height="240"
                 alt="Beysupark Yaşam Merkezi">
            <span class="title">Beysupark Yaşam Merkezi</span>
          </a>
        </slick>
      </div>
    </div>
  </div>
</template>

<script>
  import Slick from 'vue-slick'
  export default {
    name: 'CarSlider',
    components: {Slick},
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
  @import "../styles/slick/slick.css";

  #park-noktalarimiz {
    padding-top: 30px;
    h3 {
        font-size: 22px;
        font-weight: 300;
        margin-bottom: 20px;
    }
    .slick-dots {
      display: none !important;
    }
    .slider {
        .slick-arrow {

            width: 64px !important;
            height: 64px !important;
            z-index: 1;
            top: 120px;
            &::before {
                content: none !important;
            }
            &.slick-prev {
                background: url(../img/icons/slider-left-arrow.svg) no-repeat;
                left: -90px;
            }
            &.slick-next {
                background: url(../img/icons/slider-right-arrow.svg) no-repeat;                
                right: -90px;
            }
        }
        .slide {
            float: left;
            width: 240px;
            position: relative;
            margin-right: 15px;
            img {
                width: 100%;
            }
            .title {
                position: absolute;
                bottom: 20px;
                height: 40px;
                line-height: 40px;
                padding: 0 10px;
                width: calc(100% - 20px);
                left: 0;
                color: #fff;
                font-size: 24px;
                font-weight: 500;
            }
        }
    }

    @media screen and (max-width: $break-320) {
        h3 {
            font-size: 16px;
            line-height: 1.5;
        }
        .slider {
            .slide {
                img {
                    height: 180px;
                }
                .title {
                    font-size: 18px;
                }
            }
        }
    }

    @media screen and (min-width: $break-320 + 1px) and (max-width: $break-425) {
        h3 {
            font-size: 18px;
            line-height: 1.5;
        }
        .slider {
            .slide {
                img {
                    height: 270px;
                }
                .title {
                    font-size: 18px;
                }
            }
        }
    }

    @media screen and (min-width: $break-425 + 1) and (max-width: $break-768) {
        h3 {
            font-size: 19px;
            line-height: 1.5;
        }
        .slider {
            .slide {
                img {
                    height: 280px;
                }
                .title {
                    font-size: 22px;
                }
            }
        }
    }

    @media screen and (min-width: $break-768 + 1px) and (max-width: $break-1024) {
        .slider {
            .slide {
                img {
                    height: 300px;
                }
                .title {
                    font-size: 22px;
                }
            }
        }
    }

    @media screen and (min-width: $break-1024 + 1) {
        .slider {
            .slide {
                width: 320px !important;
                img {
                    height: 300px;
                }
            }
        }
    }
}


</style>
