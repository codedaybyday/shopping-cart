<template>
    <div>
      我的购物车
      <ul>
        <li v-for="p in cartProducts">{{p.title}} X {{p.quantity}}</li>
      </ul>
    </div>
</template>
<style>

</style>
<script>
  import {mapGetters} from 'vuex'
  export default{
    computed: {
      ...mapGetters(['cartProducts'])
    }
  }
</script>
