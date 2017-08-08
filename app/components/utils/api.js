var axios = require('axios');

var apiKey = 'e3e591b4e4b330060dffdbce6e1654a1';

module.exports = {
  currentWeather: function(city) {
    var encodedURI = window.encodedURI('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&type=accurate&APPID=' + apiKey);

    return axios.get(encodedURI)
      .then(function(response) {
        return response.data;
      })
  }
}