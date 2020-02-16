import request from "@u/request";
import { ResponseBody } from "../types";
import { AxiosPromise } from "yy-axios/dist/types/types";
import { EntityParams } from "@/store/modules/home";

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
