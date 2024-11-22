const request = require("request-promise");
const API_KEY = "b079acddf05a5d2fce009ab9d9af6d23";

class Weather {
  static retrieveByCity(city, callback) {
    request({
      uri: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
      json: true,
    })
      .then(function (res) {
        callback(res);
      })
      .catch(function (err) {
        console.log(err);
        callback({ error: "Could not reach OpenWeatherMap API." });
      });
  }
}

module.exports = Weather;
