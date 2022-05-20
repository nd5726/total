<template class="cart">
    <div class="w-full lg:pl-[240px] pt-[150px] lg:pt-8 pb-16">
        <section class="mainbody-limit px-8 md:px-8 pt-12 ">
        <h1 class="cart-title text-2xl sm:text-3xl text-brown-dark font-bold tracking-wider mb-10">STEP02- 填寫購物資訊</h1>
        <div class="flex flex-col">
          <table class="w-full  mt-4 mb-8">
              <thead>
                  <tr class="border-b text-brown-dark border-[#E8DFD8] hidden sm:table-row">
                      <th class="w-11/12 py-3">
                          <div class="flex items-center text-base">
                              <div class="flex items-center">
                                  <div class="w-[100px] ml-2 mr-8"></div>
                              </div>
                              <div  class="flex items-center  flex-grow">
                                  <p class="w-6/12 text-left">品名</p>
                                  <div class="w-6/12 text-center">
                                      <div class="flex">
                                          <p class="">數量</p>
                                          <p class="flex-grow">單價</p>
                                      </div>
                                  </div>
                              </div>
                              <p class="w-1/12 text-right">小計</p>
                          </div>
                      </th>
                  </tr>
              </thead>
              <tbody class=" border-separate" v-if="cartList.carts">
                  <tr class="w-full border-b  text-brown-dark border-[#E8DFD8]" v-for="item in cartList.carts" :key="item.id">
                      <td class="w-11/12 py-3">
                          <div class="flex items-center text-base">
                              <div class="flex items-center  flex-shrink-0">
                                  <div class="w-[100px] h-[100px] ml-2  mr-4 sm:mr-8 bg-cover" :style="{ backgroundImage:`url( ${item.product.imageUrl} )` }"></div>
                              </div>
                              <div  class="flex items-strat sm:items-center flex-grow flex-col sm:flex-row">
                                  <div class="w-full sm:w-6/12 text-left "><p>{{ item.product.title }}</p></div>
                                  <div class="w-full sm:w-6/12  text-left sm:text-center text-base">
                                    <div class="flex items-start sm:items-center py-2 sm:py-0 flex-col sm:flex-row">
                                        <p>{{ item.qty }} {{ item.product.unit }} </p>
                                        <div class="flex-grow mx-0 mt-2 sm:mt-0 sm:mx-2">${{ item.product.price }} / {{ item.product.unit }} </div>
                                    </div>
                                </div>
                              </div>
                              <div class="w-1/12 text-left sm:text-right">${{ item.product.price*item.qty }}</div>
                          </div>
                      </td>
                  </tr>
                  <tr class="text-brown-dark">
                      <td class="w-11/12  text-right py-6" colspan="2"><span class="mr-6">總計</span> $ {{ cartList.total }} 元</td>
                  </tr>
              </tbody>
          </table>
          <v-form v-slot="{ errors }" ref="cartForm" @submit="onSubmit" class="w-full mx-auto text-left" >
            <div  class="w-full bg-brown-lighter p-8 ">
              <div class="inline-flex flex-col w-full sm:w-5/12 mr-4 mb-4">
                  <label for="name" class=" w-full text-base text-brown-dark font-bold mb-1 ">收件人姓名</label>
                  <v-field v-model="form.user.name" id="name" name="name" type="text" class="w-full p-2 border rounded-none " :class="[ errors['name'] ? 'border-red-700':'border-brown-lighter']" placeholder="請輸入收件人姓名" rules="required"></v-field>
                  <error-message name="name" class="text-red-700 pl-2"></error-message>
              </div>
              <div  class="inline-flex flex-col w-full sm:w-5/12 mr-4 mb-4">
                <label for="tel" class=" w-full text-base text-brown-dark font-bold mb-1">收件人電話</label>
                  <v-field v-model="form.user.tel" id="tel" name="tel" type="tel" class="w-full p-2 border rounded-none " :class="[ errors['tel'] ? 'border-red-700':'border-brown-lighter']" placeholder="請輸入收件人電話" rules="min:8|required"></v-field>
                  <error-message name="tel" class="text-red-700 pl-2"></error-message>
              </div>
              <div  class="inline-flex flex-col  w-full sm:w-5/12 mr-4 mb-4">
              <label for="address" class=" w-full text-base text-brown-dark font-bold mb-1">收件地址</label>
                  <v-field  v-model="form.user.address" id="address" name="address" type="address" class="w-full p-2 border rounded-none " :class="[ errors['address'] ? 'border-red-700':'border-brown-lighter']" placeholder="請輸入地址" rules="required"></v-field>
                  <error-message name="address" class="text-red-700 pl-2"></error-message>
              </div>
              <div  class="inline-flex flex-col  w-full sm:w-5/12 mr-4 mb-4">
                  <label for="email" class=" w-full text-base text-brown-dark font-bold mb-1">Email</label>
                  <v-field  v-model="form.user.email" id="email" name="email" type="email" class="w-full p-2 border rounded-none " :class="[ errors['email'] ? 'border-red-700':'border-brown-lighter']" placeholder="請輸入 Email" rules="email|required"></v-field>
                  <error-message name="email" class="text-red-700 pl-2"></error-message>
              </div>
              <div  class="inline-flex flex-col w-full mb-4">
                <label for="others" class=" w-full text-base text-brown-dark font-bold mb-1">其他備註</label>
                <v-field as="textarea" v-model="form.message" name="others" id="others" class="w-full  p-2 border border-brown-lighter rounded-none" cols="30" rows="5"></v-field>
              </div>
            </div>
            <div class="flex items-start sm:items-center justify-end mt-8 flex-col-reverse sm:flex-row">
                  <button class="flex items-center text-brown-dark font-bold py-2 mr-8 transition-all relative left-0 hover:-left-2 mt-4 " @click="$router.go(-1)">
                      <img class="mr-4 w-10 sm:w-auto" src="../assets/arrow.png" alt="修改購物內容">修改購物內容
                  </button>
                  <button type="submit" class="transition-all text-base w-full sm:w-auto sm:text-lg py-2 px-12 sm:px-16 border border-[#707070] text-[#707070]  cursor-pointer hover:text-white hover:bg-brown-light" >確認送出</button>
              </div>
          </v-form>
        </div>
        </section>
    </div>
    <VLoading :active="isLoading"></VLoading>
</template>

<style lang="scss">
    .active{
        //background: rgba(255, 246, 240, 0.6);
    }
</style>

<script>
import emitter from '@/methods/emitter.js'
export default {
  data () {
    return {
      cartList: [],
      isLoading: true,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    getcarts () {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.cartList = res.data.data
          this.isLoading = false
        })
    },
    onSubmit () {
      this.isLoading = true
      const data = this.form
      this.$http.post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`, { data })
        .then((res) => {
          alert(res.data.message)
          this.$refs.cartForm.resetForm()
          emitter.emit('get-carts')
          this.$router.push('/cartFinish')
        })
    }
  },
  mounted () {
    this.getcarts()
  }
}
</script>
