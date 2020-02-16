import axios from "yy-axios";
import { AxiosResponse } from "yy-axios/dist/types/types";
const instance = axios.create({
  baseURL: "/",
  timeout: 5000,
  params: {
    // ts: Date.now()
  }
});

/* 请求拦截:
   - 为请求首部添加access-token
   -
*/

instance.interceptors.request.use(
  function(config: any) {
    // 发送请求前做什么事
    return config;
  },
  function(error: any) {
    // 请求错误时做些事
    return Promise.reject(error);
  }
);

/**
 * 响应拦截
 *
 */

instance.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default instance;
