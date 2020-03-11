"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;

    ctx.body = "home-controller";
  }
  async getArticleList() {
    const size = this.ctx.query.size || 10;
    const start = (this.ctx.query.start || 0) * size;

    const sql = `SELECT article.id as id,
    article.title as title,
    article.introduce as introduce,
    FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s') as addTime,
    article.view_count as view_count,
    type.typeName as typeName,
    article.orderIndex as orderIndex
    FROM article LEFT JOIN type ON article.type_id=type.id ORDER BY article.orderIndex,article.id  DESC LIMIT ${start},${size};`;
    const result = await this.app.mysql.query(sql);
    const count = await this.app.mysql.query(
      "SELECT count(*) as total FROM article;"
    );
    this.ctx.body = { data: result, total: count[0].total };
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
      type.typeName as typeName,
      type.id as typeId
      FROM article LEFT JOIN type ON article.type_id=type.id WHERE article.id=${id}`;

      const result = await this.app.mysql.query(sql);
      this.ctx.body = { data: result[0] };
    } else {
      this.ctx.body = {
        data: null
      };
    }
  }
  async getTypeInfo() {
    const result = await this.app.mysql.select("type");
    this.ctx.body = { data: result };
  }
  async getArticleListByType() {
    const size = this.ctx.query.size || 10;
    const start = (this.ctx.query.start || 0) * size;

    const typeId = this.ctx.params.id;
    const sql = `SELECT article.id as id,
    article.title as title,
    article.introduce as introduce,
    FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s') as addTime,
    article.view_count as view_count,
    type.typeName as typeName,
    article.orderIndex as orderIndex
    FROM article LEFT JOIN type ON article.type_id=type.id WHERE type.id=${typeId} ORDER BY article.orderIndex,article.id  DESC LIMIT ${start},${size};`;
    const result = await this.app.mysql.query(sql);
    const count = await this.app.mysql.query(
      `SELECT count(*) as total FROM article LEFT JOIN type ON article.type_id=type.id  WHERE type.id=${typeId};`
    );
    this.ctx.body = { data: result, total: count[0].total };
  }
  async addViewCount() {
    const id = this.ctx.params.id;
    const sql = `UPDATE article SET view_count=view_count+1 WHERE id=${id}`;
    const result = await this.app.mysql.query(sql);
    if (result.affectedRows > 0) {
      this.ctx.body = { success: true };
    } else {
      this.ctx.body = { success: false };
    }
  }
  async getAdverts() {
    const sql = `SELECT * FROM advert`;
    const result = await this.app.mysql.query(sql);
    this.ctx.body = { data: result };
  }
  async getUserInfo() {
    const sql = `SELECT id,userName,avatar,introduction FROM admin_user`;
    const result = await this.app.mysql.query(sql);
    const account = await this.app.mysql.query(
      "SELECT id,account,icon,description FROM account"
    );
    const user = result[0];
    user.account = account;
    this.ctx.body = { data: user };
  }
}

module.exports = HomeController;
