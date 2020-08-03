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
            console.log(response.dt);
            console.log((response.dt) * 1000);

            // Add the current weather icon to Current City and date
            // console.log(response.weather[0].icon);


            $(".temp").text("Temperature: " + (Math.round(((response.main.temp - 273.15) * 1.80) + 32)) + " °F");

            $(".humidity").text("Humidity: " + response.main.humidity + "%");

            $(".wind").text("Wind Speed: " + response.wind.speed + " MPH");

            // Separate API call for UV Index

            queryURL = "http://api.openweathermap.org/data/2.5/uvi?&APPID=9f5f24e057e2a67d1f855db880415b67&lat=" + response.coord.lat + "&lon=" + response.coord.lon;

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {

                console.log(response);

                $(".uvi").text("UV Index: " + response.value);

                if (response.value < 3) {

                    $(".uvi").addClass("bg-success text-white");

                } else if (response.value >= 3 && response.value < 8) {

                    $(".uvi").addClass("bg-warning");

                } else {

                    $(".uvi").addClass("bg-danger text-white");

                }

                getForecast(city);

            });

        });

    };

    function getForecast(city) {
        var city;
        var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=9f5f24e057e2a67d1f855db880415b67";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            console.log(response);
            console.log(response.list[7]);
            console.log(response.list[7].dt_txt);
            console.log(response.list[7].weather[0].icon);
            // console.log(response.list[7].main.temp);
            console.log((Math.round(((response.list[7].main.temp - 273.15) * 1.80) + 32)) + " °F");
            console.log(response.list[7].main.humidity + "%");

            console.log(response.list[15]);
            console.log(response.list[15].dt_txt);
            console.log(response.list[15].weather[0].icon);
            // console.log(response.list[15].main.temp);
            console.log((Math.round(((response.list[15].main.temp - 273.15) * 1.80) + 32)) + " °F");
            console.log(response.list[15].main.humidity + "%");

            console.log(response.list[23]);
            console.log(response.list[23].dt_txt);
            console.log(response.list[23].weather[0].icon);
            // console.log(response.list[23].main.temp);
            console.log((Math.round(((response.list[23].main.temp - 273.15) * 1.80) + 32)) + " °F");
            console.log(response.list[23].main.humidity + "%");

            console.log(response.list[31]);
            console.log(response.list[31].dt_txt);
            console.log(response.list[31].weather[0].icon);
            // console.log(response.list[31].main.temp);
            console.log((Math.round(((response.list[31].main.temp - 273.15) * 1.80) + 32)) + " °F");
            console.log(response.list[31].main.humidity + "%");

            console.log(response.list[39]);            
            console.log(response.list[39].dt_txt);
            console.log(response.list[39].weather[0].icon);
            // console.log(response.list[39].main.temp);
            console.log((Math.round(((response.list[39].main.temp - 273.15) * 1.80) + 32)) + " °F");
            console.log(response.list[39].main.humidity + "%");

        });

    };

    $("button").on("click", function () {

        city = $("#citySearched").val();
        getWeather(city);
        // prevent default
        // function getForecast for 5-day Forecast
        // console.log(response.list[7]);
        // console.log(response.list[15]);
        // console.log(response.list[23]);
        // console.log(response.list[31]);
        // console.log(response.list[39]);
        // setItem local Storage


    });

})