let timelogs = (module.exports = {});
let timelogsDb = require("../repository");

timelogs.newTimelogs = (req, res, next) => {
    timelogsDb.newTimelogs(req.body).then((data) => {
    res.send({ status: "ok"});
  });
};

timelogs.getTimelogs = (req, res, next) => {
  timelogsDb.getTimelogs().then((data) => {
    res.send(data);
  });
};