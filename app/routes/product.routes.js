const { authJwt } = require("../middleware");
const controller = require("../controllers/product.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/product",
    [authJwt.verifyToken],
    controller.allProduct
  );

  app.post(
    "/api/product/input",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.inputProduct
  );

  app.post(
    "/api/product/edit",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.editProduct
  );
  app.post(
    "/api/product/hapus",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.hapusProduct
  );
};
