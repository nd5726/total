<template>
  <div id="defaultModal" aria-hidden="true" v-show="showFormModal" class="flex overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0 bg-white bg-opacity-60">
    <form class="relative w-2/3 rounded-lg shadow bg-brown-dark" @submit.prevent="$emit('updateArticle', temp)">
      <div class="flex justify-between items-start px-8 py-4 rounded-t border-b border-gray-600">
          <h3 class="text-lg font-semibold lg:text-2xl text-white">{{ title }}</h3>
          <button type="button" @click="showFormModal= false" class="text-gray-400 bg-transparentrounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white" data-modal-toggle="defaultModal">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
      </div>
      <div class="p-6 flex">
        <div class="flex flex-wrap w-full">
          <div class="w-full flex items-start flex-col mb-2 px-2">
            <label for="title" class="text-white">標題</label>
            <input ype="text" class="rounded px-2 py-2 w-full" id="title"  v-model="temp.title" required/>
          </div>
          <div class="w-full flex items-start flex-col mb-3 px-2">
            <label for="content" class="text-white">內容</label>
            <textarea class="rounded px-2 py-2 w-full" id="content" rows="8" v-model="temp.content" required></textarea>
          </div>
          <div class="w-full flex items-start flex-col mb-3 px-2">
            <div class="flex my-4">
              <div v-for="(tag, key) in temp.tag" :key="key" class=" bg-brown-light font-bold text-white rounded-md px-4 py-2 mr-2 flex items-center">
                <p class="mr-2">{{ tag }}</p>
                <button type="button" @click="tagRemove(key)"><b-icon-x-lg /></button>
              </div>
            </div>
            <label for="tags" class="text-white">標籤</label>
            <div class="flex w-full">
              <input placeholder="請輸入標籤" class="rounded px-2 py-2 w-5/12 mr-4" type="text" v-model="tagInput">
              <button v-show="tagInput!=''" type="button" class=" w-40 font-bold text-white bg-brown-light rounded-lg text-base focus:ring-2 focus:ring-brown-lighter px-8 py-2.5 text-center" @click="tagSubmit()">新增標籤</button>
            </div>
            <!--<input type="text" class="rounded px-2 py-2 w-full" id="unit" v-model="temp.tags" required/>-->
          </div>
           <div class="w-full flex items-start flex-col mb-3 px-2">
            <label for="author" class="text-white">作者</label>
            <input type="text" class="rounded px-2 py-2 w-full" id="author" v-model="temp.author" required/>
          </div>
          <div class="w-full flex items-start flex-col mb-3 px-2">
            <label for="create_at" class="text-white">建立時間</label>
            <input type="date" class="rounded px-2 py-2 w-full" id="create_at" v-model="temp.create_at" required/>
          </div>
          <div class="w-full flex items-center mb-3 px-2">
            <label class="text-white mr-4">是否啟用</label>
            <div class="flex-row items-start">
              <label for="is_enabled" class="flex items-center">
                <div class="relative">
                  <input type="checkbox" id="is_enabled" class="sr-only"  :true-value="true" :false-value="false"  v-model="temp.isPublic"/>
                  <div class="block bg-white w-14 h-8 rounded-full border"></div>
                  <div class="dot absolute left-1 top-1 bg-gray-200 w-6 h-6 rounded-full transition"></div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-end items-center p-6 space-x-2 rounded-b border-t border-gray-600">
          <button data-modal-toggle="defaultModal" type="button" @click="showFormModal= false" class="font-bold bg-gray-500  text-white focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-base  px-8 py-2.5 focus:z-10  hover:bg-gray-600">取消</button>
          <button data-modal-toggle="defaultModal" type="submit"  class="font-bold text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-base px-8 py-2.5 text-center">送出</button>
      </div>
    </form>
    <VLoading :active="isLoading"></VLoading>
  </div>
</template>
<script>
export default {
  data () {
    return {
      temp: {
        tag: []
      },
      showFormModal: false,
      isLoading: false,
      tagInput: ''
    }
  },
  props: ['tempArticle', 'title'],
  watch: {
    tempArticle () {
      this.temp = {
        ...this.tempArticle,
        tag: this.tempArticle.tag || []
      }
      console.log(this.temp)
    }
  },
  methods: {
    tagSubmit () {
      this.temp.tag.push(this.tagInput)
      this.tagInput = ''
    },
    tagRemove (key) {
      this.temp.tag.splice(key, 1)
    }
  }
}
</script>
