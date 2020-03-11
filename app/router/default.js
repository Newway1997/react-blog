"use strict";

module.exports = app => {
  const { router, controller } = app;
  router.get("/default/index", controller.default.home.index);
  router.get("/default/getArticleList", controller.default.home.getArticleList);
  router.get(
    "/default/getArticleById/:id",
    controller.default.home.getArticleById
  );
  router.get("/default/getTypeInfo", controller.default.home.getTypeInfo);
  router.get(
    "/default/getArticleListByType/:id",
    controller.default.home.getArticleListByType
  );
  router.get("/default/addViewCount/:id", controller.default.home.addViewCount);
  router.get("/default/getAdverts", controller.default.home.getAdverts);
  router.get("/default/getUserInfo", controller.default.home.getUserInfo);
};
