<template>
  <div class="zuoyongslot">
    <zuoyongslotcom></zuoyongslotcom>
    <zuoyongslotcom>
      <!-- slot.data就能得到子组件的lang -->
      <template v-slot="slot">{{slot.data.join('+++')}}</template>
    </zuoyongslotcom>
    <zuoyongslotcom>
      <template v-slot="slot">{{slot.data.join('---')}}</template>
    </zuoyongslotcom>
  </div>
</template>
<script>
import zuoyongslotcom from "@/components/zuoyongslotcom";
export default {
  name: "zuoyongslot",
  data() {
    return {};
  },
  components: {
    zuoyongslotcom
  }
};
</script>
<style lang="less" scoped>
.zuoyongslotcom {
  margin: 10px;
  border-bottom: 1px solid brown;
}
</style>