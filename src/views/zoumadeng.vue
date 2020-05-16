<template>
  <div class="zoumadeng">
    <van-button type="primary" @click="zou">走走</van-button>
    <van-button type="danger" @click="ting">停停</van-button>
    <p>{{msg}}</p>
  </div>
</template>
<script>
export default {
  name: "zoumadeng",
  data() {
    return {
      msg: "走走停停的走马灯=================",
      //   定时器
      timer: null
    };
  },
  methods: {
    zou() {
      // 定时器部位null时点击'走'也不会开启第二个定时器
      if (this.timer != null) return;
      this.timer = setInterval(() => {
        let one = this.msg.slice(0, 1);
        let two = this.msg.slice(1);
        let tree = two + one;
        this.msg = tree;
      }, 100);
    },
    ting() {
      clearInterval(this.timer);
      //   将定时器初始化
      this.timer = null;
    }
  },
  created() {}
};
</script>
<style lang="less" scoped>
</style>