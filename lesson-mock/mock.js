const axios = require('axios')

const fetchData = () => axios.get('/').then(res => res.data)

const getNumber = () => 123


module.exports = {
  fetchData,
  getNumber
}