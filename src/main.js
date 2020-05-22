import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 重置样式
import '@/assets/reset.css'
// vant样式和组件
import 'vant/lib/index.css';
import { Icon,Button,Notify,Stepper,Dialog,Form,Field,Search  } from 'vant';
Vue.use(Icon);
Vue.use(Button);
Vue.use(Notify);
Vue.use(Stepper);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(Field);
Vue.use(Search);

//事件总线eventbus,实现兄弟组件传值
export const eventBus = new Vue()


// 引入math.js
import * as math from 'mathjs'
Vue.prototype.$math = math

//全局过滤器(格式化时间)
Vue.filter('dateFiler', function (dateStr) {
  var date = new Date(dateStr);
  // String.padStart(2,'谢敬涛'),在字符串前面添加东西，参数一为添加之后字符串的长度，参数二为用什么添加,应用场景，数字补零
  var Y = (date.getFullYear()).toString().padStart(4, 0);
  var M = (date.getMonth() + 1).toString().padStart(2, 0);
  var D = (date.getDate()).toString().padStart(2, 0);
  var h = (date.getHours()).toString().padStart(2, 0);
  var m = (date.getMinutes()).toString().padStart(2, 0);
  var s = (date.getSeconds()).toString().padStart(2, 0);
  return Y + '-' + M + '-' + D + '\t' + h + ':' + m + ':' + s;
});

// 全局指令(自动获取焦点)
Vue.directive('focus', {
  // 当指令绑定到元素上时触发bind函数，样式相关操作的最好写在bind函数了
  bind: function (el, banding) {
    // 样式通过指令绑定给元素，不管这个元素有没有被加载到页面，但这个元素肯定有了这个样式
    el.style.backgroundColor = banding.value;
  },
  // 元素插入到dom中执行，行为相关的函数最好写在inserted函数里
  inserted: function (el) {
    // focus()自动获取焦点,focus()是等dom元素加载到页面才执行(dom元素在页面上才能获取焦点)
    el.focus();
  },
  // 元素更新时执行
  updateed: function (el) {
  }
})





Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
