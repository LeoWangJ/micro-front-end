<template>
  <div id="app">
    <NavMenu @change="change" :news="news"/>
  </div>
</template>

<script>
import NavMenu from "./components/NavMenu.vue";

export default {
  name: "App",
  props: {
    singleSpa: {
      type: Object,
    },
    getNewsList:{
      type: Function,
      default: ()=>{

      }
    }
  },
  data(){
    return {
      news: []
    }
  },
  components: {
    NavMenu,
  },
  async created (){
    this.news = await this.getNewsList()
  },
  methods: {
    change(hash) {

      if (this.singleSpa) {
        // this.singleSpa.navigateToUrl(`/#/page/${hash}`);
        history.pushState({ state: hash }, hash, `/#/page/${hash}`);
      }
    },
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
