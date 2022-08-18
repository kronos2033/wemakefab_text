<template>
<div class="app-header">
  <AppLogo/>
  <div class="app-header__pages">
    <NuxtLink to="/" style="text-decoration: none">
      <p class="app-header__page app-header__page_selected app-header__page_catalog">Catalog</p>
    </NuxtLink>
  </div>
  <div class="app-header__secondary">
    <p class="app-header__profile">Profile</p>
    <p class="app-header__basket">Basket
      <span v-if="basketCount">({{ basketCount }})</span>
    </p>
  </div>
</div>
</template>

<script lang="ts">
import { computed, defineComponent, useStore } from "@nuxtjs/composition-api";
import AppLogo from "~/components/ui/AppLogo.vue";

export default defineComponent({
  name: "AppHeader",
  components: {
    AppLogo
  },
  setup() {
    const store = useStore()
    const basketCount = computed(()=> store.getters.getSelectedProducts.length)

    return {
      basketCount
    }
  }
});
</script>

<style scoped lang="sass">
  .app-header
    position: fixed
    top: 0
    left: 0
    right: 0
    height: 100px
    margin: 0 100px
    max-width: 1400px
    padding-top: 35px

    display: flex
    justify-content: space-between
    border-bottom: 1px solid #BDBDBD
    background: #FFFFFF
    z-index: 100

  .app-header__pages
    display: flex
    width: 600px

  .app-header__page
    color: #000000
    text-decoration: none
    &_selected
      color: $accent

  .app-header__secondary
    display: flex
    justify-content: space-between
    width: 182px



</style>
