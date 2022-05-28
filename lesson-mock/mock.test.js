
// 模拟 mock 模块文件，要求 __mocks__ 目录下需要同名文件和内容
jest.mock('./mock')
// 同理，使用 jest.unmock('./mock') 取消模拟
const { fetchData } = require('./mock')


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