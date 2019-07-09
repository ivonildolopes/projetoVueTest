<template>
  <v-hover>
    <v-card v-if="visible"
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 6 : 2}`"
    >
      <v-toolbar
        flat
        color="white"
        light>
          <v-toolbar-title class="primary--text">AVISO</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-hover>
            <v-btn icon
              slot-scope="{ hover }"
              :class="`${hover ? 'primary' : 'white'} ${hover ? 'white' : 'primary'}--text`"
              @click="fechaAviso">
                <v-icon>close</v-icon>
            </v-btn>
          </v-hover>
        </v-toolbar>
        <v-card-title>
          Suspendisse diam mi vulputate tellus nullam tortor faucibus class placerat at, nisl porttitor orci congue dolor enim gravida eu nec semper, pretium leo hac id diam elit consequat nostra fames. porta ornare tempus libero porta leo vulputate hendrerit massa, aliquam semper donec semper maecenas vulputate curabitur nunc, donec fermentum arcu bibendum vulputate aliquam faucibus. lectus platea praesent dolor suspendisse nulla hendrerit class fusce, lobortis eleifend fames vestibulum lectus faucibus sapien posuere, dui aenean habitasse eget commodo potenti amet. netus sapien porttitor vehicula mi nunc pellentesque netus suscipit nibh risus fringilla nec, ornare pulvinar tortor non luctus nisl nam quis proin eleifend. 
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="primary">MAIS INFORMAÇÕES</v-btn>
        </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data(){
    return {
      visible: true
    }
  },
  methods: {
    fechaAviso(){
      this.visible = false;
    }
  }
}
</script>
<style>

</style>
