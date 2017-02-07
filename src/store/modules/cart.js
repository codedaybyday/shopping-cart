/**
 * Created by Administrator on 2017/2/7.
 */
import * as types from '../mutation-types'
const state = {
  added: []
}
const getters = {}
const actions = {}
const mutations = {
  [types.ADD_TO_CART] (state, {id}) {
    const record = state.added.find(p => p.id === id)
    if (!record) {
      state.added.push({
        id: id,
        quantity: 1
      })
    } else {
      record.quantity++
    }
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
