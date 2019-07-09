<template>
  <v-layout align-center fill-height>
    <v-flex xs2>
      <v-icon size="55">speedometer</v-icon>
    </v-flex>
    <v-flex xs1 >
      <span class="separator" >|</span>
    </v-flex>
    <v-flex xs9>
      <v-text-field
        single-line
        color="primary"
        label="Buscar arquivos..."
        append-icon="search"
        style="margin-bottom: -8px;"
        hint="para consulta de CDA utilize o menu CONSULTAS"
      ></v-text-field>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  
}
</script>

<style>
  .separator{
    color: rgba(0,0,0,.54);
    font-size: 40px !important;
  }
</style>
