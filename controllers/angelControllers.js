var express = require("express");

var router = express.Router();

var angel = require("../models/angel.js");

router.get("/", function(req, res) {
  angel.all(function(data) {
    var hbsObject = {
      angels: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/angels", function(req, res) {
  console.log(req.body.name);
  angel.create([
    "angel_name", "met"
  ], [
    req.body.name, 0
  ], function(result) {

    res.json({ id: result.insertId });
  });
});

router.put("/api/angels/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition " + condition);
  console.log(req.body.met);
  angel.update({
    met: req.body.met
  }, condition, function(result) {
    if (result.changedRows == 0) {
   
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/angels/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  angel.delete(condition, function(result) {
    if (result.affectedRows == 0) {
     
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


module.exports = router;
