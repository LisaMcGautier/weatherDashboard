$(document).ready(function () {
    // getItem last city searched

    // var key="Ex: name, id, etc"; //The key can be any word you want
    // var valueFromLocalStorage=localStorage.getItem(key);

    function getWeather(city) {
        var city;
        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=9f5f24e057e2a67d1f855db880415b67";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            console.log(response);

            // $(".city").text(response.name);
            // Parse the date and add to Current City
            console.log(response.dt);
            // console.log((response.dt) * 1000);

            // Print the day date in MM/DD/YYYY format
            // console.log(moment(response.daily[i].dt,"X").format("MM/DD/YYYY"))
            console.log(moment(response.dt,"X").format("MM/DD/YYYY"));
            var date = moment(response.dt,"X").format("MM/DD/YYYY");
            console.log(date);

            $(".city").text(response.name + " (" + date + ") ");

            // Add the current weather icon to Current City and date
            // $(".city").text(response.name + " (" + date + ") " + icon);
            // console.log(response.weather[0].icon);


            $(".temp").text("Temperature: " + (Math.round(((response.main.temp - 273.15) * 1.80) + 32)) + " °F");

            $(".humidity").text("Humidity: " + response.main.humidity + " %");

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


            // console.log(response.list[7]);
            // console.log(response.list[7].dt_txt);
            // console.log(response.list[7].weather[0].icon);
            // console.log((Math.round(((response.list[7].main.temp - 273.15) * 1.80) + 32)) + " °F");
            // console.log(response.list[7].main.humidity + "%");

            // $(".date1").text(response.list[7].dt_txt);
            console.log(response.list[7].dt);
            var date1 = moment(response.list[7].dt,"X").format("MM/DD/YYYY");
            console.log(date1);
            $(".date1").text(date1);

            $(".date1-icon").text(response.list[7].weather[0].icon);

            $(".date1-temp").text("Temp: " + (Math.round(((response.list[7].main.temp - 273.15) * 1.80) + 32)) + " °F");

            $(".date1-hum").text("Hum: " + response.list[7].main.humidity + " %");


            // console.log(response.list[15]);
            // console.log(response.list[15].dt_txt);
            // console.log(response.list[15].weather[0].icon);
            // console.log((Math.round(((response.list[15].main.temp - 273.15) * 1.80) + 32)) + " °F");
            // console.log(response.list[15].main.humidity + "%");

            // $(".date2").text(response.list[15].dt_txt);
            console.log(response.list[15].dt);
            var date2 = moment(response.list[15].dt,"X").format("MM/DD/YYYY");
            console.log(date2);
            $(".date2").text(date2);

            $(".date2-icon").text(response.list[15].weather[0].icon);

            $(".date2-temp").text("Temp: " + (Math.round(((response.list[15].main.temp - 273.15) * 1.80) + 32)) + " °F");

            $(".date2-hum").text("Hum: " + response.list[15].main.humidity + " %");


            // console.log(response.list[23]);
            // console.log(response.list[23].dt_txt);
            // console.log(response.list[23].weather[0].icon);
            // console.log((Math.round(((response.list[23].main.temp - 273.15) * 1.80) + 32)) + " °F");
            // console.log(response.list[23].main.humidity + "%");

            // $(".date3").text(response.list[23].dt_txt);
            console.log(response.list[23].dt);
            var date3 = moment(response.list[23].dt,"X").format("MM/DD/YYYY");
            console.log(date3);
            $(".date3").text(date3);

            $(".date3-icon").text(response.list[23].weather[0].icon);

            $(".date3-temp").text("Temp: " + (Math.round(((response.list[23].main.temp - 273.15) * 1.80) + 32)) + " °F");

            $(".date3-hum").text("Hum: " + response.list[23].main.humidity + " %");


            // console.log(response.list[31]);
            // console.log(response.list[31].dt_txt);
            // console.log(response.list[31].weather[0].icon);
            // console.log((Math.round(((response.list[31].main.temp - 273.15) * 1.80) + 32)) + " °F");
            // console.log(response.list[31].main.humidity + "%");

            // $(".date4").text(response.list[31].dt_txt);
            console.log(response.list[31].dt);
            var date4 = moment(response.list[31].dt,"X").format("MM/DD/YYYY");
            console.log(date4);
            $(".date4").text(date4);

            $(".date4-icon").text(response.list[31].weather[0].icon);

            $(".date4-temp").text("Temp: " + (Math.round(((response.list[31].main.temp - 273.15) * 1.80) + 32)) + " °F");

            $(".date4-hum").text("Hum: " + response.list[31].main.humidity + " %");


            // console.log(response.list[39]);            
            // console.log(response.list[39].dt_txt);
            // console.log(response.list[39].weather[0].icon);
            // console.log((Math.round(((response.list[39].main.temp - 273.15) * 1.80) + 32)) + " °F");
            // console.log(response.list[39].main.humidity + "%");

            // $(".date5").text(response.list[39].dt_txt);
            console.log(response.list[39].dt);
            var date5 = moment(response.list[39].dt,"X").format("MM/DD/YYYY");
            console.log(date5);
            $(".date5").text(date5);

            $(".date5-icon").text(response.list[39].weather[0].icon);

            $(".date5-temp").text("Temp: " + (Math.round(((response.list[39].main.temp - 273.15) * 1.80) + 32)) + " °F");

            $(".date5-hum").text("Hum: " + response.list[39].main.humidity + " %");

        });

    };

    $("button").on("click", function () {

        city = $("#citySearched").val();
        getWeather(city);

        // prevent default
        if($("#citySearched").val() == "") {

            alert("Please enter a city")

        };
        
        // setItem local Storage

        // var searchHistory = [];
        // searchHistory.push(city);

        // var key;
        // var value;
        // localStorage.setItem(key,value);


    });

})