// import { getDevClasses, getDevTypes, getCustomers } from 'api/device'
const device = {
  state: {
    devTypes: [],
    devClasses: [],
    customers: [],
    statuses: [{
      id: 0,
      status: '预分配'
    }, {
      id: 1,
      status: '未激活'
    }, {
      id: 2,
      status: '激活'
    }, {
      id: 3,
      status: '冻结'
    }, {
      id: 4,
      status: '失败'
    }]
  },
  mutations: {
    SET_DEVTYPES: (state, list) => {
      state.devTypes = list
    },
    SET_DEVCLASSES: (state, list) => {
      state.devClasses = list
    },
    SET_CUSTOMERS: (state, list) => {
      state.customers = list
    }
  },
  actions: {
    getSelect: ({
      commit
    }) => {
      // getDevClasses().then(res => {
      //   commit('SET_DEVCLASSES', res.data.lists)
      // })
      // getDevTypes().then(res => {
      //   // console.log(res)
      //   commit('SET_DEVTYPES', res.data.lists)
      // })
      // getCustomers().then(res => {
      //   commit('SET_CUSTOMERS', res.data.lists)
      // })
    }
  }
}

export default device
