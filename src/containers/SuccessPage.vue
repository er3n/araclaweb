<template>
    <div id="success-page">
      <div class="inner">
        <div class="success">
          <h3><img src="../img/icons/checked.svg" height="48"> Teşekkürler!</h3>
          <p>Rezervasyonunuz başarıyla oluşturuldu. Rezervasyon bilgileri mail adresinize gönderildi.</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'SuccessPage',
  data () {
    return {
      reservationDetail: this.$route.params.reservationDetail
    }
  },
  created () {
    console.log('success oluşturuldu')
    // if (!this.reservationDetail) {
    //   location.href = '/'
    // }
  }
}
</script>

<style lang="scss">
#success-page {
  padding-top: 60px;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 500px;
  .inner {
    width: 1024px;
    margin: auto;
    .success {
      margin: 200px 0;
    }
    h3 {
      font-size: 60px;
      color: #333;
      font-weight: 400;
      margin-bottom: 30px;
      line-height: 30px;
    }
    p {
      font-size: 24px;
    }
  }
}
</style>
