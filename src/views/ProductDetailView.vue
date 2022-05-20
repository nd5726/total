<template>
    <div class="product w-full lg:pl-[240px] pt-[150px] lg:pt-8 pb-16">
        <section class="mainbody-limit px-8 md:px-8 pt-12">
            <button class="flex items-center  text-brown-dark font-bold py-2 mb-8 transition-all relative left-0 hover:-left-2" @click="$router.go(-1)">
              <img class="mr-4" src="../assets/arrow.png" alt="回上頁">回上頁
            </button>
            <ol class="flex mb-6 text-brown-dark">
                <li class="mr-2"><router-link class="mr-2" to="/">妥妥手做</router-link>/</li>
                <li class="mr-2"><router-link class="mr-2" to="/product">手做烘焙</router-link>/</li>
                <li><a>{{ tempProduct.title }}</a></li>
            </ol>

            <div class="flex item-start justify-between mb-16 flex-wrap">
                <div class="flex w-full md:w-1/2 pr-0 md:pr-8 flex-shrink-0 flex-col items-stretch mb-8 md:mb-0">
                  <div class="md:sticky top-10">
                    <div class="w-full" v-if="tempProduct.imageUrl">
                        <div class="product-image w-full bg-cover" :style="{ backgroundImage:`url( ${ tempProduct.imageUrl } )`}"></div>
                      </div>
                      <ul class="w-full mt-4 flex imageslist">
                          <li class="mb-4 w-1/5 pr-2" v-if="tempProduct.imageUrl">
                            <div class="product-image w-full bg-cover" :style="{backgroundImage:`url( ${tempProduct.imageUrl} )`}"></div>
                          </li>
                          <li v-for="images in tempProduct.imagesUrl" :key="images.id" class="mb-4 w-1/5 pr-2">
                              <div class="product-image w-full bg-cover" :style="{backgroundImage:`url( ${images} )`}"></div>
                          </li>
                      </ul>
                  </div>
                </div>
                <div class="content flex flex-col justify-between p-12 md:p-16 border border-[#707070] w-full md:w-6/12 md:max-w-[500px] ">
                    <div class="">
                      <div class="flex items-center mb-5 flex-wrap-reverse">
                          <h1 class="text-brown-dark text-2xl sm:text-3xl font-bold mr-4">{{ tempProduct.title }}</h1>
                          <span class="text-white bg-brown-dark rounded text-sm px-2 py-1 my-1">{{ tempProduct.category }}</span>
                      </div>
                      <p class="text-[#707070] text-base sm:text-lg font-bold mr-4 mb-4"><span class="text-gray-400 line-through mr-2">$ {{ tempProduct.origin_price }}</span>  $ {{ tempProduct.price }} /{{ tempProduct.unit }}</p>
                      <p class="text-brown-light text-base sm:text-lg font-bold leading-7 sm:leading-8 my-2">{{ tempProduct.description }}</p>
                      <p class="text-brown-light text-base sm:text-lg font-bold leading-7 sm:leading-8 my-2">{{ tempProduct.content }}</p>
                    </div>
                    <div class="flex flex-col mt-24 md:mt-8">
                        <div class="flex items-center mb-8">
                          <label class="mr-2 text-[#707070] " for="cart_number">選擇數量 :</label><input id="cart_number" type="number" min="1" max="10" v-model="qty" class="w-28 p-2 border border-[#707070] rounded-none bg-transparent appearance-none text-center">
                        </div>
                        <button type="button" @click="addtoCart(tempProduct.id,qty)" class="w-full text-lg  border border-[#707070] text-[#707070] py-3 transition-all hover:bg-[#707070] hover:text-white relative top-0 left-0 cursor-pointer hover:-top-1 hover:-left-1" >加入購物車</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <VLoading :active="isLoading"></VLoading>
</template>

<style lang="scss" scoped>
  .content{
      position:relative;
      z-index:200;
      &:before{
          content:'';
          position: absolute;
          width:100%;
          height:100%;
          top:15px;
          left:15px;
          border:1px solid #707070;
          z-index: -1;
      }
      @media(max-width:769px){
        &:before{
          top:10px;
          left:10px;
        }
      }
  }
</style>

<script>
import emitter from '@/methods/emitter.js'
import { ref, inject, onMounted } from 'vue'
import { useRoute } from 'vue-router'
export default {
  setup () {
    const axios = inject('axios')
    const tempProduct = ref([])
    const qty = ref(1)
    const isLoading = ref(true)
    const route = useRoute()

    const getProducts = async () => {
      try {
        const { id } = route.params
        const res = await axios.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`)
        tempProduct.value = res.data.product
      } catch (err) {
        console.log(err)
      }
      isLoading.value = false
    }

    function numberCheck () {
      if (qty.value <= 0 || qty.value > 10) {
        alert('數量不得小於1，最大購買數量為10')
        qty.value = 1
        return false
      } else {
        return true
      }
    }

    async function addtoCart (id, qty = 1) {
      if (numberCheck()) {
        isLoading.value = true
        const data = {
          product_id: id,
          qty: qty
        }
        try {
          const res = await axios.post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, { data })
          alert(res.data.message)
          emitter.emit('get-carts')
        } catch (err) {
          console.log(err)
        }
        isLoading.value = false
      }
    }

    onMounted(() => {
      getProducts()
    })

    return {
      tempProduct, isLoading, numberCheck, qty, addtoCart
    }
  }
}
</script>
