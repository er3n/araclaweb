<template>
  <div id="rental-steps">
    <div class="section">
      <div class="inner">
        <div class="intro">
          <h2>Araç Kiralamadan Daha Fazlası</h2>
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
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RentalSteps'
  }
</script>

<style lang="scss" scoped>
  @import "../styles/common";
  #rental-steps {
    .steps {
      margin: 50px 0;
      overflow: hidden;
        ul {
          padding: 0;
          margin: 0;
          li.step {
            min-height: 220px;
            vertical-align: middle;
            float: left;
            width: calc(33.33% - 20px);
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
    
    @media screen and (max-width: $break-425) {
      .steps {
        ul {
          li.step {
            width: 100%;
          }
        }
      }
    }
  }
</style>
