let mysql = require("mysql2");
require("dotenv").config();

let connection = () => {
  const connection = mysql.createConnection({
    host: process.env.db_host,
    user: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db_name,
  });

  return connection;
};

let newconnction = connection();

module.exports = newconnction;
