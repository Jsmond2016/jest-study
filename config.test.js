const { generateConfig, generateConfig2 } = require('./config')

//使用命令 jest --updateSnapshot 更新快照  https://jestjs.io/docs/cli#--updatesnapshot
// 使用场景：ui 组件

test('测试配置文件的快照-generateConfig', () => {
  expect(generateConfig()).toMatchSnapshot();
})
test('测试配置文件的快照-generateConfig', () => {
  expect(generateConfig2()).toMatchSnapshot({
    dynamicTime: expect.any(Date)
  });
})

// toMatchInlineSnapshot 将快照放在代码中
test('测试配置文件的快照-toMatchInlineSnapshot-generateConfig', () => {
  expect(generateConfig2()).toMatchInlineSnapshot({
  dynamicTime: expect.any(Date) }, `
Object {
  "domain": "localhost",
  "dynamicTime": Any<Date>,
  "port": 8080,
  "server": "http://localhost",
  "time": "2022",
}
`);
})