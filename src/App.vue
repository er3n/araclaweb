<template>
  <div id="app">
    <HeaderComponent/>
    <router-view/>
    <FooterComponent />
  </div>
</template>

<script>
  import HeaderComponent from '@/containers/HeaderComponent'
  import FooterComponent from '@/containers/FooterComponent'

  export default {
    name: 'app',
    components: {HeaderComponent, FooterComponent}
  }
</script>


<style>
  * {
    padding: 0;
    margin: 0;
    font-family: "gt";
    font-weight: 300;
    -webkit-font-smoothing: antialiased;
    color: #484848
  }
</style>
