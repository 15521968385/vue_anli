<template>
  <div class="children2">
    <h1>children2</h1>
    <div class="childrenlink">
      <router-link to="/home/childrenluyou/children2/children21">children21</router-link>
      <router-link to="/home/childrenluyou/children2/children22">children22</router-link>
      <router-link to="/home/childrenluyou/children2/children23">children23</router-link>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: "children2",

  data() {
    return {
      path: ""
    };
  },
  created() {
    console.log("children2 created");
  },
  destroyed() {
    console.log("children2 destroyed");
  },
  // 当前路由处于活跃状态下调用
  activated() {
    console.log("children2 activated");
    // 回到离开前的路由
    this.$router.push(this.path);
  },
  // 当前路由处于离开状态下调用
  deactivated() {
    console.log("children2 deactivated");
  },
  // 组件守卫,this.$route.path记录离开前的路由，
  beforeRouteLeave(to, from, next) {
    this.path = this.$route.path;
    next();
  }
};
</script>
<style lang="less" scoped>
.childrenlink > a {
  display: inline-block;
  padding: 10px;
}
.active {
  background-color: darkmagenta;
  color: white;
}
</style>