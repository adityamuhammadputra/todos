<template>
  <header>
    <h3>{{ title }}</h3>
    <v-bottom-navigation
      v-model="bottomNav"
    >
      <router-link to="/"><a>
        <v-btn value="recent">
          <span>List</span>
          <v-icon>mdi-history</v-icon>
        </v-btn>
      </a></router-link>

      <v-btn value="favorites">
        <span><router-link to="/hello"><a>Hello</a></router-link></span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn value="nearby">
        <span>Nearby</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>

  </header>
</template>

<script>

export default {
  data () {
    return {
      title: 'Ini Headernya',
      bottomNav: ''
    }
  }
}

</script>

<style scoped>
  h3 {
    background:blue;
  }
</style>
