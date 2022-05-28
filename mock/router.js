const express = require('express');
const router = express.Router();

const mockRouter = require('./mock-api')

console.info('------------ mock 请求如下 ----------------------')
for (let k in mockRouter) {
  const handler = mockRouter[k]
  const [method, pathStr] = k.split(' ').filter(Boolean).map(item => item.trim())
  router[method.toLocaleLowerCase()](pathStr, handler)
  console.info(k);
}
console.info('----------------------------------')

// router.get('/get-data', function (req, res) {
//   res.send({
//     success: true
//   });
// });

module.exports = router;