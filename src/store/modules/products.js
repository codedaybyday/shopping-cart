/**
 * Created by Administrator on 2017/2/7.
 */
import * as types from '../mutation-types'
const state = {
  all: [
    {'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01, 'inventory': 2},
    {'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99, 'inventory': 10},
    {'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': 19.99, 'inventory': 5}
  ]
}
const getters = {
  products: state => state.all
}
const actions = {
  addToCart: ({commit}, product) => {
    if (product.inventory > 0) {
      commit(types.ADD_TO_CART, {
        id: product.id
      })
    }
  }
}
const mutations = {
  [types.ADD_TO_CART] (state, {id}) {
    state.all.find(p => p.id === id).inventory--
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
