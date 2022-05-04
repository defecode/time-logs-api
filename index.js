const express = require("express");
const app = express();
var cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const bodyParser = require("body-parser");
const routes = require("./routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
  req.header.uuid = uuidv4();
  console.log(
    new Date() + "  " + req.header.uuid + "-" + JSON.stringify(req.body)
  );
  next();
});
app.use(routes);

// === BOILERPLATE ===
// Catch and send error messages
app.use((err, req, res, next) => {
  if (err) {
    console.error(err.message);
    if (!err.statusCode) {
      err.statusCode = 400;
    } // Set 500 server code error if statuscode not set
    let response = {
      code: err.statusCode,
      message: err.message,
    };
    console.log(
      new Date() + "  " + req.header.uuid + "-" + JSON.stringify(response)
    );
    return res.status(err.statusCode).send(response);
  }

  next();
});

// 404
app.use(function (req, res) {
  res.status(404).json({
    status: "Page does not exist",
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
