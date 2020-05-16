<template>
  <div class="exportandimport">
    <ul>
      <li>{{wo.name}}</li>
      <li>{{wo.sum(1,2)}}</li>
      <li>{{wo.personrun}}</li>
    </ul>
    <ul>
      <li>{{wo2.sex}}</li>
      <li>{{wo2.addr}}</li>
    </ul>
    <ul>
      <li v-for="(item,i) in all" :key="i">{{item}}</li>
    </ul>
    <ul>
      <li v-for="(item,i) in wo3" :key="i">{{item}}</li>
    </ul>
  </div>
</template>
<script>
// 第一种导出方式的导入
import { name, sum, Person } from "@/comm/comm";
// 第二种导出方式的导入
import { sex, addr } from "@/comm/comm";
// 导入comm中所有的export
import * as all from "@/comm/comm";
// 导入comm中export default,可以自己命名
import def from "@/comm/comm";
export default {
  name: "exportandimport",
  data() {
    return {
      wo: {},
      wo2: {},
      all: {},
      wo3: {}
    };
  },
  created() {
    this.wo.name = name;
    this.wo.sum = sum;
    let p = new Person();
    this.wo.personrun = p.run("奔跑");
    this.wo2.sex = sex;
    this.wo2.addr = addr;
    this.all = all;
    this.wo3.ji = def.ji;
    this.wo3.msg = def.msg;
    console.log(def);
  }
};
</script>

<style lang="less" scoped>
ul {
  margin: 10px;
  border: 1px solid red;
}
</style>