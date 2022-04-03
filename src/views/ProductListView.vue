<template>
    <div class="product w-full lg:pl-[240px] pt-[150px] lg:pt-8 pb-8">
        <section class="mainbody-limit px-4 md:px-8 pt-12 ">
            <!--<ul class="flex mb-8 flex-wrap">
                <li class="p-2 sm:p-4"><button class="border border-brown-light text-brown-light px-8 py-2 font-bold" type="button">吐司</button></li>
                <li class="p-2 sm:p-4"><button class="border border-brown-light text-brown-light px-8 py-2 font-bold" type="button">各式麵包</button></li>
                <li class="p-2 sm:p-4"><button class="border border-brown-light text-brown-light  px-8 py-2 font-bold" type="button">蛋黃酥</button></li>
            </ul>-->
            <ul class="flex flex-wrap">
                <li v-for="product in products" :key="product.id" class="w-1/2 sm:w-4/12 xl:w-3/12 p-2 sm:p-4 mb-6 sm:mb-8">
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
</style>

<script>
export default {
  data () {
    return {
      products: [],
      isLoading: true
    }
  },
  mounted () {
    this.getproduct()
  },
  methods: {
    getproduct () {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products`)
        .then((res) => {
          this.products = res.data.products
          this.isLoading = false
        })
    }
  }
}
</script>
