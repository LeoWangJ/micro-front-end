<template>
  <div id="app">
    <NavContent :news="news"/>
  </div>
</template>

<script>
import NavContent from "./components/NavContent.vue";

export default {
  name: "App",
  components: {
    NavContent,
  },
  data(){
    return {
      news: []
    }
  },
  props:{
    getNewsList:{
      type: Function,
      default: ()=>{

      }
    }
  },
  async created (){
    this.news = await this.getNewsList()
  },
};
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
