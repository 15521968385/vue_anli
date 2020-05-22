<template>
  <div class="routerlink">
    <ul class="list">
      <!-- 
        tag决定渲染为什么标签
        replace使得路由跳转不能用退一步和进一步跳转
      -->
      <router-link
        :to="item.to"
        tag="li"
        replace
        v-for="(item,i) in rlinkdata"
        :key="i"
      >{{item.comname}}</router-link>
    </ul>
    <!-- 动画切换 -->
    <transition name="fade">
      <router-view class="rview"></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: "routerlink",
  data() {
    return {
      rlinkdata: [
        {
          to: "/home/routerlink/homes",
          comname: "home"
        },
        {
          to: "/home/routerlink/my",
          comname: "my"
        },
        {
          to: "/home/routerlink/about",
          comname: "about"
        }
      ]
    };
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
  position: absolute;
  width: 100%;
}
// 在router.js自定义的linkActiveClass,路由活跃状态的routerlink的样式
.active {
  background-color: cadetblue;
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