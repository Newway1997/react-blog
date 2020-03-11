"use strict";

module.exports = app => {
  const { router, controller } = app;
  const adminauth = app.middleware.adminauth();
  router.get("/admin/index", controller.admin.main.index);
  router.post("/admin/checkLogin", controller.admin.main.checkLogin);
  router.get(
    "/admin/getTypeInfo",
    adminauth,
    controller.admin.main.getTypeInfo
  );
  router.post("/admin/addArticle", adminauth, controller.admin.main.addArticle);
  router.post(
    "/admin/updateArticle",
    adminauth,
    controller.admin.main.updateArticle
  );
  router.get(
    "/admin/getArticleList",
    adminauth,
    controller.admin.main.getArticleList
  );
  router.get(
    "/admin/deleteArticle/:id",
    adminauth,
    controller.admin.main.deleteArticle
  );
  router.get(
    "/admin/getArticleById/:id",
    adminauth,
    controller.admin.main.getArticleById
  );
  router.get(
    "/admin/getUserInfo",
    adminauth,
    controller.admin.main.getUserInfo
  );
  router.post("/admin/addAccount", adminauth, controller.admin.main.addAccount);
  router.post(
    "/admin/updateAccount",
    adminauth,
    controller.admin.main.updateAccount
  );
  router.delete(
    "/admin/deleteAccount/:id",
    adminauth,
    controller.admin.main.deleteAccount
  );
  router.post("/admin/upload", controller.admin.upload.index);
  router.post("/admin/updateUser", controller.admin.main.updateUser);
  router.get("/admin/getAdverts", adminauth, controller.admin.main.getAdverts);
  router.post("/admin/addAdvert", adminauth, controller.admin.main.addAdvert);
  router.delete(
    "/admin/deleteAdvert/:id",
    adminauth,
    controller.admin.main.deleteAdvert
  );
};
