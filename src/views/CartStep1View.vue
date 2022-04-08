<template class="cart">
    <div class="w-full lg:pl-[240px] pt-[150px] lg:pt-8 pb-16">
        <section class="mainbody-limit px-8 md:px-8 pt-12 ">
        <h1 class="cart-title text-2xl sm:text-3xl text-brown-dark font-bold tracking-wider mb-10">STEP01- 確認購物內容</h1>
        <div class="text-right">
          <button type="button" v-if="cartList.carts && cartList.carts.length> 0 " @click="removeAllCartItem" class=" text-brown-light transition-all  border border-brown-light hover:text-white hover:bg-brown-light  px-4 py-2"><span class="mr-4">×</span>清除購物車</button>
        </div>
        <table class="w-full mt-8 sm:mt-4">
            <thead>
                <tr class="border-b text-brown-dark border-[#E8DFD8] hidden sm:table-row">
                    <th class="w-1/12 text-center py-3"></th>
                    <th class="w-11/12 py-3">
                        <div class="flex items-center text-base">
                            <div class="flex items-center">
                                <div class="w-[100px] ml-2 mr-8"></div>
                            </div>
                            <div  class="flex items-center  flex-grow">
                                <p class="w-6/12 text-left">品名</p>
                                <div class="w-6/12 text-center">
                                    <div class="flex">
                                        <p class="w-16">數量</p>
                                        <p class="flex-grow">單價</p>
                                    </div>
                                </div>
                            </div>
                            <p class="w-2/12 text-right pr-2">小計</p>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody class=" border-separate border-t border-[#E8DFD8] sm:border-none" v-if="cartList.carts">
                <tr class="w-full border-b  text-brown-dark border-[#E8DFD8]" v-for="item in cartList.carts" :key="item.id">
                    <td class="w-1/12 text-center py-3">
                        <button @click="removeCartItem(item.id)" type="button" class=" transition-all w-8 h-8   text-brown-dark hover:bg-brown-light   hover:text-white disabled:opacity-50">×</button>
                    </td>
                    <td class="w-11/12 py-3">
                        <div class="flex items-center text-base">
                            <div class="flex items-center  flex-shrink-0">
                                <div class="w-[100px] h-[100px] ml-2 mr-4 sm:mr-8  bg-cover" :style="{ backgroundImage:`url( ${item.product.imageUrl} )` }"></div>
                            </div>
                            <div  class="flex items-strat sm:items-center flex-grow flex-col sm:flex-row">
                                <div class="w-full sm:w-5/12 text-left "><p>{{ item.product.title }}</p></div>
                                <div class="w-full sm:w-7/12  text-left sm:text-center text-base">
                                    <div class="flex items-start sm:items-center py-2 sm:py-0 flex-col sm:flex-row">
                                        <div>
                                          <input type="number" @change="updateCart(item)" class="w-16 px-2 mr-2 py-1 sm:p-2 border rounded-none" mim="1" v-model.number="item.qty"> {{ item.product.unit }}
                                        </div>
                                        <div class="flex-grow mx-0 mt-2 sm:mt-0 sm:mx-2">${{ item.product.price }} / {{ item.product.unit }}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-2/12 text-left sm:text-right pr-2">${{ item.product.price*item.qty }}</div>
                        </div>
                    </td>
                </tr>
                <tr class="text-brown-dark">
                    <td class="w-11/12  text-right py-6" colspan="2"><span class="mr-6">總計</span> $ {{ cartList.total }} 元</td>
                </tr>
            </tbody>
        </table>
        <div class="flex items-start sm:items-center justify-end mt-2 sm:mt-8 flex-col-reverse sm:flex-row">
            <router-link to="/product" class="flex items-center text-brown-dark font-bold py-2 mr-8 transition-all relative left-0 hover:-left-2 mt-4 ">
                <img class="mr-4 w-10 sm:w-auto" src="../assets/arrow.png" alt="繼續加購">繼續加購
            </router-link>
            <router-link to="/cart2" v-if="cartList.carts && cartList.carts.length> 0 " class="transition-all text-base w-full sm:w-auto sm:text-lg py-3 text-center sm:py-2 px-12 sm:px-16 border border-brown-light text-brown-light cursor-pointer hover:text-white hover:bg-brown-light" >確認結帳</router-link>
        </div>
        </section>
    </div>
    <VLoading :active="isLoading"></VLoading>
</template>

<style lang="scss">
</style>

<script>
import emitter from '@/methods/emitter.js'

export default {
  data () {
    return {
      cartList: [],
      isLoading: true
    }
  },
  methods: {
    getcarts () {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.cartList = res.data.data
          this.isLoading = false
          emitter.emit('get-carts')
        })
    },
    removeCartItem (id) {
      this.isLoading = true
      this.$http.delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`)
        .then((res) => {
          alert(res.data.message)
          this.getcarts()
        })
    },
    removeAllCartItem () {
      this.isLoading = true
      this.$http.delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`)
        .then((res) => {
          alert(res.data.message)
          this.getcarts()
        })
    },
    updateCart (item) {
      if (item.qty > 0) {
        this.isLoading = true
        const data = {
          product_id: item.product_id,
          qty: item.qty
        }
        this.$http.put(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`, { data })
          .then((res) => {
            alert(res.data.message)
            this.getcarts()
          })
      } else {
        alert('數量不得小於1')
        item.qty = 1 // 當數量小於1的時候，預設跳回1
      }
    }
  },
  mounted () {
    this.getcarts()
  }
}
</script>
