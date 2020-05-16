<template>
  <div class="donghua">
    <van-button type="danger" v-if="flag" @click="flag=!flag">隐藏</van-button>
    <van-button type="primary" v-else @click="flag=!flag">显示</van-button>
    <transition name="fade">
      <h1 v-show="flag">我爱你</h1>
    </transition>
  </div>
</template>
<script>
export default {
  name: "donghua",
  data() {
    return {
      flag: true
    };
  }
};
</script>
<style lang="less" scoped>
h1 {
  font-size: 24px;
  text-align: center;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: rotate(360deg);
  //旋转轴
  transform-origin: center center;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
</style>