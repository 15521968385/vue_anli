<template>
  <div class="jumingslotcom">
    <div class="r_box">
      <slot name="r_slot">
        <!-- 默认插入 -->
        <van-icon name="arrow-left" size="20" />
      </slot>
    </div>
    <div class="c_box">
      <slot name="c_slot"></slot>
    </div>
    <div class="l_box">
      <slot name="l_slot"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "jumingslotcom"
};
</script>
<style lang="less" scoped>
.jumingslotcom {
  height: 44px;
  background-color: #ccc;
  display: flex;

  .c_box {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    .van-search{
        width: 100%;
        height: 100%;
    }
  }
  .r_box,
  .l_box {
    width: 44px;
    height: 100%;
    // background-color: blueviolet;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>