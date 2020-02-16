import request from "@u/request";
import { ResponseBody } from "../types";
import { AxiosPromise } from "yy-axios/dist/types/types";

export function getScrollImages(): AxiosPromise<ResponseBody> {
  return request({
    url: "/home/advertiments",
    method: "post"
  });
}
