<template>
  <div id="avantaj">
      <div class="section">
        <div class="inner">
          <div class="intro">
            <h2>Neden Aracla.com?</h2>
            <p class="richtext">
              aracla.com ile size en yakın park noktasından dilediğiniz aracı uygun fiyatlardan hızlı ve kolay bir şekilde saatlik ya da günlük kiralayabilirsiniz.
            </p>
          </div>
          <div class="block">
            <div class="icons-block">
              <ul class="icons-list">
                <li class="item">
                  <div class="item-icon">
                    <img class="icon" src="../img/icons/ucretsiz-yakit.svg" width="48" alt="Ücretsiz Yakıt">
                  </div>
                  <div class="item-text">
                    <h3>Ücretsiz Yakıt</h3>
                    <p class="richtext">Taşıt tanıma sistemi Shell istasyonlarından aracınızı ücretsiz doldurursunuz.</p>
                  </div>
                </li>
                <li class="item">
                  <div class="item-icon">
                    <img class="icon" src="../img/icons/kaskolu-arac.svg" width="48" alt="Ücretsiz Yakıt">
                  </div>
                  <div class="item-text">
                    <h3>Kaskolu Araçlar</h3>
                    <p class="richtext">Tüm araçlarımız muafiyetli kasko ile güvence altındadır.</p>
                  </div>
                </li>
                <li class="item">
                  <div class="item-icon">
                    <img class="icon" src="../img/icons/yol-yardim.svg" width="48" alt="Yol Yardım">
                  </div>
                  <div class="item-text">
                    <h3>Yol Yardım</h3>
                    <p class="richtext">Taşıt tanıma sistemi Shell istasyonlarından aracınızı ücretsiz doldurursunuz.</p>
                  </div>
                </li>
                <li class="item">
                  <div class="item-icon">
                    <img class="icon" src="../img/icons/aracla-club.png" width="48" alt="Yol Yardım">
                  </div>
                  <div class="item-text">
                    <h3>Superaracla Club</h3>
                    <p class="richtext">Aracla.com ' un üyelerine özel olarak sunduğu, araçladıkça kazandıran araclaclub uygulaması.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="image-block">
              <img src="https://www.car2go.com/media/data/mercedes-benz/gla-dinner-silver-car-1818_502x20.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>  
</template>

<script>
  export default {
    name: 'WhyAracla'
  }
</script>

<style lang="scss">
  @import "../styles/common";

  @mixin avantaj {
      .block {
          display: flex;
          margin-bottom: 100px;
          .icons-block {
              width: 50%;
              margin-right: 20px;
              order: 1;
              .icons-list {
                  list-style: none;
                      .item {
                          margin: 20px 0;
                          padding-left: 20px;
                          .item-icon {
                              display: table-cell;
                              padding: 0 20px 10px 0;
                          }
                          .item-text {
                              display: table-cell;
                              vertical-align: middle;
                              h3 {
                                  font-size: 28px;
                                  color: #333;
                              }
                          }
                      }
              }
          }
          .image-block {
              order: 2;
              width: 50%;
              img {
                  width: 100%;
              }
          }
      }
  }

  #avantaj {
      @include avantaj;

      @media screen and (max-width: $break-425) {
          .block {
              margin-bottom: 80px;
              flex-direction: column;
              .icons-block, .image-block {
                  width: 100%;
              }
              .icons-block {
                  order: 2;
                  margin-top: 50px;
                  .icons-list {
                      .item {
                          .item-icon {
                              width: 20%;
                          }
                      }
                  }
              }
              .image-block {
                  order: 1;
              }
          }
      }
  }
</style>
