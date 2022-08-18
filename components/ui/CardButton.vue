<template>
  <v-btn
    class="apply-btn"
    :class="{'apply-btn_added': isAddToBasket}"
    :color="btnColor"
    @click="click"
  >
    {{ btnText }}
    <span class="apply-btn__icon"/>
  </v-btn>
</template>

<script lang="ts">
import { computed, defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "CardButton",
  props: {
    isAddToBasket: {
      type: Boolean,
      required: true
    }
  },
  setup(props, {emit}) {
    const btnText = computed(()=> props.isAddToBasket ? "Added" : "Add to basket")
    const btnColor = computed(()=> props.isAddToBasket ? "#FFFFFF" : "#2E2E2E")
    function click () {
      emit("add")
    }
    return {
      btnText,
      btnColor,
      click
    }
  }
});
</script>

<style scoped lang="sass">
.apply-btn
  color: white
  width: 335px
  height: 60px
  border-radius: 0
  display: flex
  justify-content: space-between
  font-weight: 500
  font-size: 18px
  line-height: 1.25
  &_added
    color: #000000
    .apply-btn__icon
      background: url("../../static/added.svg") 50% 50% no-repeat

.apply-btn__icon
  background: url("../../static/plus.svg") 50% 50% no-repeat
  display: block
  width: 15px
  height: 15px
</style>
