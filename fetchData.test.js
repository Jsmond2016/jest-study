import { fetchData, fetchData2 } from './fetchData'

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