import Mock from "mockjs2";
import { Product } from "@/types";
import { builder } from "../util";

const product = {
  listPic: [
    "//m.360buyimg.com/mobilecms/s750x750_jfs/t1/105695/5/12887/203565/5e4fa646E1f084f85/5511614f934b4642.jpg!q80.dpg.webp",
    "//m.360buyimg.com/mobilecms/s843x843_jfs/t1/45124/2/5820/397999/5d36c0cdEda359655/61f65ac6aae3146b.jpg!q70.dpg.webp",
    "//m.360buyimg.com/mobilecms/s843x843_jfs/t1/75843/13/5247/178613/5d36c187E0274fdde/2f63d53828761609.jpg!q70.dpg.webp",
    "//m.360buyimg.com/mobilecms/s843x843_jfs/t1/72668/7/5189/167370/5d36c188Ebd32e858/95c466bf55123b4c.jpg!q70.dpg.webp",
    "//m.360buyimg.com/mobilecms/s843x843_jfs/t1/66727/37/5321/141539/5d36c187Eb3a2a631/936bfc7036257aca.jpg!q70.dpg.webp"
  ],
  name:
    "荣耀9X 麒麟810 4000mAh续航 4800万超清夜拍 6.59英寸升降全面屏 全网通6GB+64GB 魅海蓝",
  price: 1999,
  strategy: {
    weight: 0.206,
    color: ["魅海蓝", "幻夜黑", "魅焰红", "冰岛白"],
    ver: [
      "全网通 (4GB 64GB)",
      "全网通 (6GB 64GB)",
      "全网通 (6GB 128GB)",
      "全网通 (8GB 128GB)"
    ],
    extra: ["官方标配", "服务升级套装"]
  },
  sendPlace: "杭州",
  meta: {
    id: "100006947212",
    enterprise: "华为(HUAWEI)",
    type: "荣耀9X"
  },
  description: [
    "//img30.360buyimg.com/sku/jfs/t1/69575/32/11798/397448/5d91726bE68337be7/09ff27589b478944.jpg",
    "//img30.360buyimg.com/sku/jfs/t1/38339/24/12910/311964/5d415b40E2a2a96b6/8340eb0446ec0f34.jpg",
    "//img30.360buyimg.com/sku/jfs/t1/72849/16/11305/367218/5d8971b3E175cf448/e24421863325f542.jpg",
    "//img30.360buyimg.com/sku/jfs/t1/75285/30/11137/354914/5d8971b3E40baf559/c541eab70ff3983a.jpg",
    "//img30.360buyimg.com/sku/jfs/t1/59032/23/11469/676258/5d8971b4Ee8f9f68e/a0e8ee48ba5b68d0.jpg",
    "//img30.360buyimg.com/sku/jfs/t1/55735/38/11656/308604/5d8971b3E842c5c07/7a7b35d4325f6999.jpg"
  ]
};

const productData = () => {
  return builder<Product>(product);
};

Mock.mock(/\/detail\/product/, "post", productData);
