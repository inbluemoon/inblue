import * as axios from 'axios'

// globalConfig
import globalConfig from "~/config";

// github api base url
const GITHUB_API = `https://api.github.com/repos/${globalConfig.github.username}/${globalConfig.github.repository}`
console.log(GITHUB_API)

// github token
const GITHUB_TOKEN = globalConfig.github.token.join('')

let service = axios.create({
  baseURL: GITHUB_API,
  timeout: 10000
})

// 请求拦截 可在请求头中加入token等
service.interceptors.request.use(config => {
  config.headers = {
    Authorization: `token ${GITHUB_TOKEN}`
  }
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截 对响应消息作初步的处理
service.interceptors.response.use(resp => {
  if (resp.status === 200) {
    return resp.data
  }
  return resp
}, error => {
  console.log(error)
})

export default service
