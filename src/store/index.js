/**
 * Created by Administrator on 2017/2/7.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/products'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)
export default new Vuex.Store({
  actions,
  getters,
  modules: {
    cart,
    products
  }
})
