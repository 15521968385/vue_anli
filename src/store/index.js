import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 需要共享的状态
  state: {
    num: 0,
    stu: [
      { name: '谢敬涛', age: 18 },
      { name: '谢霆锋', age: 44 },
      { name: '谢娜', age: 50 },
      { name: '谢尔', age: 2 }
    ],
    myinfo: {
      name: '谢敬涛',
      age: 100,
      like: 'you',

    }
  },
  // 提交修改的状态，不推荐直接修改，因为devtools插件不能跟踪
  mutations: {
    // 传入的state就是上面的state，不用this
    // 递增方法
    jiaNum(state) {
      state.num++
    },
    // 递减方法
    jianNum(state) {
      state.num--
    },
    // 传入自定义的参数,另一种提交风格
    // 传参方式自定义递增的数目
    jiaCun(state, payload) {
      state.num += payload.cun
    },
    jianCun(state, payload) {
      state.num -= payload.cun
    },
    // vuex中state属性里面一开始初始化的数据才是响应式的,普通的添加和修改不能达到响应式的要求必须通过Vue.set和Vue.delete添加和删除
    addinfo(state, payload) {
      Vue.set(state.myinfo, payload.key, payload.value)
    },
    delinfo(state, payload) {
      Vue.delete(state.myinfo, payload.key)
    },
    updateinfo(state, payload) {
      state.myinfo.age = payload.age
      payload.success()
    }
  },
  // 对state里面的数据做一层处理，相当于vue实例中的compute计算属性
  getters: {
    // 直接使用
    minstu(state) {
      return state.stu.filter(item => item.age <= 20)
    },
    // 可把minstu当作参数传入,因为getters.minstu依赖于state，所以也要将state传入minstulength
    minstulength(state, getters) {
      return getters.minstu.length
    },
    // getters使用的时候传入自定义参数
    maxagestu(state) {
      // 返回一个函数
      return age => {
        return state.stu.filter(item => item.age > age)
      }
    },
    maxagestulength(state, getters) {
      return function (age) {
        return getters.maxagestu(age).length
      }

    },

  },
  actions: {
    // 提交异步的请求,异步请求里面提交同步方法
    asyncupdateinfo($store, payload) {
      setTimeout(() => {
        $store.commit('updateinfo', payload)
      }, 1000)
      
    }
  },
  modules: {
    moduleA:{
      state:{
        // $store.state.moduleA.name获取
        name:'kobe'
      },
      mutations:{
        // 也是通过commit提交
        updateName(state,payload){
          state.name=payload.name
        }
      },
      getters:{
        // 也是通过$store.getters.*使用
        fullName(state){
          return state.name+'辣少'
        },
        fullName2(state,getters){
          return getters.fullName+'夫斯基'
        },
        // rootState根的state
        fullName3(state,getters,rootState){
          return getters.fullName2+rootState.num
        }
      },
      actions:{
        asyncupdatename($store,payload){
          setTimeout(() => {
            $store.commit('updateName',payload)
          }, 1000);
        }
      }
    }
  }
})
