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


<style scoped lang="scss">
  @import "../styles/global";
  @import "../styles/section";
  @import "../styles/slick/slick.css";
  @import "../styles/parking-points";

</style>
