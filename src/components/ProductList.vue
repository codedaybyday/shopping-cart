<template>
    <div>
       产品列表
      <ul>
        <li v-for="p in products">
          {{p.title}}价格：${{p.price}} 存货：{{p.inventory}} <br/><button :disabled="p.inventory == 0" @click="addToCart(p)">加入购物车</button>
        </li>
      </ul>
    </div>
</template>
<style>

</style>
<script>
    import {mapGetters, mapActions} from 'vuex'
    export default{
      computed: mapGetters(['products']),
      methods: mapActions(['addToCart'])
    }
</script>
