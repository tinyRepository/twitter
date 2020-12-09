const path = require("path");

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/styles/global.scss";
          `
      }
    }
  },

  chainWebpack: config => {
    config.resolve.alias
      .set("@", path.resolve(__dirname, "src"))
      .set("Uikit", path.resolve(__dirname, "src/components/uikit"))
      .set("Components", path.resolve(__dirname, "src/components"))
      .set("Icons", path.resolve(__dirname, "src/components/Icons"))
      .set("Pages", path.resolve(__dirname, "src/components/pages"))
      .set("Layout", path.resolve(__dirname, "src/components/layout"))
      .set("Common", path.resolve(__dirname, "src/components/common"));
  }
};
