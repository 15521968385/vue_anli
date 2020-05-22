<template>
  <div class="daimatiaozhuan">
    <ul class="list">
      <li
        :class="$route.path.indexOf(item.to)!=-1?'active':''"
        v-for="(item,i) in rlinkdata"
        :key="i"
        @click="tiaozhuan(item)"
      >{{item.comname}}</li>
    </ul>
    <router-view class="rview"></router-view>
  </div>
</template>
<script>
export default {
  name: "daimatiaozhuan",
  data() {
    return {
      rlinkdata: [
        {
          to: "/home/daimatiaozhuan/homes",
          comname: "home"
        },
        {
          to: "/home/daimatiaozhuan/my",
          comname: "my"
        },
        {
          to: "/home/daimatiaozhuan/about",
          comname: "about"
        }
      ]
    };
  },
  methods: {
    tiaozhuan(item) {
      this.$router.replace(item.to);
    }
  }
};
</script>
<style lang="less" scoped>
.list {
  display: flex;
  li {
    flex: 1;
    text-align: center;
  }
}

.rview {
  text-align: center;
  padding: 100px;
}
.active {
  background-color: cadetblue;
}
</style>