import axios from 'axios';

// 添加一个请求拦截器
axios.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error);
});

// 添加一个响应拦截器
axios.interceptors.response.use(response => {
  if (response.data.code === 200) {
    return response.data;
  } else { 
    return Promise.reject({code: 500, message: '系统异常'});
  }
}, error => {
  return Promise.reject(error);
});

export default axios;