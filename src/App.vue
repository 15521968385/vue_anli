<template>
  <div id="app">
    <!-- app必须用router-view展示组件 -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name:'app',
  data(){
    return{
      msg:'根组件的msg'
    }
  }
}
</script>
<style lang="less" scoped>

</style>
