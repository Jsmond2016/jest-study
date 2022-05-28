const Counter = require('./Counter')

let counter = null

beforeAll(() => {
  console.log('beforeAll')
})
afterAll(() => {
  console.log('afterAll')
})

beforeEach(() => {
  counter = new Counter()
  console.log('beforeEach')
})

afterEach(() => {
  console.log('afterEach')
})


// 分组
describe('测试 Counter 相加的方法', () => {
  test('Counter -- add 方法', () => {
    console.log('test---add')
    counter.add()
    expect(counter.value).toBe(1)
  })
  test('Counter -- addTwo 方法', () => {
    console.log('test---add')
    counter.addTwo()
    expect(counter.value).toBe(2)
  })
})

describe('测试 Counter 相减的方法', () => {
  test('Counter -- minus 方法', () => {
    console.log('test---minus')
    counter.minus()
    expect(counter.value).toBe(-1)
  })
  test('Counter -- minusTwo 方法', () => {
    console.log('test---minus')
    counter.minusTwo()
    expect(counter.value).toBe(-2)
  })
})

// describe('test-only', () => {
//   beforeEach(() => {
//     counter = new Counter();
//   })
//   test.only('test.only 测试', () => {
//     counter.minusTwo()
//     expect(counter.value).toBe(-2)
//   })
// })