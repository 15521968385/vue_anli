<template>
  <div class="yibupromise">{{msg}}</div>
</template>
<script>
export default {
  name: "yibupromise",
  data() {
    return {
      msg: ""
    };
  },
  created() {
    //   1.对请求到的数据做一些处理
    // new Promise((res, rej) => {
    //   setTimeout(() => {
    //     // res("请求成功");
    //     rej("请求失败")
    //   }, 2000);
    // })
    //   .then(msg => {
    //     console.log(msg);
    //     return msg + "1111";
    //   })
    //   .then(msg => {
    //     console.log(msg);
    //     return msg + "2222";
    //   })
    //   .then(msg => {
    //     console.log(msg);
    //     this.msg = msg
    //   }).catch(msg=>{
    //       console.log(msg)
    //       this.msg = msg
    //   })

    //  2. 解决回调地狱
    new Promise((res, rej) => {
      setTimeout(() => {
        //   第一层的请求
        res("请求成功，拿到第一层数据");
      }, 1000);
    })
      .then(msg => {
        //   第一层的请求处理
        console.log(msg);
        this.msg = msg;
        // 关键：then函数return new Promise
        return new Promise((res, rej) => {
          setTimeout(() => {
            //   第二层的请求
            res("请求成功，拿到第二层数据");
          }, 1000);
        });
      })
      .then(msg => {
        //   第二层的请求处理
        console.log(msg);
        this.msg = msg;
        return new Promise((res, rej) => {
          setTimeout(() => {
            //   第三层的请求
            res("请求成功，拿到第三层数据");
          }, 1000);
        });
      })
      .then(msg => {
        //   第三层的请求处理
        console.log(msg);
        this.msg = msg;
      });

    //   3.Promise.all的使用,同时发送多个请求，请求们都成功则请求成功
    Promise.all([
      new Promise((res, rej) => {
        setTimeout(() => {
          res([{ id: 1, name: "锤子", price: 18 }]);
        }, 1000);
      }),
      new Promise((res, rej) => {
        setTimeout(() => {
          res([{ pinglun: "锤子评论", good_id: 1 }]);
        }, 1000);
      })
    ]).then(res => {
      let goods = {
        goods: res[0],
        pinglun: res[1]
      };
      console.log(goods);
    });
  }
};
</script>
<style lang="less" scoped>
</style>