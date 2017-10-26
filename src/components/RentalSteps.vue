<template>
  <div id="rental-steps">
    <div class="inner">
      <div class="intro">
        <h3>Araç Kiralamadan Daha Fazlası</h3>
        <p class="richtext">Rezervasyonunuzu yaptıktan sonra, size en yakın park noktasından aracınızı alarak, yine size en yakın park noktasına aracınızı bırakabiliriniz.</p>
      </div>
      <div class="steps">
        <ul>
          <li class="step">
            <img src="../img/icons/car.svg" height="60" alt="Araba">
            <h4>Dilediğiniz aracı seçme özgürlüğü</h4>
            <span>Sistemimizden beğendiğiniz herhangi bir aracı seçerek araçlamaya başlayın.</span> 
          </li>
          <li class="step active">
            <img src="../img/icons/right-blue.svg" height="60" alt="Sonra">
            <h4>Park Noktasından, Park Noktasına</h4>
            <span>Özgürce seyahat etmeniz için aracınızı aldığınız park noktasına bırakma zorunluluğunu ortadan kaldırdık.</span> 
          </li>
          <li class="step">
            <img src="../img/icons/check-symbol.svg" height="60" alt="Araba">
            <h4>Kullan ve Bırak!</h4>
            <span>Seyahatinizi bitti mi? Onlarca park noktalarından size en yakın park noktasına aracınızı bırakın.</span> 
          </li>
        </ul>
      </div>
      <div class="line">
        <div class="button">
          <a href="#" class="rent-now">Şimdi Araçlayın</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RentalSteps'
  }
</script>

<style lang="scss">
  #rental-steps {
    margin: 120px 0;
    .inner {
      width: 1024px;
      margin: auto;
      .intro {
        text-align: center;
        max-width: 640px;
        margin: auto;
      }
      h3 {
        font-size: 48px;
        color: #333;
        font-weight: 500;
        margin-bottom: 30px;
      }
      .richtext {
        font-size: 18px;
        line-height: 24px;
        color: #333;
      }
    }
    .steps {
      margin-top: 50px;
      ul {
        padding: 0;
        margin: 0;
        li.step {
          height: 220px;
          vertical-align: middle;
          display: inline-block;
          width: calc(33% - 20px);
          list-style: none;
          background: #04d4c0;
          text-align: center;
          padding: 30px 10px;
          img {
            display: inline-block;
            vertical-align: top;
          }
          h4 {
            font-size: 24px;
            font-weight: 500;
            color: #333;
            margin-bottom: 20px;
            margin-top: 30px;
            color: #fff;
          }
          span {
            font-size: 18px;
            letter-spacing: .3px;
            font-weight: 400;
            line-height: 24px;
            color: #fff;
          }
          &.active {
            background: #fff;
            h4 {
              color: #333;
            }
            span {
              color: #333;
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
