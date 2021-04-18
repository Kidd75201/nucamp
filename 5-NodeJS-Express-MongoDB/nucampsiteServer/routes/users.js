var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

/* POST home page. */
router.post(function (req, res) {
  res.end(
    `Will add the partner: ${req.body.name} with description: ${req.body.description}`
  );
});

module.exports = router;
