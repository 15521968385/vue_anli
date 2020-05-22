<template>
  <div class="axios">axios</div>
</template>
<script>
import { request, request2 } from "@/request/request";
export default {
  name: "axios",
  data() {
    return {
      msg: []
    };
  },
  created() {
    //   调用request方法，返回一个promise对象，可以调用.then.catch.all等方法
    request({
      url: "/getbanneritem/banner/1"
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    
    // 自己封装的axios想要发送多个请求
    Promise.all([
      request2({
        url: "/getallmusic"
      }),
      request2({
        url: "/getbanner"
      })
    ]).then(res => {
      // console.log(res)
      let [music, banner] = res;
      console.log(music);
      console.log(banner);
    });
  }
};
</script>
<style lang="less" scoped>
</style>