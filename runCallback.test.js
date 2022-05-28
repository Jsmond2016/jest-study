const { runCallback, getData } = require('./runCallback')
const axios = require('axios');

// 验证传入函数是否被调用

// 错误示范
// test('测试 runCallback -- 验证传入函数是否被调用', () => {
//   自定义一个函数，指定返回值，此方法不行
//   const fn = () => 'hello'
//   expect(runCallback(fn)).toBe('hello')

//   以及我们无法保证 runCallback 一定有返回值，为了测试去修改原函数返回？不应该这么做
// })

jest.mock('axios')

// 拓展: mockImplementation 作用和 jest.fn(() => {}) 功能相似
//     const fn = jest.fn()
//     fn.mockImplementation(() => {})



test('测试 runCallback -- 验证传入函数是否被调用', () => {
  const fn = jest.fn() // 使用 mock fn 的方式，捕获函数的调用
  runCallback(fn)
  expect(fn).toBeCalled();
})

test('测试 runCallback -- 验证传入函数被调用多次', () => {
  const fn = jest.fn() // 使用 mock fn 的方式，捕获函数的调用
  runCallback(fn)
  runCallback(fn)
  expect(fn).toHaveBeenCalledTimes(2);
})

test('测试 runCallback -- 验证传入函数的返回结果', () => {
  // 使用 mock fn 的方式，捕获函数的调用
  const fn = jest.fn()
  // 设置 mock 的返回值 https://jestjs.io/docs/mock-function-api#mockfnmockreturnvaluevalue 
  fn.mockReturnValue('mock value')
  runCallback(fn)
  expect(fn.mock.results[0].value).toBe('mock value');
})



test('测试 axios mock', async () => {
  // 模拟接口返回，后端应该保证数据返回，前端仅 mock 即可
  const resp = { data: 'hello' }
  axios.get.mockResolvedValue(resp);
  const { data } = await getData();
  expect(data).toBe('hello')
})

test('测试 axios mock 多次返回结果', async () => {
  // 模拟接口返回，后端应该保证数据返回，前端仅 mock 即可
  const res1 = { data: 'hello' }
  const res2 = { data: 'world' }
  axios.get.mockResolvedValueOnce(res1);
  axios.get.mockResolvedValueOnce(res2);
  const { data } = await getData();
  expect(data).toBe('hello')
  const { data: data2 } = await getData();
  expect(data2).toBe('world')
})