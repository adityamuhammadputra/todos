<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-header/>
    <router-view/>
    <router-footer/>

    <notifications group="foo" />
  </div>
</template>

<script>
import header from './components/Header.vue'
import footer from './components/Footer.vue'
export default {
  name: 'App',

  components: {
    'router-header': header,
    'router-footer': footer
  },

  data () {
    return {

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
