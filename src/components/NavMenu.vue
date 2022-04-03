<template>
    <nav class="nav fixed hidden lg:flex lg:h-[100vh] min-h-[500px] p-8 shadow-2xl">
        <a href="" class="block mt-4" to="/">
            <img src="../assets/logo.png" alt="">
        </a>
        <div class="fixed bottom-24 flex flex-col text-font-main pl-8">
            <router-link class="py-3" to="/product">/ 手做烘焙</router-link>
            <!--<router-link class="py-3" to="/">/ 常見問題</router-link>-->
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
        <div v-if="mobile_nav_open" class="fixed w-full h-full bg-opacity-90 transition-all  bg-brown-lighter bottom-24 left-0 top-0 z-[100] flex flex-col justify-center items-center text-xl text-font-main">
            <router-link class="py-3" @click="mobile_nav_open = false" to="/product">/ 手做烘焙</router-link>
            <!--<router-link class="py-3" @click="mobile_nav_open = false" to="/">/ 常見問題</router-link>-->
            <router-link class="py-3" @click="mobile_nav_open = false" to="/">/ Instagram</router-link>
        </div>
    </nav>

    <button ref="cart" class="cart transition-all fixed right-4 sm:right-8 xl:right-16 2xl:right-20 top-16">
      <router-link to="/cart1" class="bg-[#9C9595] hover:bg-brown-dark transition-all bg-opacity-60 w-[60px] h-[60px] rounded-full  flex justify-center items-center"  >
          <p class="text-2xl text-white"><b-icon-cart-fill /></p>
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
export default {
  data () {
    return {
      mobile_nav_open: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    this.mobile_nav_open = false
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
    }
  }
}
</script>
