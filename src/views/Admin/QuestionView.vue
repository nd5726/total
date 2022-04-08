<template>
  <div class="container mx-auto shrink px-4">
    <div class="flex items-center justify-between mb-4">
      <h2 class="border-l-8 border-brown-dark text-2xl font-bold text-brown-dark  leading-none tracking-wider pl-4">問與答管理</h2>
      <button class="block text-white text-lg font-bold bg-brown-light hover:bg-brown-dark focus:ring-4 focus:ring-slate-300 rounded-lg px-8 py-2 text-center " type="button" data-modal-toggle="defaultModal" v-on:click="openFormModal( 'new' , item)">新增產品</button>
    </div>
    <table class="w-full">
      <tbody>
        <tr class="text-base bg-brown-light text-white">
          <th class="w-6/12 flex-shrink-0 py-3 px-4 text-left"><p>標題</p></th>
          <th class="w-2/12 flex-shrink-0 py-3 px-4 text-left"><p>建立時間</p></th>
          <th class="w-1/12 py-3 px-4"><p>是否啟用</p></th>
          <th class="w-3/12 py-3 px-4"><p>動作</p></th>
        </tr>
        <tr v-for="article in articles" :key="article.name" class="text-center odd:bg-gray-100 text-gray-500 font-bold">
          <td class="w-6/12 py-3 px-4 text-left">
            <p>{{ article.title }}</p>
          </td>
          <td class="w-2/12 py-3 px-4 text-left">
            <p>{{ $timeFormat.formatTime(article.create_at) }}</p>
          </td>
          <td class="w-1/12 py-3 px-4">
            <p v-if="article.isPublic"><span class="text-green-600">啟用</span></p>
            <p v-else><span class="text-black">未啟用</span></p>
          </td>
          <td class="w-3/12 py-3 px-4 ">
            <button type="button" class="bg-slate-300 font-bold rounded px-4 py-2 mx-2" @click="getArticle(article.id)">
              編輯
            </button>
            <button type="button" class="bg-red-700 text-white font-bold rounded px-4 py-2 mx-2" @click="openFormModal('delete', article)">
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <p class="font-bold text-slate-500 my-4 text-right tracking-wider">目前有 {{ articles.length }} 篇文章</p>
  </div>
  <VLoading :active="isLoading"></VLoading>
  <QuestionModal :title="articlemodalTitle" @update-article="updateArticle" :temp-article="tempArticle" ref="articleModal"></QuestionModal>
  <DeleteModal @delete-item="deleteArticle" :item="tempArticle" ref="deleteModal"></DeleteModal>
  <!--<PaginationComponent :pages="pagination" @update-pages="getProducts"></PaginationComponent>-->
</template>
<script>
import { formatTime, formatTimetoTimestamp } from '@/methods/timeFormat'
// import { formatTime } from '@/methods/timeFormat'
import QuestionModal from '@/components/QuestionModal.vue'
import DeleteModal from '@/components/DeleteModal.vue'
// import PaginationComponent from '@/components/PaginationComponent.vue'

export default {
  data () {
    return {
      articles: [],
      pagination: [],
      tempArticle: {
        tag: ['']
      },
      isNew: false,
      isLoading: false,
      articlemodalTitle: ''
    }
  },
  components: {
    QuestionModal, DeleteModal//, PaginationComponent
  },
  methods: {
    getArticles (page = 1) {
      this.isLoading = true
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/articles/?page=${page}`)
        .then((res) => {
          this.articles = res.data.articles
          this.pagination = res.data.pagination
          this.isLoading = false
        })
    },
    updateArticle (temp) {
      this.isLoading = true
      temp.create_at = formatTimetoTimestamp(temp.create_at)
      //   console.log(temp)
      if (this.isNew === false) {
        this.$http.put(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article/${temp.id}`, { data: temp })
          .then(res => {
            console.log(res)
            this.getArticles()
            this.closeFormModal()
            this.isLoading = false
            alert(res.data.message)
          })
          .catch(err => {
            alert(err.response.data.message)
          })
      } else {
        this.$http.post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article`, { data: temp })
          .then((res) => {
            alert(res.data.message)
            this.getArticles()
            this.closeFormModal()
            this.isLoading = false
          })
          .catch(err => {
            alert(err.response.data.message)
          })
      }
    },
    deleteArticle () {
      this.isLoading = true
      this.$http.delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article/${this.tempArticle.id}`)
        .then((res) => {
          alert(res.data.message)
          this.getArticles()
          this.closeDeleteModal()
          this.isLoading = false
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    },
    // addImage () {
    //   if (this.tempProduct.imagesUrl === undefined) {
    //     this.tempProduct.imagesUrl = [] // 如果原本沒有更多圖片，新增一個空陣列
    //   }
    //   this.tempProduct.imagesUrl.push('')
    // },
    getArticle (id) {
      this.isLoading = true
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article/${id}`)
        .then((res) => {
          this.openFormModal('edit', res.data.article)
        })
    },
    openFormModal (option, item) {
      if (option === 'edit') {
        this.articlemodalTitle = '修改問與答'
        this.tempArticle = {
          ...item,
          create_at: formatTime(item.create_at)
        }
        console.log(this.tempArticle)
        this.isNew = false
        this.$refs.articleModal.showFormModal = true
        this.isLoading = false
      } else if (option === 'new') {
        this.articlemodalTitle = '新增問與答'
        this.isNew = true
        this.tempArticle = {
          isPublic: false,
          create_at: new Date().getTime() / 1000
        }
        this.$refs.articleModal.showFormModal = true
        this.isLoading = false
      } else {
        this.tempArticle = { ...item }
        this.$refs.deleteModal.showDeleteModal = true
      }
    },
    closeFormModal () {
      this.$refs.articleModal.showFormModal = false
    },
    closeDeleteModal () {
      this.$refs.deleteModal.showDeleteModal = false
    }
  },
  mounted () {
    this.getArticles()
  }
}
</script>
