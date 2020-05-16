<template>
  <div class="xialacaidan">
    <div class="box">
      <div class="item" v-for="(item,i) in box_data" :key="i">
        <div class="title" @click="cur_item=i" :class="i==cur_item?'green':''">{{item.title}}</div>
        <div class="content" :class="i==cur_item?'block':''">{{item.content}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "xialacaidan",
  data() {
    return {
      box_data: [
        { title: "标题一", content: "内容一" },
        { title: "标题二", content: "内容二" },
        { title: "标题三", content: "内容三" },
        { title: "标题四", content: "内容四" }
      ],
      cur_item: null
    };
  }
};
</script>
<style lang="less" scoped>
.box {
  text-align: center;
  .title {
    padding: 10px;
  }
  //   跟要设置的元素同级
  .green {
    background-color: green;
  }
  .content {
    height: 0px;
    display: none;
  }
  .block{
      height: 100px;
      display: block;
      line-height: 100px;
      border: 1px solid green;
  }
}
</style>