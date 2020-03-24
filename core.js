var request = require("request");
var axios = require("axios");
var CSVJSON = require("csvjson-csv2json");
var baseUrl =
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/",
  fetchConfirmed = function() {
    return axios.get(baseUrl.concat("time_series_19-covid-Confirmed.csv"));
  };

fetchGlobalConfirmed = function() {
  return axios.get(baseUrl.concat("time_series_covid19_confirmed_global.csv"));
};

fetchDeaths = function() {
  return axios.get(baseUrl.concat("time_series_19-covid-Deaths.csv"));
};

fetchRecovered = function() {
  return axios.get(baseUrl.concat("time_series_19-covid-Recovered.csv"));
};

module.exports = {
  fetchConfirmed,
  fetchGlobalConfirmed,
  fetchDeaths,
  fetchRecovered
};
