<template>
  <div class="jisuanqi">
    <input type="text" v-model="one" />
    <select v-model="opt">
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="*">&#215;</option>
      <option value="/">&#247;</option>
    </select>
    <input type="text" v-model="two" />
    <span>=</span>
    <input type="text" v-model="tree" class="result" />
  </div>
</template>
<script>
// 引入math.js
import math from "mathjs";
// math.config({number: 'BigNumber'})
export default {
  name: "jisuanqi",
  data() {
    return {
      opt: "*",
      one: 0,
      two: 0,
      tree: 0
    };
  },
  created() {
    console.log(
      this.$math.format(
        this.$math
          .chain(this.$math.bignumber(2.4))
          .divide(this.$math.bignumber(0.8))
          .done()
      )
    );
  },
  computed: {},
  methods: {
    jisuan() {
      if (this.opt == "*") {
        this.tree = this.$math.format(
          this.$math
            .chain(this.$math.bignumber(Number(this.one)))
            .multiply(this.$math.bignumber(Number(this.two)))
            .done()
        );
      } else if (this.opt == "/") {
        this.tree = this.$math.format(
          this.$math
            .chain(this.$math.bignumber(Number(this.one)))
            .divide(this.$math.bignumber(Number(this.two)))
            .done()
        );
      } else if (this.opt == "+") {
        this.tree = this.$math.format(
          this.$math
            .chain(this.$math.bignumber(this.one))
            .add(this.$math.bignumber(this.two))
            .done()
        );
      } else if (this.opt == "-") {
        this.tree = this.$math.format(
          this.$math
            .chain(this.$math.bignumber(Number(this.one)))
            .subtract(this.$math.bignumber(Number(this.two)))
            .done()
        );
      }
    }
  },
  watch: {
    one: function() {
      this.jisuan();
    },
    two: function() {
      this.jisuan();
    },
    opt: function() {
      this.jisuan();
    }
  }
};
</script>
<style lang="less" scoped>
input[type="text"] {
  width: 50px;
}
input.result {
  width: 200px;
}
select {
  margin: 0 10px;
  text-align: center;
  padding-left: 10px;
}
span {
  margin: 0 10px;
}
</style>