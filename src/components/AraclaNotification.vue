<template>
  <div id="notification" :class="{ active: isActive }">
    <img src="../img/icons/notification-error.png" alt="Hata" width="100" />
    <div class="description">
      <span class="title">{{ title }}</span>
      <span class="content">{{ content }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AraclaNotification',
  data () {
    return {
      isActive: false,
      title: undefined,
      content: undefined
    }
  },
  methods: {
    goster (params) {
      this.title = params.title
      this.content = params.content
      this.isActive = true
      setTimeout(() => {
        this.isActive = false
      }, 5000)
    }
  },
  created () {
    console.log('Notification yüklendi')
  }
}
</script>

<style lang="scss">
@import "../styles/colors";
  #notification {
    position: fixed;
    max-width: 480px;
    top: 20px;
    right: -2000px;
    background: #fff;
    padding: 30px 40px;
    border-radius: 1px;
    z-index: 1;
    box-shadow: 0 0 25px 5px rgba(0,0,0,.1);
    transition: ease-out all .3s;
    &.active {
      right: 20px;
    }
    img {
      float: left;
      margin-right: 20px;
    }
    .description {
      float: left;
      max-width: 280px;
      .title {
        display: block;
        margin-top: 10px;
        color: $ne-oderim;
        font-weight: 500;
        font-size: 20px;
      }
      .content {
        display: block;
        margin-top: 10px;
        color: $ne-oderim;
        font-weight: 400;
        font-size: 15px;
        line-height: 1.4;
      }
    }
    .close {
      background: $hover-color;
      color: #fff;
      padding: 8px 20px;
      cursor: pointer;
      border-radius: 30px;
      margin-top: 20px;
      display: inline-block;
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 400;
      box-shadow: 0 0 20px lighten($hover-color, 35%);
    }
  }
</style>
