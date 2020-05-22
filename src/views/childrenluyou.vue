<template>
  <div class="childrenluyou">
    <div class="childrenlink">
      <router-link to="/home/childrenluyou/children1">children1</router-link>
      <router-link to="/home/childrenluyou/children2">children2</router-link>
    </div>
    <keep-alive>
      <router-view class="rview"></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: "childrenluyou",
  
  
};
</script>
<style lang="less" scoped>
.childrenluyou > .childrenlink {
  display: flex;
  a {
    flex: 1;
    text-align: center;
  }
}
.rview {
  text-align: center;
  padding: 100px 0;
}
.active {
  background-color: red;
  color: cornsilk;
}
</style>