import {
  constantRouterMap,
  asyncRouterMap
} from '@/router'
/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.role) {
    return roles.some(role => route.meta.role.indexOf(role) >= 0)
  } else {
    return true
  }
}
/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(asyncRouterMap, roles) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(roles, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: [],
    getRouterFinish: false
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    },
    SET_GETROUTERFINISH: (state, type) => {
      state.getRouterFinish = type
    }
  },
  actions: {
    GenerateRouters({
      commit
    }, data) {
      return new Promise(resolve => {
        let accessedRouters
        if (data.roles === 'admin') {
          accessedRouters = asyncRouterMap
        } else {
          accessedRouters = filterAsyncRouter(asyncRouterMap, data.roles)
          accessedRouters = asyncRouterMap
        }
        commit('SET_ROUTERS', accessedRouters)
        commit('SET_GETROUTERFINISH', true)
        resolve()
      })
    }
  }
}

export default permission
