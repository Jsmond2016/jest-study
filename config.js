const generateConfig = () => ({
  server: 'http://localhost',
  port: 8080,
  domain: 'localhost',
  time: '2022',
})
// 动态变化的内容
const generateConfig2 = () => ({
  server: 'http://localhost',
  port: 8080,
  domain: 'localhost',
  time: '2022',
  dynamicTime:  new Date()
})

module.exports = {
  generateConfig,
  generateConfig2
}