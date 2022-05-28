const jestConfig = require('../jest.config')
const { timer } = require('./timer')

jest.useFakeTimers()

// 场景，简单的定时器测试
// test('timer测试', () => {
//   const fn = jest.fn();
//   timer(fn)
//   // jest.useFakeTimers() 和 jest.runAllTimers(); 通常配对使用
//   jest.runAllTimers();
//   expect(fn).toHaveBeenCalledTimes(1)
// })


test('timer测试', () => {
    const fn = jest.fn();
    timer(fn)
    // timer 函数内含有多个定时器
    // 使用 jest.runOnlyPendingTimers 只执行第一个 timer
    jest.runOnlyPendingTimers();
    expect(fn).toHaveBeenCalledTimes(1)
})

test('timer测试', () => {
    const fn = jest.fn();
    timer(fn)
    // timer 函数内含有多个定时器
    // 使用 jest.advanceTimersByTime 加速执行完成第一个 timer
    jest.advanceTimersByTime(3000);
    expect(fn).toHaveBeenCalledTimes(1)
})