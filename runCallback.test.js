const runCallback = require('./runCallback')

// 验证传入函数是否被调用

// 错误示范
// test('测试 runCallback -- 验证传入函数是否被调用', () => {
//   自定义一个函数，指定返回值，此方法不行
//   const fn = () => 'hello'
//   expect(runCallback(fn)).toBe('hello')

//   以及我们无法保证 runCallback 一定有返回值，为了测试去修改原函数返回？不应该这么做
// })


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