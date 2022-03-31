<template>
  <div class="main flex">
    <NavMenu ref="nav"/>
    <router-view></router-view>
  </div>
  <FooterComponent></FooterComponent>
</template>

<script>
// @ is an alias to /src
import NavMenu from '@/components/NavMenu.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'HomeView',
  data () {
    return {
    }
  },
  mounted () {
  },
  unmounted () {
  },
  methods: {
  },
  components: {
    NavMenu, FooterComponent
  }
}
</script>
