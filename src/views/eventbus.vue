<template>
  <div class="eventbus">
      <eventbus1></eventbus1>
      <eventbus2></eventbus2>
  </div>
  
</template>
<script>
import eventbus1 from "@/components/eventbus1";
import eventbus2 from "@/components/eventbus2";
export default {
  name: "eventbus",
  components: {
    eventbus1,eventbus2
  }
};
</script>
<style lang="less" scoped>
.eventbus{
    display: flex;
    div{
        flex: 1;
        text-align: center;
    }
}
</style>