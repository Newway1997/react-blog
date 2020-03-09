"use strict";

const Controller = require("egg").Controller;

class MainController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = "main-controller";
  }
  async checkLogin() {
    const username = this.ctx.request.body.userName;
    const password = this.ctx.request.body.password;

    const sql = `SELECT userName FROM admin_user WHERE userName='${username}' AND password='${password}'
     `;
    const result = await this.app.mysql.query(sql);
    if (result.length > 0) {
      const openId = new Date().getTime();
      this.ctx.session.openId = { openId };
      this.ctx.body = {
        data: "登陆成功",
        openId
      };
    } else {
      this.ctx.body = {
        data: "登陆失败"
      };
    }
  }
  async getTypeInfo() {
    const result = await this.app.mysql.select("type");
    this.ctx.body = { data: result };
  }
  async addArticle() {
    const tmpArticle = this.ctx.request.body;
    const result = await this.app.mysql.insert("article", tmpArticle);
    const insertSuccess = result.affectedRows === 1;
    const insertId = result.insertId;
    this.ctx.body = {
      isSuccess: insertSuccess,
      insertId
    };
  }
  async updateArticle() {
    const tmpArticle = this.ctx.request.body;
    const result = await this.app.mysql.update("article", tmpArticle);
    const updateSuccess = result.affectedRows === 1;
    this.ctx.body = {
      isSuccess: updateSuccess
    };
  }

  async getArticleList() {
    const sql = `SELECT article.id as id,
    article.title as title,
    article.introduce as introduce,
    FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s') as addTime,
    article.view_count as view_count,
    type.typeName as typeName
    FROM article LEFT JOIN type ON article.type_id=type.id ORDER BY article.id DESC`;
    const result = await this.app.mysql.query(sql);
    this.ctx.body = { data: result };
  }
  async deleteArticle() {
    const id = this.ctx.params.id;
    const res = await this.app.mysql.delete("article", { id });
    this.ctx.body = {
      data: res
    };
  }
  async getArticleById() {
    const id = this.ctx.params.id;
    const sql = `SELECT article.id as id,
      article.title as title,
      article.article_content as article_content,
      article.introduce as introduce,
      FROM_UNIXTIME(article.addTime,'%Y-%m-%d') as addTime,
      article.view_count as view_count,
      type.typeName as typeName,
      type.id as typeId 
      FROM article LEFT JOIN type ON article.type_id=type.id WHERE article.id=${id}`;
    const result = await this.app.mysql.query(sql);
    this.ctx.body = { data: result };
  }
}

module.exports = MainController;
