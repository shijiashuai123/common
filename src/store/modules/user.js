// import { loginByEmail, getInfo, logout } from 'api/login'
// import {
//   Message
// } from 'element-ui'
import Cookies from 'js-cookie'

const user = {
  state: {
    user: '',
    status: '',
    email: '',
    code: '',
    uid: undefined,
    auth_type: '',
    token: Cookies.get('pormission') || 'admin',
    name: '用户1',
    avatar: 'https://cn.vuejs.org/images/logo.png',
    introduction: '我是超级管理员',
    roles: [],
    setting: {
      articlePlatform: []
    }
  },

  mutations: {
    SET_AUTH_TYPE: (state, type) => {
      state.auth_type = type
    },
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_UID: (state, uid) => {
      state.uid = uid
    },
    SET_EMAIL: (state, email) => {
      state.email = email
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    },
    SET_STATUS: (state, status) => {
      state.satus = status
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    LOGIN_SUCCESS: () => {
      console.log('login success')
    },
    LOGOUT_USER: state => {
      state.user = ''
    }
  },

  actions: {
    // 邮箱登录
    LoginByEmail({
      commit
    }, userInfo) {
      // const email = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        // loginByEmail(email, userInfo.password).then(response => {
        //   if (response.data.ret === 0) {
        //     const data = response.data
        //     console.log(response.data)
        //     Cookies.set('platform', data.platform)

        //     commit('SET_TOKEN', data.platform)
        //     commit('SET_EMAIL', email)
        //     commit('SET_NAME', data.name)
        //     commit('SET_INTRODUCTION', data.introduction)
        //     commit('SET_AVATAR', data.avatar)
        //     resolve(response)
        //   } else {
        //     Message({
        //       message: response.data.msg,
        //       type: 'error',
        //       duration: 5 * 1000
        //     })
        //     // reject(error)
        //   }
        // }).catch(error => {
        //   reject(error)
        // })
      })
    },
    // 获取用户信息
    GetInfo({
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {
        // getInfo(state.token).then(response => {
        //   const data = response.data.lists[0]
        //   let arry = []
        //   arry.push(data.role)
        //   commit('SET_ROLES', arry)
        //   commit('SET_NAME', data.name)
        //   commit('SET_AVATAR', data.avatar)
        //   commit('SET_INTRODUCTION', data.introduction)
        //   resolve(response)
        // }).catch(error => {
        //   reject(error)
        // })
      })
    },
    // 登出
    LogOut({
      commit,
      state
    }) {
      console.log('logout')
      return new Promise((resolve, reject) => {
        // logout().then((res) => {
        //   console.log('logout', res)
        //   commit('SET_TOKEN', '')
        //   commit('SET_ROLES', [])
        //   Cookies.remove('platform')
        //   resolve()
        // }).catch(error => {
        //   reject(error)
        // })
      })
    },
    // 前端登出
    FedLogOut({
      commit
    }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        Cookies.remove('Admin-Token')
        resolve()
      })
    },
    // 动态修改权限
    ChangeRole({
      commit
    }, role) {
      return new Promise(resolve => {
        commit('SET_ROLES', [role])
        commit('SET_TOKEN', role)
        Cookies.set('Admin-Token', role)
        resolve()
      })
    }
  }
}
export default user
