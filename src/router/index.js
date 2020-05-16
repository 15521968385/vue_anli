import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

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
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/home/zoumadeng',
    component: zoumadeng
  },
  {
    path: '/home/jisuanqi',
    component: jisuanqi
  },
  {
    path: '/home/kaiguandeng',
    component: kaiguandeng
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

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
