import Mock from "mockjs2";

import { builder } from "../util";
import { CartList } from "@/types";

const cartList = () => {
  return builder<CartList>(
    {
      list: [
        {
          name: "良品铺子 芝麻枣夹核桃 红枣类果干零食特产 新疆大枣 208g",
          state: 1,
          id: Date.now(),
          sid: 1,
          price: 29.9,
          num: 1,
          href:
            "https://img10.360buyimg.com/mobilecms/s234x234_jfs/t1/96514/13/11504/200349/5e362f30Ee96c508f/78d99f9aa44c1408.jpg!q70.dpg.webp"
        },
        {
          name:
            "戴尔（DELL）D2720DS 27英寸 2K高清 三面微边框 旋转升降 专业设计绘图 电脑显示器自营 (带HDMI线)",
          state: 1,
          id: Date.now(),
          sid: 1,
          price: 1999.9,
          num: 1,
          href:
            "https://img10.360buyimg.com/mobilecms/s234x234_jfs/t1/39346/2/11139/294352/5d25b42dE804bff96/c4db6d941f759625.jpg!q70.dpg.webp"
        },
        {
          name:
            " 圣马可乐器（ST.MARK'S） 圣马可吉他 初学者单板民谣吉他 CL120/126/160 CL126 原木色39寸",
          state: 1,
          id: Date.now(),
          sid: 2,
          price: 1580,
          num: 1,
          href:
            "http://img10.360buyimg.com/mobilecms/s234x234_jfs/t1/86108/21/10762/203436/5e1fe3ddE59bb3daf/a19890aac0f66fe6.jpg!q70.dpg.webp"
        }
      ],
      sidMap: {
        1: "京西自营",
        2: "圣马可旗舰店"
      }
    },
    "",
    200
  );
};

Mock.mock(/\/cart\/cartList/, "post", cartList);
