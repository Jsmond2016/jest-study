const { fetchData } = require('./mock')
const axios = require('axios')

jest.mock('axios')

test('mock-文件内-fetchData 测试', () => {
  axios.get.mockResolvedValue({
    data: '123'
  })
  return fetchData().then(data => {
    expect(data).toEqual('123')
  })
})