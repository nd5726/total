<template >
  <nav class="nav fixed hidden lg:flex lg:h-[100vh] min-h-[500px] p-8 shadow-2xl z-20  wow animate__animated animate__fadeIn">
      <a href="" class="block mt-4" to="/">
          <img src="../assets/logo.png" alt="">
      </a>
      <div class="fixed bottom-24 flex flex-col text-font-main pl-8">
          <router-link class="py-3" to="/product">/ 手做烘焙</router-link>
          <router-link class="py-3" to="/question">/ 我有問題</router-link>
          <router-link class="py-3" to="/">/ Instagram</router-link>
      </div>
  </nav>

    <nav ref="nav" class="nav-mobile transition-all lg:hidden fixed flex top-12 w-8/12 sm:w-7/12 p-2">
        <button type="button" @click=" mobile_nav_open = !mobile_nav_open " class="menu-btn text-[#624D40] fixed z-[101] text-3xl ml-2 sm:ml-4 mr-8">
          <span v-if="!mobile_nav_open"><b-icon-list /></span>
          <span v-else><b-icon-x-lg /></span>
        </button>
        <a href="" class="flex flex-grow justify-center my-2 h-[60px] sm:h-[70px]" to="/">
            <img class="h-full" src="../assets/logo_s.png" alt="">
        </a>
        <div :class=" [ mobile_nav_open ? 'opacity-100 visible is_open': 'opacity-0 invisible' ]" class="fixed w-full h-full vi bg-opacity-90 transition-all bg-brown-lighter bottom-24 left-0 top-0 z-[100] flex flex-col justify-center items-center text-xl text-font-main">
            <router-link class="py-3 navitem" @click="mobile_nav_open = false" to="/product">/ 手做烘焙</router-link>
            <router-link class="py-3 navitem" @click="mobile_nav_open = false" to="/question">/ 我有問題</router-link>
            <router-link class="py-3 navitem" @click="mobile_nav_open = false" to="/">/ Instagram</router-link>
        </div>
    </nav>

    <button ref="cart" class="cart transition-all fixed right-4 sm:right-8 xl:right-16 2xl:right-20 top-16">
      <router-link to="/cart1" class="bg-[#9C9595] relative hover:bg-brown-dark transition-all bg-opacity-60 w-[60px] h-[60px] rounded-full  flex justify-center items-center"  >
          <div class="text-xl text-white flex flex-col justify-center items-center">
            <b-icon-cart-fill />
            <div class="flex" v-if="cartData.length > 0">
              <span class="text-xs mt-1">{{ cartData.length }}</span>
              <span class="text-xs absolute rounded-full w-4 h-4 bg-red-800 right-0 top-0"></span>
            </div>
          </div>
      </router-link>
    </button>
</template>

<style lang="scss">
    .nav{
        width:240px;
        background-color: rgba(241, 241, 241, 0.4);
    }
    .nav-mobile{
        background-color: rgba(241, 241, 241, 0.6);
        z-index: 1000;
        .menu-btn{
            top:5rem;
        }
        &.scroll{
            width:100%;
            top:0;
            background-color: rgba(241, 241, 241, 0.8);
            .menu-btn{
                top:2rem;
            }
        }
    }
    .navitem{
      transition: all ease-out .6s;
      transform: translateX(-100%);
      opacity: 0;
    }
    @for $idx from 1 to 4 {
        .navitem:nth-child(#{$idx}) {
            transition-delay: 0.1s * $idx;
        }
    }
    .is_open .navitem{
      transform: translateX(0);
      opacity: 1;
    }
    .cart{
         z-index: 1001;
        @media(max-width:1024px){
            &.scroll{
                top: 1rem;
            }
        }
    }
</style>

<script>
import emitter from '@/methods/emitter.js'

export default {
  data () {
    return {
      mobile_nav_open: false,
      cartData: []
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    this.mobile_nav_open = false
    this.getCart()
    emitter.on('get-carts', () => {
      this.getCart()
    })
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      if (window.scrollY > 20) {
        this.$refs.nav.classList.add('scroll')
        this.$refs.cart.classList.add('scroll')
      } else {
        this.$refs.nav.classList.remove('scroll')
        this.$refs.cart.classList.remove('scroll')
      }
    },
    getCart () {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.cartData = res.data.data.carts
        })
    }
  }
}
</script>
