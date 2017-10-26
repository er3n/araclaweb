<template>
  <div class="search-result-page">
    <div class="container">
      <div v-if="isConfirming" class="white-modal">
        <div class="preloader">
          <img src="../img/icons/confirm-preloader.svg" width="100">
          <span class="title">Lütfen bekleyiniz</span>
        </div>
      </div>
      <AraclaNotification ref="notification" />
      <div class="cars-container" v-cloak>
        <div v-for="car in availableCars" class="car-item" :id="car.model.id">
          <div class="car-inner">
            
            <div :class="{ confirm: true, active: car == confirmedCar}">
              <span class="title">Rezervasyon Onay</span>
              <p>Aşağıda rezervasyon bilgileri verilen aracın rezervasyonunu onaylıyor musunuz?</p>
              <div class="reservation-detail">
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
                  <span class="title">KM Başı</span>
                  <span class="content">₺ {{ car.odometerPrice }}</span>
                </div>
              </div>
              <span class="price">₺ {{ car.totalPrice }}<small> / Toplam Fiyat</small></span>
              <div class="option">
                <a @click="confirmReservation(car)" class="make-reserve">Onaylıyorum</a>
                <a @click="cancelConfirm" class="make-reserve make-cancel">Vazgeç</a>
              </div>
            </div>

            <div class="car-image">
              <img :src="car.model.imageUrl" alt="car.model.mark.name">
            </div>
            <div class="description">
              <h2>{{ car.model.mark.name }} {{ car.model.name }}</h2>
              <p>{{ car.model.description }}</p>
              <span class="price">₺ {{ car.totalPrice }}<small> / Toplam Fiyat</small></span>
              <span class="free-km">{{ car.totalFreeOdemeter }} KM ücretsiz mesafe</span>
              <a v-if="user" @click="showConfirmModal(car)" class="make-reserve">Rezerve Et</a>
              <a v-if="!user" class="login-for-reserve">Rezerve Etmek için giriş yapın</a>
            </div>
          </div>
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
        <div class="item" v-if="selectedCar">
          <span class="title">Seçilen Araç</span>
          <span class="content">{{ selectedCar.model.mark.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AraclaNotification from '@/components/AraclaNotification'
import {handleException} from '@/utils/ExceptionUtils'
import axios from 'axios'
export default {
  name: 'SelectCarPage',
  components: {AraclaNotification},
  data () {
    return {
      availableCars: this.$route.params.availableCars,
      parkingPoints: this.$route.params.parkingPoints,
      selectedCar: undefined,
      pickUpDate: undefined,
      dropOffDate: undefined,
      pickUpLocation: undefined,
      totalPrice: undefined,
      user: undefined,
      confirmedCar: false,
      pickUpLocationJSON: undefined,
      isConfirming: false
    }
  },
  methods: {
    findParkingPoint (location) {
      this.parkingPoints.map((parkingPoint) => {
        if (parkingPoint.code === location) {
          this.pickUpLocation = parkingPoint.name
          this.pickUpLocationJSON = parkingPoint
        }
      })
    },
    showConfirmModal (car) {
      this.confirmedCar = car
    },
    cancelConfirm () {
      this.confirmedCar = undefined
    },
    confirmReservation (car) {
      let pickUpDate = JSON.parse(sessionStorage.getItem('reservationParams')).pickUpDate.split('/')
      let pickUpHour = JSON.parse(sessionStorage.getItem('reservationParams')).pickUpHour
      let pickUpTimeForPost = new Date(`${pickUpDate[2]}-${pickUpDate[1]}-${pickUpDate[0]} ${pickUpHour}:00`)

      let dropOffDate = JSON.parse(sessionStorage.getItem('reservationParams')).dropOffDate.split('/')
      let dropOffHour = JSON.parse(sessionStorage.getItem('reservationParams')).dropOffHour
      let dropOfftimeForPost = new Date(`${dropOffDate[2]}-${dropOffDate[1]}-${dropOffDate[0]} ${dropOffHour}:00`)

      let token = localStorage.getItem('token')
      let body = {
        model: car.model,
        dropOffLocation: this.pickUpLocationJSON,
        pickUpLocation: this.pickUpLocationJSON,
        pickUpTime: pickUpTimeForPost,
        dropOffTime: dropOfftimeForPost
      }
      this.isConfirming = true
      axios.post(`/api/myreservations/confirm`, body, {
        headers: {
          'x-auth-token': token
        }
      }).then((response) => {
        this.isConfirming = false
        this.$router.push({
          name: 'SuccessPage', params: { pickUpLocation: this.pickUpLocation, pickUpDate: this.pickUpDate, pickUpHour: this.pickUpHour, selectedCar: this.selectedCar }
        })
      })
      .catch((err) => {
        this.isConfirming = false
        handleException(err, (desc) => {
          this.$refs.notification.goster({
            title: 'Hata!',
            content: desc
          })
        })
      })
    }
  },
  created () {
    console.log('SelectCarPage Yüklendi')
    let reservationParams = JSON.parse(sessionStorage.getItem('reservationParams'))
    this.findParkingPoint(reservationParams.pickUpLocation)
    this.pickUpDate = `${reservationParams.pickUpDate} - ${reservationParams.pickUpHour}`
    this.dropOffDate = `${reservationParams.dropOffDate} - ${reservationParams.dropOffHour}`
    this.user = window.Header.user
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
  width: 1000px;
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
  position: relative;
}
@mixin car-image {
  width: 35%;
  margin-right: 5%;
  float: left;
  padding: 60px 0;
  img {
    max-width: 100%;
  }
}
@mixin confirm {
  padding: 40px 30px;
  position: absolute;
  width: calc(100% - 60px);
  height: calc(100% - 80px);
  background: #fff;
  right: -100%;
  top: 0;
  transition: ease all .2s;
  opacity: 0;
  &.active {
    right: 0;
    opacity: 1;
  }
  .title {
    display: block;
    font-size: 24px;
    font-weight: 400;
    color: $text-color;
    margin-bottom: 20px;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    color: #777;
    margin-bottom: 40px;
  }
  .reservation-detail {
    overflow: hidden;
    margin-bottom: 30px;
    .item {
      float: left;
      margin-right: 30px;
    }
    .title {
      font-size: 14px;
      color: #888;
      display: block;
      font-weight: 400;
      margin-bottom: 5px;
    }
    .content {
      font-size: 20px;
      color: $text-color;
      font-weight: 500;
    }
  }
  .price {
    display: block;
    margin-top: 20px;
    font-size: 38px;
    font-weight: 500;
    color: $main-color;
    small {
      color: #aaa;
      font-size: 14px;
      font-weight: 400;
    }
  }
  .option {
    float: right;
  }
  .make-reserve {
    cursor: pointer;
    background: $hover-color;
    color: #fff;
    border-radius: 30px;
    font-size: 15px;
    font-weight: 400;
    padding: 7px 16px;
    display: block;
    float: left;
    margin-left: 20px;
    &.make-cancel {
      background: $main-color;
    }
  }
}
.confirm {
  @include confirm;
}
@mixin make-reserve-button {
  cursor: pointer;
  background: $hover-color;
  color: #fff;
  border-radius: 30px;
  font-size: 15px;
  font-weight: 400;
  padding: 7px 16px;
  display: block;
  float: right;
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
  .make-reserve, .login-for-reserve {
    @include make-reserve-button;
  }
  .login-for-reserve {
    background: $table-td-current;
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


@mixin sidebar {
  width: calc(25% - 40px);
  background: #fff;
  float: left;
  box-shadow: 0 0 30px rgba(0,0,0,.07);
  padding: 30px 20px;
}
@mixin item {
  margin-bottom: 25px;
  &:last-child {
    margin-bottom: 0;
  }
  .title {
    font-size: 14px;
    color: #888;
    display: block;
    font-weight: 400;
    margin-bottom: 5px;
  }
  .content {
    font-size: 20px;
    color: $text-color;
    font-weight: 500;
  }
}
.sidebar {
  @include sidebar;
  .item {
    @include item;
  }
}

.free-km {
  color: #a282e2;
  font-size: 16px;
  font-weight: 500;
  display: block;
  margin-bottom: 20px;
}

.white-modal {
  background: rgba(255, 255, 255, .95);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  .preloader {
    width: 300px;
    height: 300px;
    margin: 250px auto;
    text-align: center;
    .title {
      display: block;
      color: #444;
      font-size: 24px;
      font-weight: 500;
    }
  }
}

[v-cloak] {
  display: none !important;
}
</style>
