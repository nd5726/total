<template class="cart">
    <div class="w-full lg:pl-[240px] pt-[150px] lg:pt-8 pb-16">
        <section class="mainbody-limit px-8 md:px-8 pt-12 ">
        <h1 class="cart-title text-2xl sm:text-3xl text-brown-dark font-bold tracking-wider mb-10">Q & A 我有問題</h1>
        <ul class="pt-8">
          <li class="border border-brown-dark p-4 flex mb-4" v-for="article in articleList" :key="article.id">
            <span v-if="tempArticle.id == article.id" class="pt-2 cursor-pointer"><b-icon-dash-lg /></span>
            <span v-else class="pt-2 cursor-pointer" @click="getArticle(article.id)"><b-icon-plus-lg /></span>
            <div class="ml-4 mr-4">
              <div class="text-brown-dark text-base md:text-lg font-bold cursor-pointer" @click="getArticle(article.id)">{{ article.title }}</div>
              <div class="answer text-brown-light" :class="{ 'active' : tempArticle.id == article.id }">{{ tempArticle.content }}</div>
            </div>
          </li>
        </ul>
        <div class="flex items-start sm:items-center justify-start mt-2 ml-2 sm:mt-8 flex-col-reverse sm:flex-row">
            <router-link to="/product" class="flex items-center text-brown-dark font-bold py-2 mr-8 transition-all relative left-0 hover:-left-2 mt-4 ">
                <img class="mr-4 w-10 sm:w-auto" src="../assets/arrow.png" alt="選購商品">選購商品
            </router-link>
        </div>
        </section>
    </div>
    <VLoading :active="isLoading"></VLoading>
</template>

<style lang="scss">
  .answer{
    opacity: 0;
    visibility: hidden;
    height:0;
    transition : all 0.3s;
    &.active{
      opacity: 1;
      height:auto;
      visibility: visible;
      padding:20px 0;
    }
  }
</style>

<script>
export default {
  data () {
    return {
      articleList: [],
      tempArticle: {},
      isLoading: true
    }
  },
  methods: {
    getArticles () {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/articles`)
        .then((res) => {
          console.log(res)
          this.articleList = res.data.articles
          this.isLoading = false
        })
    },
    getArticle (id) {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/article/${id}`)
        .then((res) => {
          this.tempArticle = res.data.article
          this.isLoading = false
          console.log(this.tempArticle)
        })
    }
  },
  mounted () {
    this.getArticles()
  }
}
</script>
