import axios from 'axios';

import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);

const http1 = axios.create({
	// 相对于默认值,仍可传参
	baseURL:"https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=3318806",
	// 超时
	timeout:3000
})
// 请求拦截器
http1.interceptors.request.use(
    config => {
       Toast.loading({
         message: '加载中...',
         forbidClick: true,
       });
        return config;
    },
    err => {
        return Promise.reject(err);
});
// 响应拦截器
http1.interceptors.response.use(
    response => {
		Toast.clear({
			clearAll:true
		})
        return response;
    },
    error => {

        // return Promise.reject(error.response.data)
         // 返回接口返回的错误信息
});

export default http1
