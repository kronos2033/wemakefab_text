<template>
  <v-app>
    <AppHeader/>
    <v-main>
        <Nuxt />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import AppHeader from "~/components/AppHeader.vue";
export default defineComponent({
  name: 'DefaultLayout',
  components: {
    AppHeader
  },
  setup() {

    return{}
  }
})
</script>

<style scoped lang="sass">
.v-application
  position: relative
  font-family: Inter, 'Open Sans', sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  background-color: #FFFFFF
  width: 100%
.v-main
  margin-top: 180px

</style>
