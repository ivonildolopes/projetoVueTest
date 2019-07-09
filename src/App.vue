<template>
  <v-app style="background-color: #fafafa">
    <v-snackbar
      v-if="snackBar.show"
      v-model="snackBar"
      :color="snackBar.color"
      :timeout="6000"
      :vertical='true'
      :top="true"
    >
      {{ snackBar.text }}
      <v-btn
        dark
        flat
        @click="closeSnack"
      >
        Close
      </v-btn>
    </v-snackbar>
    <TopBar />
    <v-card dark color="primary">
      <v-container>
        <v-layout justify-space-between justify-center>
          <v-btn flat>CONSULTAS</v-btn>
          <v-btn flat>PARCELAMENTOS ATIVOS</v-btn>
          <v-btn flat>EMITIR DOCUMENTOS</v-btn>
          <v-btn flat>LEGISLAÇÃO</v-btn>
        </v-layout>
      </v-container>
    </v-card>
    <v-container 
      fill-height>
      <v-layout>
        <v-flex xs12 justify-center>
          <router-view></router-view> 
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import TopBar from './components/TopBar'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    TopBar
  },
  data () {
    return {
      //
    }
  },
  computed: {
  ...mapState('util', {
    snackBar: 'snackBar'
    })
  },
  methods: {
    ...mapActions('util', {
      closeSnack: 'closeSnack'
    })
  },
}
</script>

