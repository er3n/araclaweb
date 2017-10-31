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
              </div>
              <span class="price">₺ {{ car.totalPrice }}<small> / Toplam Fiyat</small></span>
              <span class="free-km">{{ car.totalFreeOdemeter }} KM ücretsiz mesafe <em>/ Ücretsiz mesafe aşımında KM başı <strong>{{ car.odometerPrice }} ₺</strong> ödersiniz.</em></span>
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
              <a v-if="!user" @click="showLoginModal" class="login-for-reserve">Rezerve Etmek için giriş yapın</a>
            </div>
          </div>
        </div>
      </div>
      <div class="sidebar" v-cloak>
        <div class="wrapper">
          <div class="item">
            <span class="title">Park Noktası</span>
            <span class="content">{{ pickUpLocationJSON.description }}</span>
          </div>
          <div class="item">
            <span class="title">Alış Tarihi</span>
            <span class="content">{{ pickUpDate }} - {{ pickUpHour }}</span>
          </div>
          <div class="item">
            <span class="title">Teslim Tarihi</span>
            <span class="content">{{ dropOffDate }} - {{ dropOffHour }}</span>
          </div>
          <div class="item" v-if="selectedCar">
            <span class="title">Seçilen Araç</span>
            <span class="content">{{ selectedCar.model.mark.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AraclaNotification from '@/components/AraclaNotification'
import {handleException} from '@/utils/ExceptionUtils'
import axios from 'axios'
import {authToken} from '@/utils/Auth'

export default {
  name: 'SelectCarPage',
  components: {AraclaNotification},
  data () {
    return {
      selectedCar: undefined,
      availableCars: undefined,
      parkingPoints: undefined,
      pickUpDate: undefined,
      pickUpHour: undefined,
      dropOffDate: undefined,
      dropOffHour: undefined,
      pickUpLocation: undefined,
      totalPrice: undefined,
      user: undefined,
      confirmedCar: false,
      pickUpLocationJSON: undefined,
      isConfirming: false
    }
  },
  methods: {
    findParkingPoint (parkingPoints) {
      parkingPoints.map((parkingPoint) => {
        if (parkingPoint.code === this.pickUpLocation) {
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
    showLoginModal () {
      window.Header.openPage('signLoginPage')
    },
    confirmReservation (car) {
      let pickUpDate = JSON.parse(sessionStorage.getItem('reservationParams')).pickUpDate.split('/')
      let pickUpHour = JSON.parse(sessionStorage.getItem('reservationParams')).pickUpHour
      let pickUpTimeForPost = new Date(`${pickUpDate[2]}-${pickUpDate[1]}-${pickUpDate[0]} ${pickUpHour}:00`)

      let dropOffDate = JSON.parse(sessionStorage.getItem('reservationParams')).dropOffDate.split('/')
      let dropOffHour = JSON.parse(sessionStorage.getItem('reservationParams')).dropOffHour
      let dropOfftimeForPost = new Date(`${dropOffDate[2]}-${dropOffDate[1]}-${dropOffDate[0]} ${dropOffHour}:00`)

      let token = authToken()
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
    console.log(window.Header.user)
    window.scrollTo(0, 0)
    console.log('SelectCarPage Yüklendi')
    let reservationParams = JSON.parse(sessionStorage.getItem('reservationParams'))
    console.log(reservationParams)
    this.availableCars = reservationParams.availableCars
    this.parkingPoints = reservationParams.parkingPoints
    this.pickUpDate = reservationParams.pickUpDate
    this.pickUpHour = reservationParams.pickUpHour
    this.dropOffDate = reservationParams.dropOffDate
    this.dropOffHour = reservationParams.dropOffHour
    this.pickUpLocation = reservationParams.pickUpLocation
    this.findParkingPoint(reservationParams.parkingPoints)
    setTimeout(() => {
      this.user = window.Header.user
    }, 1000)
  }
}
</script>

<style lang="scss">
@import "../styles/common";

$text-color: #333;

@mixin search-result-page {
  background: #f5f5f5;
  padding: 60px 0;
}
.search-result-page {
  @include search-result-page;
}

@mixin container {
  margin: 30px auto;
  max-width: 1024px;
  padding: 0 20px;
  display: flex;
  align-items: flex-start;

  @media screen and (max-width: $break-768) {
    flex-direction: column;
  }
}
.container {
  @include container;
}

@mixin cars-container {
  order: 1;
  width: 73%;
  margin-right: 2%;

  @media screen and (max-width: $break-768) {
    order: 2;
    width: 100%;
    margin-right: 0;
  }
}
.cars-container {
  @include cars-container;
}

@mixin car-item {
  background: #fff;
  margin-bottom: 30px;
  box-shadow: 0 0 30px rgba(0,0,0,.07);
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
    margin-bottom: 10px;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    color: #333;
    margin-bottom: 20px;
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
    font-size: 16px;
    font-weight: 500;
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

.car-item {
  @include car-item;
}
.car-inner {
  padding: 40px 30px;
  overflow: hidden;
  position: relative;
  display: flex;

  @media screen and (max-width: $break-425) {
    flex-direction: column;
  }
}
.car-image {
  width: 35%;
  margin-right: 5%;
  float: left;
  padding: 60px 0;
  img {
    max-width: 100%;
  }
  @media screen and (max-width: $break-425) {
    width: 100%;
    padding: 0;
    text-align: center;
    img {
      height: 120px;
    }
  }
}
.description {
  float: left;
  width: 60%;
  h2 {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 20px;
    color: #333;
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

  @media screen and (max-width: $break-425) {
    width: 100%;
    margin-top: 20px;
  }
}


.sidebar {
  order: 2;
  flex: flex-basis;
  width: 25%;
  background: #fff;
  box-shadow: 0 0 30px rgba(0,0,0,.07);
  margin-bottom: 30px;
  .wrapper {
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
  }
  .item {
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

  @media screen and (max-width: $break-425) {
    order: 1;
    width: 100%;
  }

  @media screen and (min-width: $break-425 + 1px) and (max-width: $break-768) {
    order: 1;
    width: 100%;

    .wrapper {
      flex-direction: row;
      justify-content: space-between;
      .item {
        margin-bottom: 0;
      }
    }
  }
}

.free-km {
  color: #a282e2;
  font-size: 16px;
  font-weight: 500;
  display: block;
  margin-bottom: 20px;
  em {
    strong {
      font-weight: 600;
    }
  }
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
