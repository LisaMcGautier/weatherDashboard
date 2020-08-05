$(document).ready(function () {

    var searchHistory = [];
  
    showHistory();

    if(searchHistory.length > 0) {

        getWeather(searchHistory[searchHistory.length - 1]);

    }

    function showHistory () {

        var savedCities = JSON.parse(localStorage.getItem("mostRecent"));

        if (savedCities != null) {

            $(".list-group").empty();

            // console.log(savedCities);

            searchHistory = savedCities;

            for (var i = 0; i < savedCities.length; i++) {

                // Make a new button
                var btn = $("<button>");
                // Button text to saved cities[i]
                btn.text(savedCities[i]);
                // Add classes to button
                btn.addClass("list-group-item list-group-item-action");
                // Append to list-group div
                $(".list-group").append(btn);

                // Add event listener
                btn.on("click", function () {

                    var thisCity = $(this).text();

                    getWeather(thisCity);

                });

            }

        }

    };

    function getWeather(city) {
        var city;
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=9f5f24e057e2a67d1f855db880415b67";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var date = moment(response.dt, "X").format("MM/DD/YYYY");

            var icon = $("<img>");

            var iconCode = response.weather[0].icon;
            var iconURL = "https://openweathermap.org/img/w/" + iconCode + ".png";

            icon.attr("src", iconURL);

            $(".city").html(response.name + " (" + date + ") " + "<img id='iconURL' src='" + iconURL + "'>");

            $(".temp").text("Temperature: " + (Math.round(((response.main.temp - 273.15) * 1.80) + 32)) + " °F");

            $(".humidity").text("Humidity: " + response.main.humidity + " %");

            $(".wind").text("Wind Speed: " + response.wind.speed + " MPH");

            // Separate API call for UV Index

            queryURL = "https://api.openweathermap.org/data/2.5/uvi?&APPID=9f5f24e057e2a67d1f855db880415b67&lat=" + response.coord.lat + "&lon=" + response.coord.lon;

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {

                $(".uvi").text("UV Index: " + response.value);

                if (response.value < 3) {

                    $(".uvi").addClass("bg-success text-white");

                } else if (response.value >= 3 && response.value < 8) {

                    $(".uvi").addClass("bg-warning");

                } else {

                    $(".uvi").addClass("bg-danger text-white");

                }

                getForecast(city);
                showHistory();

            });

        });

    };

    function getForecast(city) {
        var city;
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=9f5f24e057e2a67d1f855db880415b67";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            // Create a loop to create the 5 Day Forecast

            var date1 = moment(response.list[7].dt, "X").format("MM/DD/YYYY");

            $(".date1").text(date1);

            var icon1 = $("<img>");
            var iconCode1 = response.list[7].weather[0].icon;
            var iconURL1 = "https://openweathermap.org/img/w/" + iconCode1 + ".png";

            icon1.attr("src", iconURL1);
            icon1.attr("alt", "Weather Icon");

            $(".date1-icon").html(icon1);

            $(".date1-temp").text("Temp: " + (Math.round(((response.list[7].main.temp - 273.15) * 1.80) + 32)) + " °F");

            $(".date1-hum").text("Hum: " + response.list[7].main.humidity + " %");


            var date2 = moment(response.list[15].dt, "X").format("MM/DD/YYYY");

            $(".date2").text(date2);

            var icon2 = $("<img>");
            var iconCode2 = response.list[15].weather[0].icon;
            var iconURL2 = "https://openweathermap.org/img/w/" + iconCode2 + ".png";

            icon2.attr("src", iconURL2);
            icon2.attr("alt", "Weather Icon");

            $(".date2-icon").html(icon2);

            $(".date2-temp").text("Temp: " + (Math.round(((response.list[15].main.temp - 273.15) * 1.80) + 32)) + " °F");

            $(".date2-hum").text("Hum: " + response.list[15].main.humidity + " %");


            var date3 = moment(response.list[23].dt, "X").format("MM/DD/YYYY");

            $(".date3").text(date3);

            var icon3 = $("<img>");
            var iconCode3 = response.list[23].weather[0].icon;
            var iconURL3 = "https://openweathermap.org/img/w/" + iconCode3 + ".png";

            icon3.attr("src", iconURL3);
            icon3.attr("alt", "Weather Icon");

            $(".date3-icon").html(icon3);

            $(".date3-temp").text("Temp: " + (Math.round(((response.list[23].main.temp - 273.15) * 1.80) + 32)) + " °F");

            $(".date3-hum").text("Hum: " + response.list[23].main.humidity + " %");


            var date4 = moment(response.list[31].dt, "X").format("MM/DD/YYYY");

            $(".date4").text(date4);

            var icon4 = $("<img>");
            var iconCode4 = response.list[31].weather[0].icon;
            var iconURL4 = "https://openweathermap.org/img/w/" + iconCode4 + ".png";

            icon4.attr("src", iconURL4);
            icon4.attr("alt", "Weather Icon");

            $(".date4-icon").html(icon4);

            $(".date4-temp").text("Temp: " + (Math.round(((response.list[31].main.temp - 273.15) * 1.80) + 32)) + " °F");

            $(".date4-hum").text("Hum: " + response.list[31].main.humidity + " %");


            var date5 = moment(response.list[39].dt, "X").format("MM/DD/YYYY");

            $(".date5").text(date5);

            var icon5 = $("<img>");
            var iconCode5 = response.list[39].weather[0].icon;
            var iconURL5 = "https://openweathermap.org/img/w/" + iconCode5 + ".png";

            icon5.attr("src", iconURL5);
            icon5.attr("alt", "Weather Icon");

            $(".date5-icon").html(icon5);

            $(".date5-temp").text("Temp: " + (Math.round(((response.list[39].main.temp - 273.15) * 1.80) + 32)) + " °F");

            $(".date5-hum").text("Hum: " + response.list[39].main.humidity + " %");

        });

    };

    $(".searchBtn").on("click", function () {

        city = $("#citySearched").val();
        getWeather(city);

        if ($("#citySearched").val() == "") {

            alert("Please enter a city")

        };

        searchHistory.push(city);

        localStorage.setItem("mostRecent", JSON.stringify(searchHistory));

    });

})