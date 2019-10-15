<template>
  <div class="hello">
    <div class="container">
      <div class="row">
        <div class="text-center">
          <h1>{{ msg }}</h1>
          <v-row justify="space-around">
            <v-avatar color="indigo" size="100">
              <span class="white--text headline">36</span>
            </v-avatar>
             <v-avatar color="teal" size="48">
      <span class="white--text headline">48</span>
    </v-avatar>
            </v-row>
        </div>
      </div>
      <div class="row">
         <v-form class="form">
          <div class="form-group">
             <v-text-field
            label="Nama Tugas"
            v-model="nama"
            required
            ></v-text-field>
          </div>
           <v-btn small color="primary">Primary</v-btn>
        </v-form>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome, Silahkan Login',
      nama: ''
    }
  }
}
</script>

<style scoped>

</style>
