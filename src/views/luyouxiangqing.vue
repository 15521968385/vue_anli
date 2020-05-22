<template>
  <div class="luyouxiangqing">
    <h2>您好啊{{par}}</h2>
  </div>
</template>
<script>
export default {
  name: "luyouxiangqing",
  computed: {
    par() {
      return this.$route.params.name;
    }
  }
};
</script>
<style lang="less" scoped>
</style>