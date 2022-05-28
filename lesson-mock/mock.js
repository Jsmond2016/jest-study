const axios = require('axios')

const fetchData = () => axios.get('/').then(res => res.data)


module.exports = {
  fetchData
}