import Mock from "mockjs2";
import { getBody, builder } from "../util";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const homeAdvertisments = (options: any) => {
  const body = getBody(options);
  console.log("mock: body", body);
  return builder(
    [
      "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/87576/25/1280/76531/5dbbf04bE594c2879/f526fca2b665f2ba.jpg!cr_1125x445_0_171!q70.jpg.dpg",
      "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/102808/18/11929/130276/5e3e736fEdde0961b/424b84e9be45a2e6.jpg!cr_1125x445_0_171!q70.jpg.dpg",
      "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/91831/4/1281/100174/5dbbf495Ed7ce296a/71ba5e7514140d67.jpg!cr_1125x445_0_171!q70.jpg.dpg",
      "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/100909/23/11527/150411/5e37c6dfEefa5d101/8edf888cb0248556.png!cr_1125x445_0_171!q70.jpg.dpg"
    ],
    "",
    200
  );
};

const entityList = (options: any) => {
  const body = getBody(options);
  return builder(
    {
      total: 100,
      list: new Array(body.size).fill({
        href:
          "https://res0.vmallres.com/pimages//wapFrontLocation/content/f7MxrMaE1S77xJTDoLcR.jpg",
        name: "荣耀9X PRO",
        price: "￥1999"
      }),
      page: body.page,
      size: body.size
    },
    "",
    200
  );
};

Mock.mock(/\/home\/advertiments/, "post", homeAdvertisments);
Mock.mock(/\/home\/entityList/, "post", entityList);
