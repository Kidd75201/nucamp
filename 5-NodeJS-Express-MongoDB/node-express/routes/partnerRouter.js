const express = require("express");
const partnerRouter = express.Router();

partnerRouter
  // root directory URL
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the partners to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the partner: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end(
      `Will add the partner: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .delete((req, res) => {
    res.end("Deleting all partners");
  });

partnerRouter
  // root directory URL
  .route("/:partnerId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the partners to you using ID");
  })
  .post((req, res) => {
    res.end(
      `Will add the partner: ${req.body.name} with description: ${req.body.description} using ID`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end(
      `Will update the partner: ${req.body.name} with description: ${req.body.description} using ID`
    );
  })
  .delete((req, res) => {
    res.end("Deleting all partners using ID");
  });
module.exports = partnerRouter;
