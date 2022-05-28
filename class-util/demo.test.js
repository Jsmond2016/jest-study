jest.mock('./util')

const { Util } = require('./util')
const { demoFn } = require('./demo')



test('类 的测试---demoFn 测试', () => {
  demoFn()
  expect(Util).toHaveBeenCalled()

  // 上面使用了 jest.mock('./util') 表示 util 函数被mock 了
  // 等价于 Util = jest.fn() Util.a = jest.fn() Util.b = jest.fn()
  // 通过 Util.mock.instances[0] 拿到这个 函数对象，去验证执行内的方法
  expect(Util.mock.instances[0].a).toHaveBeenCalled()
  expect(Util.mock.instances[0].b).toHaveBeenCalled()
})