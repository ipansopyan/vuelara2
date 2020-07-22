import axios from 'axios'

const  instance = axios.create({
  baseURL: 'http://192.168.43.184:8000/'
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance