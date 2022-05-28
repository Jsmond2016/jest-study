# Jest 学习


## Jest 简单配置

## jest-cli 命令行工具了解

> https://jestjs.io/docs/cli

```bash
# 初始化 jest.config.js 文件
jest --init

# 只对 git 变动的文件进行测试
jest -o

# 进入监听模式
jest --watch

# 然后可以选择多种模式：f / o / t 模式
# 注意 o 模式需要结合 git 一起使用


# 使用此模式后，切到 t 模式然后自动开启 p 模式，只监听指定文件的变化进行测试
jest --watchAll 

```


## 异步代码测试方法

```js
// fetchData.test.js
import { fetchData, fetchData2, fetchData3 } from './fetchData'

test('fetchData 返回结果为 { success: true }', (done) => {
  fetchData((data) => {
    expect(data).toEqual({
      success: true
    })
    // 异步请求测试，需要使用 done
    done()
  })
})

test('fetchData2 返回结果为 404', () => {
  // 断言，下面必须执行一次 expect 语法，确保测试正确
  expect.assertions(1)
  // 使用 catch 要和上面的 assertions 结合使用
  return fetchData2().catch((e) => {
    expect(e.toString().indexOf('404') > -1).toBe(true)
  })
})

test('方法2-fetchData 返回结果为 { success: true }', () => {
  // 使用 resolves 处理 promise https://jestjs.io/docs/expect#resolves
  // 使用 toMatchObject 测试子集 https://jestjs.io/docs/expect#tomatchobjectobject
  return expect(fetchData3()).resolves.toMatchObject({
    data: {
      success: true
    }
  })
})



test('方法2-fetchData2 返回结果为 404', () => {
  return expect(fetchData2()).rejects.toThrow();
})

// 使用 await 方法 
test('方法2-fetchData 返回结果为 { success: true }', async () => {
  // 使用 resolves 处理 promise https://jestjs.io/docs/expect#resolves
  // 使用 toMatchObject 测试子集 https://jestjs.io/docs/expect#tomatchobjectobject
  await expect(fetchData3()).resolves.toMatchObject({
    data: {
      success: true
    }
  })
})

// 使用 await 方法
test('方法2-fetchData2 返回结果为 404', async () => {
  await expect(fetchData2()).rejects.toThrow();
})

// 使用 await 方法 
test('方法2-fetchData 返回结果为 { success: true }', async () => {
  // 使用 resolves 处理 promise https://jestjs.io/docs/expect#resolves
  // 使用 toMatchObject 测试子集 https://jestjs.io/docs/expect#tomatchobjectobject
  const { data } = await fetchData3()
  expect(data).toEqual({
    success: true
  })
})

// 使用 await 方法
test('方法2-fetchData2 返回结果为 404', async () => {
  // 为了保证 测试是否执行，先断言
  expect.assertions(1)
  try {
    await fetchData2();
  } catch (error) {
    expect(error.toString().indexOf('404') > -1).toBe(true);
  }

})
```

## Jest 核心的几个钩子

- beforeAll
- afterAll
- beforeEach
- afterEach


它们的执行顺序：

```js

beforeAll

// 每一个 test 用例前都会执行一遍
beforeEach

// 每一个 test 用例后都会执行一遍
afterEach

afterAll
```

其中，每一个 `describe` 里面都有自己的独立作用域，先执行外部，再执行内部的


使用 `test.only` 可以跳过其他的用例

```js
 describe('test-only', () => {
   beforeEach(() => {
     counter = new Counter();
   })
   test.only('test.only 测试', () => {
     counter.minusTwo()
     expect(counter.value).toBe(-2)
   })
 })
 ```


 ## 深入 Mock 学习

 笔记待完成