<template>
  <div class="dongtaiquery">
    <router-link
      :to="{path:'/home/dongtaiquery/queryxiangqing',query:{id:1,name:'详情一',wow:'牛逼'}}"
    >router-link实现</router-link>
    <a href="#" @click.prevent="to">代码实现</a>
  </div>
</template>
<script>
export default {
  name: "dongtaiquery",
  methods: {
    to() {
      this.$router.push({
        path: "/home/dongtaiquery/queryxiangqing",
        query: {
          id: 2,
          name: "详情二",
          wow: "到位"
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.dongtaiquery {
  a {
    display: block;
  }
}
</style>