import { isIE } from "@u/util";
if (process.env.NODE_ENV !== "production") {
  if (isIE()) {
    console.error(
      "ERROR: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV."
    );
  }
  require("mockjs2");
  require("./servies/home");
  console.log("mock is mount");
}
