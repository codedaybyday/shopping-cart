/**
 * Created by Administrator on 2017/2/7.
 */
export default {
  cartProducts (state) {
    return state.cart.added.map(({id, quantity}) => {
      const product = state.products.all.find(p => p.id === id)
      return {
        title: product.title,
        price: product.price,
        quantity
      }
    })
  }
}
