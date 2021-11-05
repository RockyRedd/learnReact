import axios from 'axios'

export default function request(config) {
  const instance = axios.create('http://localhost:5000/path1/students')
  instance.interceptors.response.use(
    res => {
      return res
    },
    err => {
      throw new Error(err)
    }
  )
  return instance(config)
}
