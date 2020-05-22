<template>
  <div class="dongtailuyou">
      <ul>
          <li v-for="(item) in user" :key="item.id"><a href="#" @click.prevent="tiaozhuan(item)">{{item.name}}</a></li>
      </ul>
  </div>
</template>
<script>
export default {
  name: "dongtailuyou",
  data() {
    return {
      user: [
        { id: 1, name: "zs" },
        { id: 2, name: "ls" },
        { id: 3, name: "ww" },
        { id: 4, name: "xl" }
      ]
    };
  },
  methods:{
      tiaozhuan(item){
          this.$router.push(`/home/dongtailuyou/${item.name}`)
      }
  }
};
</script>
<style lang="less" scoped>
</style>