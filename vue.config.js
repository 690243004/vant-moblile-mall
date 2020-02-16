const path = require("path");

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
      config.devtool = "source-map";
    }
  },

  chainWebpack: config => {
    config.resolve.alias
      .set("@", path.join(__dirname, "src/"))
      .set("@c", path.join(__dirname, "src/components"))
      .set("@u", path.join(__dirname, "src/utils"))
      .set("@store", path.join(__dirname, "src/store"));
  }
};
