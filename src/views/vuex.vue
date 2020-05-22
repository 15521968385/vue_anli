<template>
  <div class="vuex">
    <button @click="jiaStoreNum">+</button>
    <!-- 传入自定义的参数 -->
    <button @click="jiaCun(5)">+5</button>
    <!-- 使用vuex里面的state，$store.state.num是vuex的state属性里的num -->
    <h1>{{$store.state.num}}</h1>
    <button @click="jianStoreNum">-</button>
    <button @click="jianCun(5)">-5</button>
    <hr />
    <!-- 使用vuex里面的getters -->
    <h1>{{$store.getters.minstu}}</h1>
    <h2>{{'length:'+$store.getters.minstulength}}</h2>
    <hr />
    <!-- 传过去的参数age=10 -->
    <h1>{{$store.getters.maxagestu(10)}}</h1>
    <h2>{{'length:'+$store.getters.maxagestulength(10)}}</h2>
    <hr />
    <!-- vuex中state属性里面一开始初始化的数据才是响应式的,普通的添加和修改不能达到响应式的要求必须通过Vue.set和Vue.delete添加和删除 -->

    <h1>{{$store.state.myinfo}}</h1>
    <button @click="addinfo('addr','河源')">添加信息</button>
    <button @click="delinfo('name')">删除信息</button>
    <button @click="updateinfo(1200)">异步修改信息</button>
    <hr>
    <h1>{{$store.state.moduleA.name}}</h1>
    <h1>{{$store.getters.fullName}}</h1>
    <h1>{{$store.getters.fullName2}}</h1>
    <h1>{{$store.getters.fullName3}}</h1>
    <button @click="updateName('谢敬涛')">修改名字</button>
    <button @click="asyncupdatename('谢二')">异步修改名字</button>

  </div>
</template>
<script>
export default {
  name: "vuex",
  data() {
    return {};
  },
  methods: {
    jiaStoreNum() {
      // commit提交修改vuex里mutations的方法，这样devtools插件就能检测到
      this.$store.commit("jiaNum");
    },
    jianStoreNum() {
      this.$store.commit("jianNum");
    },
    jiaCun(cun) {
      // 传递的参数放在后面,另一种提交风格,传递一个对象
      this.$store.commit({
        type: "jiaCun",
        cun
      });
    },
    jianCun(cun) {
      this.$store.commit({
        type: "jianCun",
        cun
      });
    },
    addinfo(key, value) {
      this.$store.commit({
        type: "addinfo",
        key,
        value
      });
    },
    delinfo(key) {
      this.$store.commit({
        type: "delinfo",
        key
      });
    },
    updateinfo(age) {
      // 提交异步的请求
      this.$store.dispatch({
        type: "asyncupdateinfo",
        age,
        success() {
          console.log("修改成功");
        }
      });
    },
    updateName(name){
        this.$store.commit({
            type:'updateName',
            name
        })
    },
    asyncupdatename(name){
        this.$store.dispatch({
            type:'asyncupdatename',
            name,

        })
    }
  }
};
</script>
<style lang="less" scoped>
</style>