<template>
  <div id="app">
    <router-view />
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>
<script>
  import FooterGuide from "./components/FooterGuide/FooterGuide";
  import {reqCategorys} from './api'
  export default {
    async mounted() {
      const  result = await reqCategorys()
      console.log(result)
    },
    components:{
      FooterGuide,
    },
    created() {
      // 异步获取 address
      this.$store.dispatch('getAddress')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #F5F5F5
</style>
