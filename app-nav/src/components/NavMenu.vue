<template>
  <div class="navmenu">
    <a
      class="menu-item"
      v-for="item in news"
      :key="item.id"
      @click="menuClick(item)"
      :class="{'active': item.id === currentId}"
      >標題: {{ item.id }}</a
    >
  </div>
</template>

<script>
export default {
  name: "navmenu",
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
      currentId: null
    }
  },
  methods: {
    menuClick(item) {
      this.currentId = item.id
      this.$emit("change", item.id);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.navmenu {
  padding: 10px;
  display: flex;
  flex-direction:column;
  width: 300px;
  overflow-y: scroll;
  height: calc(100vh - 50px);
  .menu-item {
    padding: 20px;
    border: 1px #f0f0f0 solid;
    background-color: #f0f0f0;
    font-size: 30px;
    margin-right: 10px;
    color: #444;
    cursor: pointer;

    &:hover,&.active {
      border: 1px #7598f8 solid;
      background-color: #7598f8;
      color: #fff;
    }
  }
}
</style>
