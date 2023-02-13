const newconnction = require("../../db/connection");

class News {
  addNews(req) {
    return new Promise((resolve, reject) => {
      newconnction.query("insert into news set ?", req.body, (err, result) => {
        if (err) {
          reject(err.message);
        } else {
          resolve(result);
        }
      });
    });
  }

  getNews(id) {
    return new Promise((resolve, reject) => {
      newconnction.query("select * from news where id=?", id, (err, result) => {
        if (err) {
          reject(err.message);
        } else {
          resolve(result);
        }
      });
    });
  }

  getAllNews() {
    return new Promise((resolve, reject) => {
      newconnction.query("select * from news", (err, result) => {
        if (err) {
          reject(err.message);
        } else {
          resolve(result);
        }
      });
    });
  }

  updateNews(req) {
    return new Promise((resolve, reject) => {
      newconnction.query(
        "update news set ? where id=?",
        [req.body, req.params.id],
        (err, result) => {
          if (err) {
            reject(err.message);
          } else {
            resolve(result);
          }
        }
      );
    });
  }

  deleteNews(id) {
    return new Promise((resolve, reject) => {
      newconnction.query("delete from news where id=?", id, (err, result) => {
        if (err) {
          reject(err.message);
        } else {
          resolve(result);
        }
      });
    });
  }
}

let newsoperations = new News();
module.exports = newsoperations;
