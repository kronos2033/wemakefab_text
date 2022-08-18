<template>
  <div class="product-list">
    <div class="product-list__container">
      <h3 class="product-list__title">{{ headerTitle }}</h3>
      <AppProductCard v-for="(product, id) in products" :key="id" :product="product"/>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, useStore } from "@nuxtjs/composition-api";
import AppProductCard from "~/components/AppProductCard.vue";

export default defineComponent({
  name: "AppProductsList",
  components: { AppProductCard },
  setup() {
    const store = useStore();
    const products = computed(() => store.getters.getProducts);
    const headerTitle = computed(() => "Best");
    return {
      headerTitle,
      products
    };
  }
});
</script>

<style scoped lang="sass">
.product-list
  position: relative
  margin: 120px 100px 0
  display: flex

.product-list__container
  margin: 0 -20px 0 0
  display: flex
  flex-wrap: wrap
  align-items: flex-end

.product-list__title
  position: absolute
  top: 0
  left: 0
  font-weight: 700
  font-size: 40px
  line-height: 1.15

</style>
