<template>
  <div class="chlid">
    <h1>chlid</h1>
    <h4>{{cmsg}}</h4>
    <h4>{{carr}}</h4>
    <ul class="list">
      <li v-for="(item) in arrObj" :key="item.id" @click="clickItem(item)">{{item.name}}</li>
    </ul>
    <!-- 不能用v-model直接修改props的值， -->
    <input type="text" v-model="dnum" @input="Input" />
    <h4>chlid的num:{{dnum}}</h4>
    <h4>{{parmsg}}</h4>
    <h4>{{rotmsg}}</h4>
  </div>
</template>
<script>
export default {
  name: "chlid",
  data() {
    return {
      arrObj: [
        { id: 1, name: "还望" },
        { id: 2, name: "不忘" },
        { id: 3, name: "无望" },
        { id: 4, name: "阵亡" }
      ],
      dnum: this.pnum,
      parmsg:'',
      rotmsg:''
    };
  },
  props: {
    cmsg: {
      type: String,
      default() {
        return "父组件propsandemit没有传msg给你噢";
      }
    },
    carr: {
      type: Array,
      // 用方法返回一个对象
      default() {
        return ["父组件propsandemit没有传arr给你噢"];
      }
    },
    pnum: {
      type: Number,
      default() {
        return 0;
      }
    }
  },
  methods: {
    clickItem(item) {
      this.$emit("cClickItem", item);
    },
    Input() {
      this.$emit("cInput", this.dnum);
    }
  },
  mounted(){
    this.parmsg = this.$parent.msg;
    // 访问不了，一般不在vue实例放一些data
    this.rotmsg = this.$root.msg
    

    
  }
};
</script>
<style lang="less" scoped>
.chlid {
  background-color: red;
}
.list {
  li:hover {
    background-color: blue;
    transition: all 0.5s;
  }
}
</style>
