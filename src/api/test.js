import fetch from '../utils/fetch'

// 测试接口
export function test() {
  return fetch({
    url: `/test`,
    method: 'get'
  })
}
