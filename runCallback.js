const axios = require('axios')

const runCallback = (fn) => {
  fn();
}

const getData = () => {
  return axios.get('http://localhost:8000/api/mock-data')
}



module.exports = {
  getData,
  runCallback
}