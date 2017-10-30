<template>
  <div id="price-table">
      <div class="section">
        <div class="inner">
          <div class="intro">
            <h2>Ücretlendirmeler</h2>
            <p class="richtext">
              aracla.com ile ne ödeyeceğiniz sizin kontrolünüz altında! 
              <strong>Diğer araç kiralama firmalarından farklı olarak</strong>, sadece kullandığınız kadar ödersiniz.
              <br><strong>Ücretsiz Yakıt</strong> ile özgürce seyahat etmenin ayrıcalığını yaşarsınız.
            </p>
          </div>
          <div class="block">
            <div class="icons-block">
              <ul class="icons-list">
                <li class="item">
                  <div class="item-icon">
                    <img class="icon" src="../img/icons/dollar-symbol.svg" width="40" alt="Ücretsiz Üyelik">
                  </div>
                  <div class="item-text">
                    <h3>Yılda 49 TL ' ye araçlayın!</h3>
                    <p class="richtext">aracla.com ' da yıllık üyelik bedeli 49 TL dir.</p>
                  </div>
                </li>
                <li class="item">
                  <div class="item-icon">
                    <img class="icon" src="../img/icons/dollar-symbol.svg" width="40" alt="Ücretsiz Yakıt">
                  </div>
                  <div class="item-text">
                    <h3>Ücretsiz Yakıt</h3>
                    <p class="richtext">Yakıt ücreti ödemezsiniz. Taşıt tanıma sistemi ile <strong>SHELL istasyonlarından</strong> ücretsiz doldurursunuz.</p>
                  </div>
                </li>
                <li class="item">
                  <div class="item-icon">
                    <img class="icon" src="../img/icons/dollar-symbol.svg" width="40" alt="Ücretsiz Yakıt">
                  </div>
                  <div class="item-text">
                    <h3>İster Saatlik, İster Günlük!</h3>
                    <p class="richtext">İster saatlik, ister günlük, isterseniz de uzun dönem araç kiralar, sadece kullandığınız kadarını ödersiniz.</p>
                  </div>
                </li>
                <li class="item">
                  <div class="item-icon">
                    <img class="icon" src="../img/icons/dollar-symbol.svg" width="40" alt="Ücretsiz Yakıt">
                  </div>
                  <div class="item-text">
                    <h3>Kaskolu Araçlar</h3>
                    <p class="richtext">Tüm araçlarımız, Muafiyetli Kasko kapsamında güvence altındadır.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="image-block">
              <img src="https://res.cloudinary.com/aracla-com/image/upload/c_scale,w_640/v1509369483/wp_fpcq4a.jpg" alt="Ücretlendirmeler">
            </div>
          </div>
        </div>
      </div>
    </div>  
</template>

<script>
  export default {
    name: 'PriceTable'
  }
</script>

<style lang="scss">
  @import "../styles/common";

  @mixin price_table {
      .intro {
        padding: 0;
      }
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

  #price-table {
      @include price_table;

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
