<template>
  <v-layout row>
    <v-flex xs6>
      <v-form 
        v-model="valid"
        lazy-validation>
        <v-radio-group row
          v-if="!exibeResultado"
          v-model="documento"
          @click="clearInput"
          >
          <v-radio label="CPF" value="cpf" color="primary">  </v-radio>
          <v-radio label="CGF" value="cgf" color="primary">  </v-radio>
          <v-radio label="CNPJ" value="cnpj" color="primary">  </v-radio>
          <v-radio label="NUMERO DE INSCRIÇÃO" value="numero_inscricao" color="primary">  </v-radio>
        </v-radio-group>
        <v-text-field
          required
          :disabled="exibeResultado"
          v-model="valor"
          :mask="inputMask"
          :label="textInput"
          :rules="valueRules"
          persistent-hint
          :counter="inputSize[documento]"
          color="primary"
          >
        </v-text-field>
        <v-btn dark absolute bottom round right
            v-if="!exibeResultado"
            color="primary"
            :disabled="!valid"
            @click="validate"
            :style="{ bottom: '20%', right: '5%'}"
          >
            buscar
        </v-btn>
      </v-form>
    </v-flex>
    <v-flex xs5 offset-xs1>
      <v-btn 
        color="primary"
        v-if="exibeResultado"
        @click="novaConsulta">nova consulta</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data(){
    return {
      masks: {
        cpf: '###.###.###-##',
        cnpj: '##.###.###/####-##',
        cgf: '##.###.###-#',
        numero_inscricao: '####.########-#'
      },
      valueRules: [
        v => (v && v.length >= 8) || 'Documento precisa de pelo menos 8 digitos'
      ],
      inputSize: {
        cpf: 11,
        cnpj: 14,
        cgf: 9,
        numero_inscricao: 13
      },
      valor: '',
      valid: false,
      documento: null
    }
  },
  methods: {
    ...mapActions('consulta', {
      novaConsulta: 'novaConsulta'
    }),
    validate() {
      if (this.valid) {
        this.$store.dispatch('consulta/consultar', { documento: this.documento, valor: this.valor})
      }
    },
    // Diminui o tamanho do 'valor' caso ele mude de um campo maior para um menor. Ex: CNPJ_BASE -> CPF
    clearInput(){
      if (this.inputSize[this.documento] < this.valor.length){
        this.valor = this.valor.substring(0, this.inputSize[this.documento])
      }
    }
  },
  computed: {
     ...mapState('consulta', {
      exibeResultado: 'exibeResultado'
    }),
    // Muda a mascara de acordo com o tipo de documento
    inputMask(){
      if (this.documento == null) { return '' }
      return this.masks[this.documento]
    },
    // Exibe o nome do 'hint' do text field
    textInput(){
      if (!this.documento) { return 'Selecione um documento' }
      if (this.documento) { return `Insira o ${this.documento.toUpperCase().replace('_', ' DE ')}`}
    }
  }
}
</script>

<style scoped>

</style>