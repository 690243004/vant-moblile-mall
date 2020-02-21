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

export interface Entity {
  href: string;
  name: string;
  price: number;
}

export interface EntityParams {
  total: number;
  list: Entity[];
  page: number;
  size: number;
}
