/**
 * 
 * @param {*} success 数据库里连接成功的回调
 * @param {*} error 数据库连接失败的回调
 */
module.exports = function (success, error) {
    // 判断 error 是否有传值
    if (typeof error !== 'function') {
        error = () => {
            console.log('连接失败～～～');
        }
    }


  const mongoose = require("mongoose");
  const { DBHOST, DBPORT, DBNAME } = require('../config/config')
  const { connect, connection } = mongoose;

  const url = `mongodb://root:123456@${DBHOST}:${DBPORT}/${DBNAME}`;

  // 链接数据库
  connect(url);

  connection.once("open", () => {
    success()
  });

  connection.on("error", () => {
    error()
  });

  connection.on("close", () => {
    console.log("链接关闭");
  });
};
