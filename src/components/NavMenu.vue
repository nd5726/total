<template>
    <nav class="nav fixed hidden lg:flex lg:h-[100vh] min-h-[500px] p-8">
        <a href="" class="block mt-4" to="/">
            <img src="../assets/logo.png" alt="">
        </a>

        <div class="fixed bottom-24 flex flex-col text-font-main pl-8">
            <router-link class="py-3" to="/product">/ 手做烘焙</router-link>
            <router-link class="py-3" to="/">/ 常見問題</router-link>
            <router-link class="py-3" to="/">/ Instagram</router-link>
        </div>
    </nav>

    <nav ref="nav" class="nav-mobile transition-all lg:hidden fixed flex top-12 w-8/12 sm:w-7/12 p-2">
        <button type="button" class="menu-btn text-[#C4C4C4] fixed text-3xl ml-2 sm:ml-4 mr-8"><b-icon-list /></button>
        <a href="" class="flex flex-grow justify-center my-2 h-[60px] sm:h-[70px]" to="/">
            <img class="h-full" src="../assets/logo_s.png" alt="">
        </a>
    </nav>

    <button type="button" ref="cart" class="cart transition-all fixed right-4 sm:right-8 lg:right-20 top-16 rounded-full
    bg-[#9C9595] bg-opacity-60 w-[60px] h-[60px] flex justify-center items-center">
        <p class="text-2xl text-white"><b-icon-cart-fill /></p>
    </button>
</template>

<style lang="scss">
    .nav{
        width:240px;
        background-color: rgba(241, 241, 241, 0.6);
    }
    .nav-mobile{
         background-color: rgba(241, 241, 241, 0.6);
         &.scroll{
             width:100%;
             top:0;
             z-index: 1000;
             background-color: rgba(241, 241, 241, 0.8);
             .menu-btn{
                 top:2rem;
             }
         }
         .menu-btn{
            top:5rem;
        }
    }
    .cart{
        @media(max-width:1024px){
            &.scroll{
                top: 1rem;
                z-index: 1001;
            }
        }
    }
</style>
<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
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
