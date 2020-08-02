$(document).ready(function () {
    // getItem last city searched

    function getWeather(city) {
        var city;
        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=9f5f24e057e2a67d1f855db880415b67";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            console.log(response);

            $(".city").text(response.name);
            // Parse the date and add to Current City
            // Add the current weather icon to Current City and date

            // $(".temp").text("Temperature: " + response.main.temp + " ° K");
            // Convert to F
            // F = (K - 273.15) * 1.80 + 32
            $(".temp").text("Temperature: " + (Math.round(((response.main.temp - 273.15) * 1.80) + 32)) + " °F");

            $(".humidity").text("Humidity: " + response.main.humidity + "%");

            $(".wind").text("Wind Speed: " + response.wind.speed + " MPH");
            // Separate API call for UV Index 



        });

    };

    $("button").on("click", function () {

        city = $("#citySearched").val();
        getWeather(city);
        // prevent default
        // function getForecast for 5-day Forecast
        // setItem local Storage


    });
















})