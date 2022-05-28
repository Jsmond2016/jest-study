const { Util } = require('./util')

const demoFn = (x, y) => {
  const utilInstance = new Util();
  utilInstance.a(x);
  utilInstance.b(y);
}

module.exports = { demoFn }