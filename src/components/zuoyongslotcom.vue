<template>
  <div class="zuoyongslotcom">
      <!-- 将lang数据传过去 -->
    <slot :data="lang">
      <ul>
        <li v-for="(item,i) in lang" :key="i">{{item}}</li>
      </ul>
    </slot>
  </div>
</template>
<script>
export default {
  name: "zuoyongslotcom",
  data() {
    return {
      lang: ["java", "javascript", "go", "php", "mysql"]
    };
  }
};
</script>
<style lang="less" scoped>
</style>