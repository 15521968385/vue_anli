<template>
  <div class="comqiehuan">
    <ul class="list">
      <li
        v-for="(item,i) in lis"
        :key="i"
        :class="curitem==i?'red':''"
        @click="cur(item,i)"
      >{{item.title}}</li>
    </ul>
    <transition name="fade">
      <component :is="comname" class="com"></component>
    </transition>
  </div>
</template>
<script>
import login from "@/components/login";
import login1 from "@/components/login1";
import login2 from "@/components/login2";
export default {
  name: "comqiehuan",
  data() {
    return {
      lis: [
        { title: "登录", com: "login" },
        { title: "登录一", com: "login1" },
        { title: "登录二", com: "login2" }
      ],
      comname: "login",
      curitem: 0
    };
  },
  methods: {
    cur(item, i) {
      this.comname = item.com;
      this.curitem = i;
    }
  },
  components: {
    login,
    login1,
    login2
  }
};
</script>
<style lang="less" scoped>
*{
  box-sizing: border-box;
}
.list {
  display: flex;
  li {
    flex: 1;
    text-align: center;
  }
  .red {
    background-color: red;
  }
}
.com {
  text-align: center;
 width: 100%;
 padding: 100px;
  //   一定要absolute
  position: absolute;
  
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: rotate(360deg);
  //旋转轴
  transform-origin: center center;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
</style>