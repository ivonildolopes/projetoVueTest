<template>
  <v-card flat color="#fafafa">
    <v-container>
      <v-layout justify-space-between align-center>
        <v-flex xs6>
          <LogoSearchBar />
        </v-flex>
        <v-flex xs4>
          <LoginComponents />
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import LogoSearchBar from './topbar_components/LogoSearchBar'
import LoginComponents from './topbar_components/LoginComponents'


export default {
  components: {
    LogoSearchBar,
    LoginComponents
  }
}
</script>

<style scoped>
  .buttons{
    margin: 0px !important;
  }
</style>

