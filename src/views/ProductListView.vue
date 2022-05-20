<template>
    <div class="product w-full lg:pl-[240px] pt-[150px] lg:pt-8 pb-8">
        <section class="mainbody-limit px-4 md:px-8 pt-12 ">
            <ul class="flex mb-8 flex-wrap">
                <li class="p-2 mb-4 sm:p-4">
                  <router-link to="/product" :class="{ 'active' : category ==='' }" class="cat border border-brown-light text-brown-light px-8 py-2 font-bold">全部</router-link>
                </li>
                <li class="p-2 mb-4 sm:p-4">
                  <router-link to="/product?category=生吐司" :class="{ 'active' : category ==='生吐司' }" class="cat border border-brown-light text-brown-light px-8 py-2 font-bold">生吐司</router-link>
                </li>
                <li class="p-2 mb-4 sm:p-4">
                  <router-link to="/product?category=各式麵包" :class="{ 'active' : category ==='各式麵包' }" class="cat border border-brown-light text-brown-light px-8 py-2 font-bold">各式麵包</router-link>
                </li>
                <li class="p-2 mb-4 sm:p-4">
                  <router-link to="/product?category=中式糕餅" :class="{ 'active' : category ==='中式糕餅' }" class="cat border border-brown-light text-brown-light  px-8 py-2 font-bold">中式糕餅</router-link>
                </li>
                <li class="p-2 mb-4 sm:p-4">
                  <router-link to="/product?category=蛋糕" :class="{ 'active' : category ==='蛋糕' }" class="cat border border-brown-light text-brown-light  px-8 py-2 font-bold">蛋糕</router-link>
                </li>
            </ul>
            <ul class="flex flex-wrap">
                <li v-for="product in products.data" :key="product.id" class="w-1/2 sm:w-4/12 xl:w-3/12 p-2 sm:p-4 mb-6 sm:mb-8 ori" :class="{'fade': loadedd }">
                    <router-link class="hvr-outline-in flex" :to="`/product/${product.id}`">
                        <div class="product-image w-full bg-cover" :style="{backgroundImage:`url( ${product.imageUrl} )`}"></div>
                    </router-link>
                    <div class="flex justify-between text-brown-dark font-bold text-base md:text-lg py-4 flex-col sm:flex-row">
                        <h2 class=""> <router-link :to="`/product/${product.id}`">{{ product.title }}</router-link></h2>
                        <p>${{ product.price }}<span class="text-base"> / {{ product.unit }}</span></p>
                    </div>
                </li>
            </ul>
        </section>
    </div>
    <VLoading :active="isLoading"></VLoading>
</template>

<style lang="scss">
    .hvr-outline-in {
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
    }
    .hvr-outline-in:before {
        pointer-events: none;
        content: '';
        position: absolute;
        border: #624D40 solid 1px;
        top: -18px;
        right: -18px;
        bottom: -18px;
        left: -18px;
        opacity: 0;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: top, right, bottom, left;
        transition-property: top, right, bottom, left;
    }
    .hvr-outline-in:hover:before, .hvr-outline-in:focus:before, .hvr-outline-in:active:before {
        top: -4px;
        right: -4px;
        bottom: -4px;
        left: -4px;
        opacity: 1;
    }
    .cat.active{
      background-color: #624d40;
      color:#fff;
    }
    .ori{
      opacity: 0;
      transition: all linear 0.3s;
    }
    .fade{
      opacity: 1;
    }
</style>

<script>
// import { WOW } from 'wowjs'
import { ref, onMounted, reactive, watchEffect, inject } from 'vue'
import { useRoute } from 'vue-router'
export default {
  setup () {
    const axios = inject('axios')
    const route = useRoute()
    const products = reactive({ data: [] })
    const isLoading = ref(false)
    const category = ref(route.query.category ?? '')
    const loadedd = ref(false)

    const getproduct = async (category = '') => {
      isLoading.value = true
      loadedd.value = false
      try {
        const res = await axios.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/?category=${category}`)
        products.data = res.data.products
      } catch (err) {
        console.log(err)
      }
      isLoading.value = false
      setTimeout(() => {
        loadedd.value = true
      }, '100')
    }

    onMounted(() => {
      getproduct(category.value)
    })

    watchEffect(() => {
      category.value = route.query.category ?? ''
      getproduct(category.value)
    })

    return {
      category, products, isLoading, loadedd
    }
  }
}
</script>
