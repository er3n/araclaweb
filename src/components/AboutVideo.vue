<template>
  <div id="about_video">
    <div class="intro">
      <h3>Aracla.com Nedir?</h3>
      <p class="richtext">
        Aracla.com, Türkiyede en uygun fiyatlardan araç kiralayabileceğiniz saatlik araç kiralama platformudur.
      </p>
    </div>
    <a @click="playVideo" class="play-button"></a>
    <iframe v-if="isVideoPlaying" width="560" height="315" src="https://www.youtube.com/embed/FKM2Rjb093U?autoplay=1" frameborder="0" allowfullscreen></iframe>
    <div class="layer"></div>
  </div>  
</template>

<script>
  export default {
    name: 'AboutVideo',
    data () {
      return {
        isVideoPlaying: false
      }
    },
    methods: {
      playVideo () {
        this.isVideoPlaying = true
      }
    },
    created () {
      console.log('video section yüklendi')
    }
  }
</script>

<style lang="scss" scoped>
  @import "../styles/common";

  #about_video {
    position: relative;
    width: 100%;
    height: 850px;
    // background: url(../img/video-cover.jpg);
    background: url(https://res.cloudinary.com/aracla-com/image/upload/c_scale,w_1200/v1509107233/video-cover_wcpiu8.jpg);
    background-size: cover;
    .layer {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background: #46afd8;
      opacity: .84;
    }
    .intro {
      position: relative;
      float: left;
      padding-left: 40px;
      max-width: 480px;
      text-align: left;
      padding-top: 50px;
      z-index: 1;
      h3 {
        color: #fff;
        font-size: 36px;
        font-weight: 500;
        letter-spacing: .5px;
        margin-bottom: 20px;
      }
      .richtext {
        color: #fff;
        font-weight: 400;
        letter-spacing: .3px;
      }
    }
    .play-button {
      position: absolute;
      width: 100px;
      height: 100px;
      left: calc(50% - 50px);
      top: calc(50% - 50px);
      background: url(../img/icons/play-button.svg);
      background-size: cover;
      cursor: pointer;
      z-index: 1;
    }
    iframe {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: 1;
    }

    @media screen and (max-width: $break-425) {
      height: 300px;
      .intro {
        padding-top: 20px;
        padding-left: 20px;
        max-width: 100%;
        h3 {
          font-size: 32px;
          margin-bottom: 10px;
        }
      }
      .play-button {
        width: 60px;
        height: 60px;
        left: calc(50% - 30px);
        top: calc(50%);
      }
    }

    @media screen and (min-width: $break-425 + 1px) and (max-width: $break-768) {
      height: 480px;
    }
    @media screen and (min-width: $break-768 + 1px) and (max-width: $break-1024) {
      height: 600px;
    }
  }
</style>