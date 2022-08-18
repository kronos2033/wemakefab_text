import { GetterTree, ActionTree, MutationTree } from "vuex"
import { IProducts } from "~/models";
const mock = "products.json"
export const state = () => ({
  products: [] as IProducts[],
  selectedProducts: [] as IProducts[] | [],
  searchWord: "",
  categoryOptions: [] as string[],
  saleOptions: [] as string[]

})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  getProducts: state => state.products,
  getSearchWord: state => state.searchWord,
  getCategories: state => state.categoryOptions,
  getSelectedProducts: state => state.selectedProducts,
  getFilteredProducts: state=> state.products.filter(item=> item.title.includes(state.searchWord))
}

export const mutations: MutationTree<RootState> = {
  setProducts: (state, newProduct: IProducts[]) => (state.products = newProduct),

  setSearchWord: (state, newWord: string) => (state.searchWord = newWord),

  addSelectedProduct: (state, newProduct: IProducts) => (state.selectedProducts = [...state.selectedProducts, newProduct]),

  removeSelectedProduct: (state, productId: number) => {
    state.selectedProducts = state.selectedProducts.filter(product=> product.id !== productId)
  },

  clearSelectedProducts: (state) => (state.selectedProducts = []),

  setFilters: (state) => {
    const categories: string[] = []
    state.products.forEach(product=> {
      if(!categories.includes(product.category)) {
        categories.push(product.category)
      }
    })
    state.categoryOptions = categories
  }
}

export const actions: ActionTree<RootState, RootState> = {
  fetchProducts({ commit }) {
    return new Promise((resolve, reject)=> {
     this.$axios.$get<IProducts>(mock)
       .then(res=> {
       commit("setProducts", res);
       commit("setFilters")
       resolve(res)
     })
      .catch(err=>reject(err))
    })
  },
}
