var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var CSVJSON = require("csvjson-csv2json");
var core = require("./core");

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get("/covid-19/time-series/confirmed", function(req, res) {
  core
    .fetchConfirmed()
    .then(function(response) {
      res
        .status(200)
        .json(CSVJSON.csv2json(response.data, { parseNumbers: true }));
    })
    .catch(function(error) {
      res.status(500).send(error);
    });
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get("/covid-19/time-series/global-confirmed", function(req, res) {
  core
    .fetchGlobalConfirmed()
    .then(function(response) {
      res
        .status(200)
        .json(CSVJSON.csv2json(response.data, { parseNumbers: true }));
    })
    .catch(function(error) {
      res.status(500).send(error);
    });
});

router.get("/covid-19/time-series/deaths", function(req, res) {
  core
    .fetchDeaths()
    .then(function(response) {
      res
        .status(200)
        .json(CSVJSON.csv2json(response.data, { parseNumbers: true }));
    })
    .catch(function(error) {
      res.status(500).send(error);
    });
});

router.get("/covid-19/time-series/recovered", function(req, res) {
  core
    .fetchRecovered()
    .then(function(response) {
      res
        .status(200)
        .json(CSVJSON.csv2json(response.data, { parseNumbers: true }));
    })
    .catch(function(error) {
      res.status(500).send(error);
    });
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use("/api", router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log("Magic happens on port " + port);
