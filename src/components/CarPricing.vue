<template>
  <div id="car-pricing">
    <div class="section">
      <div class="inner">
        <div class="intro">
          <h2>Araçlar ve Fiyatları</h2>
          <p class="richtext">
            Size kendinizi özel hissettirecek araçlarımız ve uygun fiyatları.
          </p>
        </div>
        <div class="cars">
          <div v-for="car in cars" class="item">
            <div class="image">
              <img :src="car.imageUrl" :alt="[car.mark, car.model]">
            </div>
            <div class="detail">
              <h3 class="title">{{ car.mark }}</h3>
              <h4 class="model">{{ car.model }}</h4>
              <p class="richtext">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias explicabo distinctio eos quaerat cum commodi.
              </p>
              <span class="price">Saatlik: <strong>₺ {{ car.hourlyPrice }}</strong> <em>{{ car.hourlyFreeOdemeter }} km ücretsiz</em></span>
              <span class="price">Günlük: <strong>₺ {{ car.dailyPrice }}</strong> <em>{{ car.dailyFreeOdemeter }} km ücretsiz</em></span>
              <span class="price">Haftalık: <strong>₺ {{ car.weeklyPrice }}</strong> <em>{{ car.weeklyFreeOdemeter }} km ücretsiz</em></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'CarPricing',
    data () {
      return {
        cars: []
      }
    },
    created () {
      axios.get('/api/priceSheet')
        .then((cars) => {
          this.cars = cars.data
        })
    }
  }
</script>

<style lang="scss" scoped>
  @import "../styles/common";
  #car-pricing {
    .cars {
      overflow: hidden;
      margin-bottom: 100px;
        .item {
          float: left;
          width: 30%;
          padding: 0 1.5%;
          .image {
            display: block;
            height: 200px;
            text-align: center;
            img {
              max-width: 85%;
            }
          }
          .detail {
            text-align: center;
            .title {
              color: #333;
              font-weight: 500;
              font-size: 24px;
              margin-bottom: 10px;
            }
            .model {
              font-size: 18px;
              color: #333;
              margin-bottom: 20px;
              font-weight: 500;
            }
            .richtext {
              color: #333;
              font-size: 17px;
              line-height: 24px;
              font-weight: 300;
              letter-spacing: .3px;
              margin-bottom: 40px;
            }
            .price {
              display: block;
              font-weight: 400;
              font-size: 18px;
              color: #333;
              margin-bottom: 10px;
              strong {
                font-weight: 500;
                color: #111;
              }
              em {
                font-style: 16px;
              }
            }
          }
        }
    }
    @media screen and (max-width: $break-425) {
      .cars {
        margin-bottom: 0;
        .item {
          width: 100%;
          margin-bottom: 120px;
          .image {
            height: 220px;
            img {
              width: 75%;
            }
          }
        }
      }
    }
    @media screen and (min-width: $break-425 + 1px) and (max-width: $break-768) {
      .cars {
        .item {
          .detail {
            .price {
              em {
                display: block;
              }
            }
          }
        }
      }
    }
  }
</style>
