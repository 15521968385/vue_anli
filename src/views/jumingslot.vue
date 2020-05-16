<template>
  <div class="jumingslot">
    <jumingslotcom>
      <!-- 一定要用template标签，代替中间的插槽 -->
      <template v-slot:c_slot>
        <van-search shape="round" background="#ccc" placeholder="请输入搜索关键词" />
      </template>
      <template v-slot:l_slot>
        <van-icon name="gem-o" size="20" />
      </template>
    </jumingslotcom>
    <jumingslotcom>
      <!-- 一定要用template标签，代替中间的插槽 -->
      <template v-slot:c_slot>
        <van-search placeholder="请输入搜索关键词" background="#ccc" />
      </template>
      <template v-slot:l_slot>
        <van-icon name="gift-o" size="20" />
      </template>
    </jumingslotcom>
    <jumingslotcom>
      <!-- 剧名插槽绑定的方式v-slot:r_slot，r_slot为插槽名 -->
      <template v-slot:r_slot>
        <van-icon name="gem-o" size="20" />
      </template>
      <!-- 一定要用template标签，代替中间的插槽 -->
      <template v-slot:c_slot>
        <van-search placeholder="请输入搜索关键词" background="#ccc" />
      </template>
      <template v-slot:l_slot>
        <van-icon name="gift-o" size="20" />
      </template>
    </jumingslotcom>
  </div>
</template>
<script>
import jumingslotcom from "@/components/jumingslotcom";
export default {
  name: "jumingslot",
  data() {
    return {};
  },
  components: {
    jumingslotcom
  }
};
</script>
<style lang="less" scoped>
.jumingslotcom{
    margin: 10px;
    
}
</style>