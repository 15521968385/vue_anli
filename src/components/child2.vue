<template>
  <div class="chlid2">
    <h1>chlid2</h1>
    <div>{{bj}}</div>
  </div>
</template>
<script>
export default {
  name: "chlid2",
  data() {
    return {
        bj:this.arrObj
    };
  },
//   this.$refs只能实现访问子组件
  props: {
    arrObj: {
      type: Array
    }
  },

  props: {},
  methods: {},
  mounted() {
    
  }
};
</script>
<style lang="less" scoped>
.chlid2 {
  background-color: yellow;
}
</style>
