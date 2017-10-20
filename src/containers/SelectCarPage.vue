<template>
  <div class="search-result-page">
    <div class="container">
      <div class="cars-container" v-cloak>
        <div v-for="car in availableCars" class="car-item" :id="car.model.id">
          <div class="car-inner">
            <div class="car-image">
              <!-- <img :src="car.model.imageUrl" :alt="car.model.name"> -->
              <img src="http://localhost:8080/static/img/micra-2.d96ca2a.jpg" alt="">
            </div>
            <div class="description">
              <h2>{{ car.model.mark.name }} {{ car.model.name }}</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, repellendus?</p>
              <ul>
                <li><span class="per-hour"><img src="../img/icons/per-hour.svg" height="17"> Saatlik: 10 ₺ <note>(10km ücretsiz mesafe)</note></span></li>
                <li><span class="per-day"><img src="../img/icons/per-day.svg" height="17"> Günlük: 120 ₺ <note>(120km ücretsiz mesafe)</note></span></li>
                <li><span class="per-day"><img src="../img/icons/per-week.svg" height="17"> Haftalık: 120 ₺ <note>(120km ücretsiz mesafe)</note></span></li>
              </ul>
              <span class="price">₺ {{ car.totalPrice }}<small> / Toplam Fiyat</small></span>
              <a href="#" class="make-reserve">Rezerve Et</a>
            </div>
          </div>
          <!-- <div class="select">
            <small>Kiralama Fiyatı</small>
            <h3>{{ car.totalPrice }} ₺</h3>
            <a @click="selectCar(car)" class="select-button">Bu Aracı Seç</a>
          </div> -->
        </div>
      </div>
      <div class="sidebar" v-cloak>
        <div class="item">
          <span class="title">Park Noktası</span>
          <span class="content">{{ pickUpLocation }}</span>
        </div>
        <div class="item">
          <span class="title">Alış Tarihi</span>
          <span class="content">{{ pickUpDate }}</span>
        </div>
        <div class="item">
          <span class="title">Teslim Tarihi</span>
          <span class="content">{{ dropOffDate }}</span>
        </div>
        <div class="item">
          <span class="title">Toplam Fiyat</span>
          <span class="content fiyat">{{ totalPrice || 0 }} ₺</span>
        </div>
        <div class="item" v-if="selectedCar">
          <span class="title">Seçilen Araç</span>
          <span class="content">{{ selectedCar.model.mark.name }}</span>
        </div>
        <div class="item">
          <a @click="confirmReservation" class="confirm-button" v-if="totalPrice">Rezervasyonu Onayla</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectCarPage',
  data () {
    return {
      availableCars: this.$route.params.availableCars,
      parkingPoints: this.$route.params.parkingPoints,
      selectedCar: undefined,
      pickUpDate: undefined,
      dropOffDate: undefined,
      pickUpLocation: undefined,
      totalPrice: undefined
    }
  },
  methods: {
    findParkingPoint (location) {
      this.parkingPoints.map((parkingPoint) => {
        if (parkingPoint.code === location) {
          this.pickUpLocation = parkingPoint.name
        }
      })
    },
    confirmReservation () {
      console.log('login olmamış')
      // var header = window.header
      // header.openPage('signLoginPage')
    },
    selectCar (car) {
      this.selectedCar = car
      this.totalPrice = this.selectedCar.totalPrice
    }
  },
  created () {
    console.log('SelectCarPage Yüklendi')
    let reservationParams = JSON.parse(sessionStorage.getItem('reservationParams'))
    this.findParkingPoint(reservationParams.pickUpLocation)
    this.pickUpDate = `${reservationParams.pickUpDate} - ${reservationParams.pickUpHour}`
    this.dropOffDate = `${reservationParams.dropOffDate} - ${reservationParams.dropOffHour}`
  }
}
</script>

<style lang="scss">
@import "../styles/global";
@import "../styles/colors";
@import "../styles/section";

$text-color: #4D5966;

@mixin search-result-page {
  background: #f5f5f5;
  padding: 60px 0;
}
.search-result-page {
  @include search-result-page;
}

@mixin container {
  margin: 30px auto;
  width: 960px;
  padding: 0 30px;
  overflow: hidden;
}
.container {
  @include container;
}

@mixin cars-container {
  float: left;
  width: 73%;
  margin-right: 2%;
}
.cars-container {
  @include cars-container;
}

@mixin car-item {
  background: #fff;
  margin-bottom: 30px;
  box-shadow: 0 0 30px rgba(0,0,0,.07);
}
@mixin car-inner {
  padding: 40px 30px;
  overflow: hidden;
}
@mixin car-image {
  width: 35%;
  margin-right: 5%;
  float: left;
  padding: 80px 0;
  img {
    max-width: 100%;
  }
}
@mixin car-description {
  float: left;
  width: 60%;
  h2 {
    font-size: 21px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  p {
    font-size: 17px;
    line-height: 22px;
    margin-bottom: 15px;
    color: lighten($text-color, 20%);
    font-weight: 400;
  }
  ul {
    li {
      font-weight: 400;
      list-style-type: none;
      display: block;
      margin-bottom: 15px;
      span {
        font-size: 16px;
        font-weight: 400;
        color: lighten($text-color, 15%);
        img {
          float: left;
          margin-right: 10px;
        }
        note {
          color: $link-color;
          font-weight: 400;
          font-size: 16px;
        }
      }
    }
  }
  .price {
    display: block;
    margin-top: 20px;
    font-size: 30px;
    font-weight: 500;
    color: $link-color;
    small {
      color: #aaa;
      font-size: 14px;
      font-weight: 400;
    }
  }
  .make-reserve {
    background: $hover-color;
    color: #fff;
    border-radius: 30px;
    font-size: 15px;
    font-weight: 400;
    padding: 7px 16px;
    display: block;
    float: right;
  }
}
.car-item {
  @include car-item;
}
.car-inner {
  @include car-inner;
}
.car-image {
  @include car-image;
}
.description {
  @include car-description;
}


[v-cloak] {
  display: none !important;
}
</style>
