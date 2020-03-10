/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1583557011846_2574";

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.mysql = {
    client: {
      host: "112.74.35.49",
      port: "3306",
      user: "root",
      password: "",
      database: "react-blog"
    },
    app: true,
    agent: false
  };
  config.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: []
  };
  config.cors = {
    origin: ctx => {
      return ctx.request.header.origin;
    },
    credentials: true,
    allowMethods: "GET,HEAD,PUT,POST,DELETE,OPTIONS,PATCH,UPDATE"
  };
  return {
    ...config,
    ...userConfig
  };
};
