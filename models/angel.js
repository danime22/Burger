
var orm = require("../config/orm.js");

var angel = {
  selectAll: function(cb) {
    orm.selectAll("angels", function(res) {
      cb(res);
    });
  },

  insertOne: function(cols, vals, cb) {
    orm.insertOne("angels", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("angels", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("angels", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = angel;
