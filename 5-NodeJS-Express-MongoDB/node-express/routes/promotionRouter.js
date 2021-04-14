const express = require("express");
const promotionRouter = express.Router();

promotionRouter
  // root directory URL
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the promotions to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the promotion: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /promotions");
  })
  .delete((req, res) => {
    res.end("Deleting all promotions");
  });

promotionRouter
  // root directory URL
  .route("/:promotionId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the promotions to you using ID");
  })
  .post((req, res) => {
    res.end(
      `Will add the promotion: ${req.body.name} with description: ${req.body.description} using ID`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end(
      `Will update the promotion: ${req.body.name} with description: ${req.body.description} using ID`
    );
  })
  .delete((req, res) => {
    res.end("Deleting all promotions using ID");
  });
module.exports = promotionRouter;
