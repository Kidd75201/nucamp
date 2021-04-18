var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/* POST home page. */
router.post("/", function (req, res, next) {
  res.end(
    `Will add the partner: ${req.body.name} with description: ${req.body.description}`
  );
});

module.exports = router;
