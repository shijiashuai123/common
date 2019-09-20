const getters = {
  sidebar: state => state.app.sidebar,
  visitedViews: state => state.app.visitedViews,
  devTypes: state => state.device.devTypes,
  devClasses: state => state.device.devClasses,
  statuses: state => state.device.statuses,
  customers: state => state.device.customers,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  uid: state => state.user.uid,
  email: state => state.user.email,
  introduction: state => state.introduction,
  auth_type: state => state.user.auth_type,
  status: state => state.user.status,
  roles: state => state.user.roles,
  setting: state => state.user.setting,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  getRouterFinish: state => state.permission.getRouterFinish
}

export default getters
