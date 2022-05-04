const express = require("express");
const router = express.Router();
const timelogs = require("./timelogs");

router
  .get("/timelogs", timelogs.getTimelogs)
  .post("/timelogs", timelogs.newTimelogs)

module.exports = router;
