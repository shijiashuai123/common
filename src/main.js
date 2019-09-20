// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './common/scss/index.scss'
import './common/scss/_reset.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/iconfont/iconfont'
import './element-variables.scss'
import VueLazyLoad from 'vue-lazyload'
import md5 from 'js-md5'
import SvgIcon from 'base/SvgIcon' // svg组件

Vue.prototype.$md5 = md5
// import 'node_modules/slick-carousel/slick/slick.css'
Vue.component('svg-icon', SvgIcon)
Vue.use(ElementUI)
Vue.use(VueLazyLoad, {
  error: require('./assets/load/loading.gif'),
  loading: require('./assets/load/loading.gif')
})

/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  if (store.getters.token === 'admin') {
    if (!store.getters.getRouterFinish) {
      const roles = store.getters.token
      store.dispatch('GenerateRouters', {
        roles
      }).then(() => { // 生成可访问的路由表
        router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
        next({
          ...to
        }) // hack方法 确保addRoutes已完成
      })
    } else {
      next()
    }
  } else {
    next()
  }
})
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
