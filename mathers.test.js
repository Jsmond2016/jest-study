// 更多 匹配器学习
// 参考文档：https://www.jestjs.cn/docs/using-matchers
// 参考文档：https://www.jestjs.cn/docs/expect
test('toBe 匹配器 测试 10 和 10 是否匹配', () => {
  expect(10 + 10).toBe(20)
})

// toEqual
test('toEqual 测试对象内容是否相等', () => {
  const a = { one: 1 }
  expect(a).toEqual({ one: 1 })
})

test('toBeUndefined 匹配器测试', () => {
  const a = undefined;
  expect(a).toBeUndefined();
})
test('toBeNull 匹配器测试', () => {
  const a = null;
  expect(a).toBeNull();
})
test('toBeDefined 匹配器测试', () => {
  const a = 0;
  expect(a).toBeDefined();
})
test('toBeTruthy 匹配器测试', () => {
  const a = 1;
  expect(a).toBeTruthy();
})

test('toBeFalsy 匹配器测试', () => {
  const a = 0;
  expect(a).toBeFalsy();
})

test('not 匹配器测试', () => {
  const a = 0;
  expect(a).not.toBeTruthy();
})
test('toBeGreaterThan 匹配器测试', () => {
  const a = 10;
  expect(a).toBeGreaterThan(9);
})
test('toBeLessThan 匹配器测试', () => {
  const a = 8;
  expect(a).toBeLessThan(9);
})
test('toBeLessThanOrEqual 匹配器测试', () => {
  const a = 8;
  expect(a).toBeLessThanOrEqual(8);
  expect(a).toBeLessThanOrEqual(9);
})
test('toBeGreaterThanOrEqual 匹配器测试', () => {
  const a = 8;
  expect(a).toBeGreaterThanOrEqual(8);
  expect(a).toBeGreaterThanOrEqual(7);
})

test('toBeCloseTo 匹配器测试', () => {
  const f1 = 0.1
  const f2 = 0.2
  // 无法通过用例
  // expect(f1 + f2).toEqual(0.3)
  // 小数相加，使用 toBeCloseTo 代替 toEqual
  expect(f1 + f2).toBeCloseTo(0.3)
  // 无法通过
  // expect(f1 + f2).toBeCloseTo(0.4)
})

// String 测试
test('toMath 匹配器测试', () => {
  const str = 'http://www.hello-world.com'
  expect(str).toMatch('hello-world')
  expect(str).toMatch(/hello-world/)
})

//  Array, Set 测试
test('toContain 匹配器测试', () => {
  const arr = ['hello', 'world', 'javaScript']
  expect(arr).toContain('hello')
  // 无法铜鼓o
  // expect(arr).toContain('hello1')
})

// 异常
const throwNewErrorFn = () => {
  throw new Error('this is a new error')
}

test('toThrow 匹配器测试异常', () => {
  expect(throwNewErrorFn).toThrow('this is a new error')
  // expect(throwNewErrorFn).toThrow('this is assss new error')
})