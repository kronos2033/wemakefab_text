<template>
  <v-btn
    class="apply-btn"
    color="#1B1B1B"
    >
    Apply
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "SearchButton",
});
</script>

<style scoped lang="sass">
.apply-btn
  color: #FFFFFF
  border: none !important
  border-radius: 0 !important
  box-shadow: none !important
</style>
