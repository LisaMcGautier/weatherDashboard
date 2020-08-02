$(document).ready(function () {

    function getWeather(city) {
        var city;
        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=9f5f24e057e2a67d1f855db880415b67";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            console.log(response);

            //   console.log(response.name);
            //   var cityName = $("<h1>");
            //   cityName.text(response.name);
            //   $(".city").append(cityName);

            $(".city").text(response.name);

            //   console.log(response.main.temp);
            //   var temp = $("<p>");
            //   temp.text("Temperature: " + response.main.temp);
            //   $(".temp").append(temp);

            $(".temp").text("Temperature: " + response.main.temp + " ° K");

            //   console.log(response.main.humidity);
            //   var humidity = $("<p>");
            //   temp.text("Humidity: " + response.main.humidity);
            //   $(".humidity").append(humidity);

            $(".humidity").text("Humidity: " + response.main.humidity + "%");

            //   console.log(response.wind.speed);
            //   var wind = $("<p>");
            //   wind.text("Wind Speed: " + response.wind.speed);
            //   $(".wind").append(wind);

            $(".wind").text("Wind Speed: " + response.wind.speed + " MPH");

        });

    };

    $("button").on("click", function () {

        city = $("#citySearched").val();
        getWeather(city);

    });
















})