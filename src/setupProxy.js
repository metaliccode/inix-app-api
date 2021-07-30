const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy("/getallproducts", {
      target: "http://192.168.95.78/basicrestci3/index.php/api",
      changeOrigin: true,
    })
  );

  app.use(
    proxy("/deleteproduct", {
      target: "http://192.168.95.78/basicrestci3/index.php/api",
      changeOrigin: true,
    })
  );
};
