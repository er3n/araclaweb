<template>
    <div id="success-page">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum asperiores magni quod repellat eius, vero non. Placeat illo sed, non rerum mollitia expedita praesentium, optio ab, minus nemo vero blanditiis.</div>
</template>

<script>
export default {
  name: 'SuccessPage',
  data () {
    return {
      reservationDetail: this.$route.params.reservationDetail
    }
  }
}
</script>

<style lang="scss">
#success-page {
  position: absolute;
  padding-top: 60px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
