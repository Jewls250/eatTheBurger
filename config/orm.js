const connection = require("./connection.js");

const orm = {
  selectAll(cb) {
    const queryString = `SELECT * FROM burgers`
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne(newValue, cb) {
    const queryString = `INSERT INTO burgers (burger_name) VALUES ('${newValue}')`
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  updateOne(cb) {
    const queryString = `SELECT * FROM burgers`
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
}

module.exports = orm;
