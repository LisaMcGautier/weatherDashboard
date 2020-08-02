$(document).ready(function () {

    function getWeather(city) {
        var city;
        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=9f5f24e057e2a67d1f855db880415b67";
  
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function (response) {
              
          console.log(response);
          console.log(response.name);
          console.log(response.main.temp);
          console.log(response.main.humidity);
          console.log(response.wind.speed);
          console.log(response);
          
        });
  
      };
  
      $("button").on("click", function() {
  
        city = $("#cityName").val();
        getWeather(city);
  
      });

    














})