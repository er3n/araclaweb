<template>
  <div id="car-parks">
    <div class="inner">
      <div class="parking-points">
        <h3>Park Noktalarımız</h3>
        <ul>
          <li><a href="#">Arma Kule</a></li>
          <li><a href="#">Base Life Club</a></li>
          <li><a href="#">Beysupark Yaşam Merkezi</a></li>
          <li><a href="#">Bilkent Cyberpark</a></li>
          <li><a href="#">Grup Volvo</a></li>
          <li><a href="#">Volan Volvo</a></li>
          <li><a href="#">Next Level avm</a></li>
          <li><a href="#">Yeni Mahalle</a></li>
          <li><a href="#">ODTÜ Teknokent</a></li>
          <li><a href="#">Hacettepe Teknokent</a></li>
          <li><a href="#">Ankara Teknokent</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CarParks'
  }
</script>

<style lang="scss">
  #car-parks {
    width: 100%;
    height: 800px;
    background: url(../img/car-parks/2.jpg);
    background-size: cover;
    .inner {
      width: 1024px;
      margin: auto;
      padding: 50px 0;
      overflow: hidden;
      .parking-points {
        float: left;
        background: #fff;
        width: 400px;
        padding: 30px 40px;
      }
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
  }
</style>
