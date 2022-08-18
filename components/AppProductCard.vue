<template>
  <div class="product-card">
    {{ isAddToBasket }}
    <div v-if="refProduct.isSale" class="product-card__sale">{{ `Sale - ${refProduct.salePercent} %` }}</div>
    <img class="product-card__img" :src="refProduct.img" alt="">
    <p class="product-card__title">{{ refProduct.title }}</p>
    <div class="product-card__price-container">
      <p class="product-card__price">{{ realPrice }}</p>
      <p
        v-if="refProduct.isSale"
        class="product-card__price_sale_off"
      >{{ refProduct.price }}</p>
    </div>
    <CardButton :isAddToBasket="isAddToBasket" @add="addToBasket"/>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, useStore } from "@nuxtjs/composition-api";
import { IProducts } from "~/models";
import CardButton from "~/components/ui/CardButton.vue";

export default defineComponent({
  name: "AppProductCard",
  components: { CardButton },
  props: {
    product: {
      type: Object as PropType<IProducts>,
      required: true
    }
  },
  setup(props) {
    const store = useStore()
    const refProduct = ref(props.product)

    const isAddToBasket = ref(false)
    const realPrice = computed(() => {
      if(refProduct.value.isSale && refProduct.value.salePercent) {
        return (refProduct.value.price / 100 * ( 100 - refProduct.value.salePercent)).toFixed(2)
      } else return refProduct.value.price
    })

    function addToBasket() {
        store.commit("addSelectedProduct", refProduct)
      isAddToBasket.value = true
    }

    return {
      refProduct,
      realPrice,
      isAddToBasket,
      addToBasket
    }
  }
});
</script>

<style scoped lang="sass">
.product-card
  display: flex
  flex-direction: column
  position: relative
  font-size: 16px
  line-height: 1.15
  margin-right: 20px
  margin-bottom: 60px
  align-items: flex-start
  &__img
    width: 335px
    height: 400px
    background-size: cover !important
    background: 50% 50% no-repeat
  &:nth-child(-3n + 4)
    img
      width: 690px
      height: 781px

.product-card__sale
  position: absolute
  background-color: $accent
  color: #FFFFFF
  font-weight: 500
  top: 25px
  right: 25px
  padding: 12px 20px

.product-card__title

  font-weight: 400
  color: #000000
  margin: 15px 0 0

.product-card__price-container
  margin-top: 5px
  display: flex

.product-card__price
  font-weight: 600
  &:before
    content: "$"

  &_sale_off
    color: #B7B7B7
    text-decoration: line-through
    margin-left: 10px
    &:before
      content: "$"

</style>
