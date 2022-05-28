const jestConfig = require('../jest.config')
const { timer } = require('./timer')

jest.useFakeTimers()

// 场景，简单的定时器测试
test('timer测试', () => {
  const fn = jest.fn();
  timer(fn)
  // jest.useFakeTimers() 和 jest.runAllTimers(); 通常配对使用
  jest.runAllTimers();
  expect(fn).toHaveBeenCalledTimes(1)
})