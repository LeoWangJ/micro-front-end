<template>
  <div class="page">
    <p>標題: {{content.id}}</p>
    <p>{{content.title}}</p>
    <img :src="content.image"/>
    <p><a :href="content.path" target="_blank">詳細來源</a></p>
  </div>
</template>

<script>
export default {
  name: "comment",
  props:{
    news:{
      type:Array,
      default: ()=>{
        return []
      }
    }
  },
  data(){
    return {
      content:{}
    }
  },
  watch:{
    $route(to,from){
      if(to.path !== from.path){
        this.showContent()
      }
    }
  },
  mounted(){
    this.showContent()
  },
  methods:{
    showContent(){
      this.news.forEach(item =>{
        if(item.id === Number(this.$route.params.id)){
          this.content = item
        }
      })
    }
  }
};
</script>

<style lang="less" scoped>
.page {
  font-size: 20px;
}
</style>
