var axios = require('axios');

var apiKey = 'e3e591b4e4b330060dffdbce6e1654a1';

module.exports = {
  getCurrentWeather: function(city) {
    var encodedURI = window.encodeURI('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&type=accurate&APPID=' + apiKey);

    return axios.get(encodedURI)
      .then(function(response) {
        console.log(response.data);
      })
  },

  getFiveDayForecast: function(city) {
    var url;

    if(location.protocol === 'http') {
      url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=';
    } else {
      url = 'https://api.openweathermap.org/data/2.5/forecast/daily?q=';
    }

    var encodedURI = window.encodeURI(url + city + '&type=accurate&APPID=' + apiKey + '&cnt=5');

    return axios.get(encodedURI)
      .then(function(response) {
        return response.data;
      })
  }  
}