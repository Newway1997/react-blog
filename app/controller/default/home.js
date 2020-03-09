"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;

    ctx.body = "home-controller";
  }
  async getArticleList() {
    const sql = `SELECT article.id as id,
    article.title as title,
    article.introduce as introduce,
    FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s') as addTime,
    article.view_count as view_count,
    type.typeName as typeName
    FROM article LEFT JOIN type ON article.type_id=type.id`;
    const result = await this.app.mysql.query(sql);
    this.ctx.body = { data: result };
  }
  async getArticleById() {
    const id = this.ctx.params.id;
    if (id) {
      const sql = `SELECT article.id as id,
      article.title as title,
      article.introduce as introduce,
      article.article_content as article_content,
      FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s') as addTime,
      article.view_count as view_count,
      type.typeName as typeName
      FROM article LEFT JOIN type ON article.type_id=type.id WHERE article.id=${id}`;
      const result = await this.app.mysql.query(sql);
      this.ctx.body = { data: result };
    } else {
      this.ctx.body = {
        data: null,
      };
    }
  }
  async getTypeInfo() {
    const result = await this.app.mysql.select("type");
    this.ctx.body = { data: result };
  }
  async getArticleListByType() {
    const typeId = this.ctx.params.id;
    const sql = `SELECT article.id as id,
    article.title as title,
    article.introduce as introduce,
    FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s') as addTime,
    article.view_count as view_count,
    type.typeName as typeName
    FROM article LEFT JOIN type ON article.type_id=type.id WHERE type.id=${typeId}`;
    const result = await this.app.mysql.query(sql);
    this.ctx.body = { data: result };
  }
}

module.exports = HomeController;
