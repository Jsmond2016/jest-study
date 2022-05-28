import axios from 'axios'

export const fetchData = (fn) => {
  axios.get('http://localhost:8000/api/get-data')
    .then((res) => {
      fn(res.data);
    })
}