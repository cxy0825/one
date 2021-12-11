module.exports = {
  pages: {
    home: {
      entry: "src/pages/home/home.js",
      template: "src/pages/home/home.html",
      filename:
        "index.html" /*filename定义为index.html，页面路由默认从该页面开始*/,
      title: "index",
    },
    denglu: {
      entry: "src/pages/denglu/denglu.js",
      template: "src/pages/denglu/denglu.html",
      filename: "denglu.html",
      title: "denglu",
    },
  },
};
