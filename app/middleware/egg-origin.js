"use strict";

module.exports = options => {
  const { whiteList } = options;
  if (!Array.isArray(whiteList)) {
    throw Error("跨域白名单必须为数组");
  }
  return async function setOrigin(ctx, next) {
    const { origin } = ctx.request.header;
    if (whiteList.indexOf("*") > -1) {
      ctx.response.set("Access-Control-Allow-Orign", origin);
    } else if (whiteList.indexOf(origin) > -1) {
      ctx.response.set("Access-Control-Allow-Orign", origin);
    }
    await next();
  };
};
