<template>
  <div id="car-pricing">
    <div class="inner">
      <div class="intro">
        <h3>Araçlar ve Fiyatları</h3>
        <p class="richtext">
          Size kendinizi özel hissettirecek araçlarımız ve uygun fiyatları.
        </p>
      </div>
      <div class="cars">
        <div class="item">
          <div class="image">
            <img src="../img/cars/homepage/micra.jpg" alt="Nissan Micra">
          </div>
          <div class="detail">
            <h4 class="title">Nissan Micra</h4>
            <p class="richtext">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias explicabo distinctio eos quaerat cum commodi.
            </p>
            <span class="price">Saatlik: <strong>₺ 9</strong> <em>10 km ücretsiz</em></span>
            <span class="price">Günlük: <strong>₺ 120</strong> <em>120 km ücretsiz</em></span>
            <span class="price">Haftalık: <strong>₺ 540</strong> <em>480 km ücretsiz</em></span>
          </div>
        </div>
        <div class="item">
          <div class="image">
            <img src="../img/cars/homepage/v40-t3.jpg" alt="Volvo V40 T3">
          </div>
          <div class="detail">
            <h4 class="title">Volvo V40 T3</h4>
            <p class="richtext">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias explicabo distinctio eos quaerat cum commodi.
            </p>
            <span class="price">Saatlik: <strong>₺ 9</strong> <em>10 km ücretsiz</em></span>
            <span class="price">Günlük: <strong>₺ 120</strong> <em>120 km ücretsiz</em></span>
            <span class="price">Haftalık: <strong>₺ 540</strong> <em>480 km ücretsiz</em></span>
          </div>
        </div>
        <div class="item">
          <div class="image">
            <img src="../img/cars/homepage/v40-d2.jpg" alt="Volvo V40 D2">
          </div>
          <div class="detail">
            <h4 class="title">Volvo V40 D2</h4>
            <p class="richtext">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias explicabo distinctio eos quaerat cum commodi.
            </p>
            <span class="price">Saatlik: <strong>₺ 9</strong> <em>10 km ücretsiz</em></span>
            <span class="price">Günlük: <strong>₺ 120</strong> <em>120 km ücretsiz</em></span>
            <span class="price">Haftalık: <strong>₺ 540</strong> <em>480 km ücretsiz</em></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarPricing'
}
</script>

<style lang="scss">
#car-pricing {
  padding: 120px 0;
  .inner {
    width: 1024px;
    margin: auto;
  }
  .intro {
    text-align: center;
    max-width: 640px;
    margin: 0 auto 100px;
    h3 {
      font-size: 48px;
      color: #333;
      font-weight: 500;
      margin-bottom: 30px;
    }
    .richtext {
      font-size: 18px;
      letter-spacing: .5px;
      color: #333;
    }
  }
  .cars {
    overflow: hidden;
    .item {
      float: left;
      width: 30%;
      padding: 0 1.5%;
      .image {
        display: block;
        margin-bottom: 100px;
        text-align: center;
        img {
          height: 140px;
        }
      }
      .detail {
        text-align: center;
        .title {
          color: #333;
          font-weight: 500;
          font-size: 24px;
          margin-bottom: 20px;
        }
        .richtext {
          color: #333;
          font-size: 17px;
          line-height: 24px;
          font-weight: 400;
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
  .line {
    margin: 100px 0;
    text-align: center;
    border-top: 1px solid #e1e1e1;
    position: relative;
    .button {
      position: absolute;
      background: #fff;
      padding: 0 20px;
      top: -20px;
      left: calc(50% - 90px);
      width: 140px;
      .rent-now {
        padding: 10px 15px;
        display: block;
        background: #ff5a5f;
        color: #fff;
        font-weight: 500;
        border-radius: 3px;
      }
    }
  }
}
</style>
