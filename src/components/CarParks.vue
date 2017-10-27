<template>
  <div id="car-parks">
    <div class="inner">
      <div class="parking-points">
        <h3>Park Noktalarımız</h3>
        <ul>
          <li v-for="parkinPoint in parkingPoints"><a href="#">{{ parkinPoint.name }}</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CarParks',
    data () {
      return {
        parkingPoints: []
      }
    },
    created () {
      this.parkingPoints = JSON.parse(localStorage.getItem('parkingPoints'))
    }
  }
</script>

<style lang="scss" scoped>
  @import "../styles/common";
  #car-parks {
    width: 100%;
    overflow: hidden;
    // background: url(../img/car-parks/2.jpg);
    background: url(https://res.cloudinary.com/aracla-com/image/upload/c_scale,w_1440/v1509108720/2_dloynw.jpg);
    background-size: cover;
    .parking-points {
      float: left;
      background: #fff;
      width: 350px;
      padding: 30px 40px;
      margin: 50px 0;
      h3 {
        font-size: 30px;
        font-weight: 500;
        color: #333;
        margin-bottom: 40px;
      }
      li {
        display: block;
        font-size: 18px;
        margin-bottom: 20px;
        a {
          color: #489DC3;
          font-weight: 400;
        }
      }
    }
    
    @media screen and (max-width: $break-425) {
      .parking-points {
        width: calc(100% - 60px);
        margin: 0;
      }
    }

    @media screen and (min-width: $break-425 + 1px) and (max-width: $break-1024) {
      .parking-points {
        margin-left: 30px;
      }
    }
  }
</style>
