<template>
  <div id="app">
    <h1>shopping-cart</h1>
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
