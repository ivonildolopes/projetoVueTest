<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 6 : 2}`"
      light
    >
      <v-card-title>
        <Form />
      </v-card-title>
      <v-divider></v-divider>
      <v-card-actions 
      class="grey lighten-3"
      v-if="!exibeResultado">
        <v-container wrap>

        </v-container>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
import Form from './Form'
import { mapState } from 'vuex'

export default {
  data(){
    return {
    }
  },
  computed: {
     ...mapState('consulta', {
      exibeResultado: 'exibeResultado'
    })
  },
  components: {
    Form
  }
}
</script>
<style>

</style>
