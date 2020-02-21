import request from "@u/request";
import { ResponseBody, EntityParams } from "../types";
import { AxiosPromise } from "yy-axios/dist/types/types";

export function getScrollImages(): AxiosPromise<ResponseBody<string[]>> {
  return request({
    url: "/home/advertiments",
    method: "post"
  });
}

export function getEntityList(
  data?: any
): AxiosPromise<ResponseBody<EntityParams>> {
  return request({
    url: "/home/entityList",
    method: "post",
    data
  });
}
