<template>
  <div class="filters">
    <div class="filters__container">
      <p class="filters__label">Search</p>
      <v-text-field
        v-model="searchWord"
        class="filters__input"
        background-color="#E5E5E5"
        height="61px"
        filled
      />
    </div>
    <div class="filters__container">
      <p class="filters__label">Product category</p>
      <v-select
        class="filters__select"
        background-color="#E5E5E5"
        height="61px"
        flat
        :items="categoryOptions"
        filled
      />
    </div>
    <div class="filters__container">
      <p class="filters__label">Sale</p>
      <v-select
        class="filters__select"
        background-color="#E5E5E5"
        height="61px"
        :items="items"
        filled
      />
    </div>
    <div class="filters__container">
      <SearchButton class="filters__btn"/>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, useStore } from "@nuxtjs/composition-api";
import SearchButton from "~/components/ui/SearchButton.vue";

export default defineComponent({
  name: "AppFilters",
  components: {SearchButton},
  setup() {
    const store = useStore()

    const searchWord = computed({
      get: () => store.getters.getSearchWord,
      set: (val) => store.commit("setSearchWord", val)
    })
    const categoryOptions = computed(()=> store.getters.getCategories)
    const items = ref(["Foo", "Bar", "Fizz", "Buzz"]);
    return {
      searchWord,
      items,
      categoryOptions
    };
  }
});
</script>

<style scoped lang="sass">
.filters
  display: flex
  gap: 20px
  justify-content: space-between
  align-items: flex-end
  margin: 0 100px

.filters__container
  align-items: flex-start
  display: flex
  flex-basis: 25%
  width: 100%
  flex-direction: column

.filters__label
  font-weight: 500
  font-size: 18px
  line-height: 1.25
  color: #000000
.v-select__slot, .filters__input, .filters__select, .filters__btn
  width: 100%
  height: 61px !important
  border-radius: 0 !important

.filters__select.v-text-field>.v-input__control>.v-input__slot:before
  border-style: none

.filters__select.v-text-field>.v-input__control>.v-input__slot:after
  border-style: none


</style>
