<template>
  <div id="app">
    <HeaderComponent/>
    <router-view/>
  </div>
</template>

<script>
  import HeaderComponent from '@/components/HeaderComponent'

  export default {
    name: 'app',
    components: {HeaderComponent}
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
