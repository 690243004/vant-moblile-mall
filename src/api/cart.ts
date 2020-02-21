import request from "@u/request";

import { ResponseBody, CartList } from "../types";
import { AxiosPromise } from "yy-axios/dist/types/types";

export function getCartList(data?: any): AxiosPromise<ResponseBody<CartList>> {
  return request({
    url: "/cart/cartList",
    method: "post",
    data
  });
}
