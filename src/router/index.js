import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// layout
import Layout from 'components/layout/layout'

// login
// const Login = _import('login/index')
const Err404 = _import('error/404')
const wxDeviceList = _import('component/Hello')
// const vendorList = _import('wxdevice/vendor-list/vendor-list')
// const newConfigitem = _import('wxdevice/newConfigItem/index')
const wxuserList = _import('component/Hello')
const weChatConf = _import('component/Hello')
const deviceConfig = _import('component/Hello')

Vue.use(Router)
export const constantRouterMap = [
  // {path: '/login', component: Login, hidden: true},
  {
    path: '/',
    component: Layout,
    redirect: '/wxdevice/list',
    hidden: true,
    name: '首页'
  },
  {
    path: '/404',
    component: Err404,
    hidden: true
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})

export const asyncRouterMap = [{
    path: '/wxdevice',
    component: Layout,
    redirect: '/wxdevice/list',
    name: '菜单1',
    meta: {
      title: '菜单1',
      icon: 'zonghe',
      noCache: true
    },
    children: [{
      path: 'list',
      component: wxDeviceList,
      name: '菜单1-1',
      meta: {
        title: '菜单1-1',
        noCache: true
      }
    }]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]
