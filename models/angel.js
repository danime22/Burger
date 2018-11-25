
var orm = require("../config/orm.js");

var angel = {
  all: function(cb) {
    orm.all("angels", function(res) {
      cb(res);
    });
  },

  create: function(cols, vals, cb) {
    orm.create("angels", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("angels", objColVals, condition, function(res) {
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
