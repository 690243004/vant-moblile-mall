export interface ResponseBody<T = any> {
  msg: string;
  timestamp: number;
  data: T;
  code: number;
}
