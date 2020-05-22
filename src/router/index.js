import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)




// views
const home = () => import('@/views/home')
const zoumadeng = () => import('@/views/zoumadeng')
const jisuanqi = () => import('@/views/jisuanqi')
const kaiguandeng = () => import('@/views/kaiguandeng')
const clickandhover = () => import('@/views/clickandhover')
const xialacaidan = () => import('@/views/xialacaidan')
const chanpinguanli = () => import('@/views/chanpinguanli')
const donghua = () => import('@/views/donghua')
const comqiehuan = () => import('@/views/comqiehuan')
const gouwuche = () => import('@/views/gouwuche')
const vmodel = () => import('@/views/vmodel')
const propsandemit = () => import('@/views/propsandemit')
const comshuangxiang = () => import('@/views/comshuangxiang')
const refsandparent = () => import('@/views/refsandparent')
const jumingslot = () => import('@/views/jumingslot')
const zuoyongslot = () => import('@/views/zuoyongslot')
const exportandimport = () => import('@/views/exportandimport')
const routerlink = () => import('@/views/routerlink')
const daimatiaozhuan = () => import('@/views/daimatiaozhuan')
const dongtailuyou = () => import('@/views/dongtailuyou')
const luyouxiangqing = () => import('@/views/luyouxiangqing')
const childrenluyou = () => import('@/views/childrenluyou')
const dongtaiquery = () => import('@/views/dongtaiquery')
const queryxiangqing = () => import('@/views/queryxiangqing')
const yibupromise = () => import('@/views/yibupromise')
const axios = () => import('@/views/axios')
const eventbus = () => import('@/views/eventbus')
const vuex = () => import('@/views/vuex')
// components
const homes = () => import('@/components/home')
const my = () => import('@/components/my')
const about = () => import('@/components/about')
const children1 = () => import('@/components/children1')
const children2 = () => import('@/components/children2')
const children21 = () => import('@/components/children21')
const children22 = () => import('@/components/children22')
const children23 = () => import('@/components/children23')
const routes = [
  {
    path: '',
    redirect: '/home',
    
  },
  {
    path: '/home',
    component: home,
    meta:{
      title:'首页'
    },
    // 路由独享守卫
    beforeEnter:((to,from,next)=>{
      console.log('beforeEnter,只有进入/home才会调用')
      next()
    })
  },
  {
    path: '/home/zoumadeng',
    component: zoumadeng,
    meta:{
      title:'走马灯'
    }
  },
  {
    path: '/home/jisuanqi',
    component: jisuanqi,
    meta:{
      title:'计算器'
    }
  },
  {
    path: '/home/kaiguandeng',
    component: kaiguandeng,
    meta:{
      title:'开关等案例'
    }
  },
  {
    path: '/home/clickandhover',
    component: clickandhover
  },
  {
    path: '/home/xialacaidan',
    component: xialacaidan
  },
  {
    path: '/home/chanpinguanli',
    component: chanpinguanli
  },
  {
    path: '/home/donghua',
    component: donghua
  },
  {
    path: '/home/comqiehuan',
    component: comqiehuan
  },
  {
    path: '/home/gouwuche',
    component: gouwuche
  },
  {
    path: '/home/vmodel',
    component: vmodel
  },
  {
    path: '/home/propsandemit',
    component: propsandemit
  },
  {
    path: '/home/comshuangxiang',
    component: comshuangxiang
  },
  {
    path: '/home/refsandparent',
    component: refsandparent
  },
  {
    path: '/home/jumingslot',
    component: jumingslot
  },
  {
    path: '/home/zuoyongslot',
    component: zuoyongslot
  },
  {
    path: '/home/exportandimport',
    component: exportandimport
  },
  {
    path: '/home/routerlink',
    component: routerlink,
    children: [
      {
        path: '',
        redirect: 'homes'
      },
      {
        path: 'homes',
        component: homes,
      },
      {
        path: 'my',
        component: my,
      },
      {
        path: 'about',
        component: about,
      },
    ]
  },
  {
    path: '/home/daimatiaozhuan',
    component: daimatiaozhuan,
    children: [
      {
        path: '',
        redirect: 'homes'
      },
      {
        path: 'homes',
        component: homes,
      },
      {
        path: 'my',
        component: my,
      },
      {
        path: 'about',
        component: about,
      },
    ]
  },
  {
    path: '/home/dongtailuyou',
    component: dongtailuyou
  },
  {
    // 能传参的路由就叫动态路由
    path: '/home/dongtailuyou/:name',
    component: luyouxiangqing
  },
  {
    path:'/home/dongtaiquery',
    component:dongtaiquery
  },
  {
    path:'/home/dongtaiquery/queryxiangqing',
    component:queryxiangqing
  },
  {
    path: '/home/childrenluyou',
    component: childrenluyou,
    children: [
      // 默认路由也不用写全部路径
      {
        path: '',
        redirect: 'children1'
      },
      {
        path: 'children1',
        component: children1
      },
      {
        path: 'children2',
        component: children2,
        children:[
          {
            path:'',
            redirect:'children21'
          },
          {
            path:'children21',
            component:children21
          },
          {
            path:'children22',
            component:children22
          },
          {
            path:'children23',
            component:children23
          },
        ]
      },
      
    ]
  },
  {
    path:'/home/yibupromise',
    component:yibupromise
  },
  {
    path:'/home/axios',
    component:axios
  },
  {
    path:'/home/eventbus',
    component:eventbus
  },
  {
    path:'/home/vuex',
    component:vuex
  }

]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // 自定义routerlink活跃状态下的样式名
  linkActiveClass: 'active'
})

// 全局路由导航前置守卫实现页面标题的不同显示，路由跳转前调用
router.beforeEach((to,from,next)=>{
  // console.log('beforeEach')
  document.title=to.meta.title
  next()
})

// 后置守卫，路由跳转后调用,没有next()
router.afterEach((to,from)=>{
  // console.log('afterEach')
})


export default router
