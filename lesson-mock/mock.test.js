
// 模拟 mock 模块文件，要求 __mocks__ 目录下需要同名文件和内容
jest.mock('./mock')
// 同理，使用 jest.unmock('./mock') 取消模拟
const { fetchData } = require('./mock')
// 因为当前处于 模块 mock 模式，但是 __mocks__/mock.js 没有写假的 getNumber
// 我们想从真实的 ./mock.js 中引入 getNumber
// 需要使用到 jest.requreActual
const { getNumber } = jest.requreActual('./mock')


// const axios = require('axios')

// jest.mock('axios')

// test('mock-文件内-fetchData 测试', () => {
//   axios.get.mockResolvedValue({
//     data: '123'
//   })
//   return fetchData().then(data => {
//     expect(data).toEqual('123')
//   })
// })

test('mock-文件内-fetchData 测试', () => {
  return fetchData().then(data => {
    expect(data).toEqual('123')
  })
})


test('mock-文件内-fetchData 测试', () => {
  expect(getNumber()).toBe(123)
})