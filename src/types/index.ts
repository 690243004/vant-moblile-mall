export interface ResponseBody<T = any> {
  msg: string;
  timestamp: number;
  data: T;
  code: number;
}

export interface Cart {
  id: number; // 商品id
  sid: number; // 第三方id
  href: string; // 商品图片地址
  price: number; // 价格
  name: string; // 名称
  state: number; // 商品状态 1 有货 2 无货 3 下架
  num: number; // 商品数量
}

// 购物车数据都是一次性获取的
export interface CartList {
  list: Cart[]; // 购物车数据
  sidMap: {
    // 第三方id对应的tag集合
    [propsName: number]: string;
  };
}

// 首页卡片类型
export interface Entity {
  href: string;
  name: string;
  price: number;
}
// 首页卡片接口响应类型
export interface EntityParams {
  total: number;
  list: Entity[];
  page: number;
  size: number;
}

// 商品详情响应类型
export interface Product {
  listPic: string[];
  name: string;
  price: number;
  strategy: any;
  meta: any;
  description: string[];
  sendPlace: string;
}
