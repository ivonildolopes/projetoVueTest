<template>
  <v-hover>
     <v-card
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 6 : 2}`"
    >
      <v-toolbar
        flat
        color="white"
        light>
          <v-toolbar-title class="primary--text">RESULTADO DA CONSULTA</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>

        <v-card-text>
          <h3> <v-icon>person</v-icon> Dados do Contribuínte</h3>
          <divider> </divider>
        </v-card-text>
     </v-card>
  </v-hover>
</template>

<script>
export default {
  data () {
    return {
      expand: false,
      headers: [
       
      ]
    }
  }
}
</script>

<style scoped>
  h3 {
    color: #00000088;
  }
</style>
