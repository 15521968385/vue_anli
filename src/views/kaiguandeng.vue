<template>
  <div class="kaiguandeng">
    <div class="box" :class="flag==true?'kai':''">
      <van-button type="danger" v-if="flag" @click="flag=!flag">关灯</van-button>
      <van-button type="primary" v-else @click="flag=!flag">开灯</van-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "kaiguandeng",
  data() {
    return {
      flag: false
    };
  }
};
</script>
<style lang="less" scoped>
body {
  background: brown;
  .box {
    height: 548px;
    background-color: black;
  }
  .kai {
    background-color: yellow;
  }
}
</style>