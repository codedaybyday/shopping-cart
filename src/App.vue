<template>
  <div id="app">
    <h1>购物车</h1>
    <hr/>
    <ProductList/>
    <hr/>
    <Cart/>
  </div>
</template>

<script>
import ProductList from './components/ProductList'
import Cart from './components/Cart'

export default {
  name: 'app',
  components: {
    ProductList,
    Cart
  }
}
</script>

<style>
</style>
