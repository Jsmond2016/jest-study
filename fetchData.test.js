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
  expect.assertions(1)
  try {
    await fetchData2();
  } catch (error) {
    expect(error.toString().indexOf('404') > -1).toBe(true);
  }

})