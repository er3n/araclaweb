<template>
  <div id="about_video">
    <div class="inner">
      <div class="intro">
        <h3>Aracla.com Nedir?</h3>
        <p class="richtext">
          Aracla.com, Türkiyede en uygun fiyatlardan araç kiralayabileceğiniz saatlik araç kiralama platformudur.
        </p>
      </div>
      <a @click="playVideo" class="play-button"></a>
    </div>
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

<style lang="scss">
#about_video {
  position: relative;
  width: 100%;
  height: 850px;
  background: url(../img/video-cover.jpg);
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
  .inner {
    position: relative;
    width: 1024px;
    margin: auto;
    z-index: 1;
    .intro {
      padding-top: 100px;
      max-width: 480px;
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
        font-size: 17px;
        line-height: 22px;
        letter-spacing: .3px;
      }
    }
    .play-button {
      position: absolute;
      width: 100px;
      height: 100px;
      left: calc(50% - 50px);
      top: 375px;
      background: url(../img/icons/play-button.svg);
      background-size: cover;
      cursor: pointer;
    }
  }
  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1;
  }
}
</style>