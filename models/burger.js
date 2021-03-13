const orm = require("../config/orm.js");


const burger = {
  all(cb) {
    orm.selectAll((res) => cb(res));
  },
  // The variables cols and vals are arrays.
  create(newVal, cb) {
    orm.insertOne(newVal, (res) => cb(res));
  },
  update(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, (res) => cb(res));
  }
};

module.exports = burger;