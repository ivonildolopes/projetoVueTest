<template>
  <v-layout column>
    <Aviso />
    <v-spacer>&nbsp;</v-spacer>
    <Consulta />
    <v-spacer>&nbsp;</v-spacer>
    <ResultadoConsulta 
      transition="slide-x-reverse-transition"
      v-if="exibeResultado" />
  </v-layout>   
</template>

<script>
import Aviso from './Aviso'
import Consulta from './Consulta'
import ResultadoConsulta from './ResultadoConsulta'
import { mapState } from 'vuex'

export default {
  computed:{
    ...mapState('consulta', {
      exibeResultado: 'exibeResultado'
    })
  },
  components: {
    Aviso,
    Consulta,
    ResultadoConsulta
  }
}
</script>

<style scoped>
</style>

