$(document).ready(function () {
    // Create an array to hold cities searched by the user.
    var searchHistory = [];
    // Call the showHistory function
    showHistory();

    // If there are items in the array
    if(searchHistory.length > 0) {
        // Call the get weather function for the most recent city searched
        getWeather(searchHistory[searchHistory.length - 1]);
    };

    // Create a function to retrieve items from local storage
    function showHistory () {
        // Create a variable to hold the items from local storage AND parse them from JSON
        var savedCities = JSON.parse(localStorage.getItem("mostRecent"));

        // If local storage is NOT empty
        if (savedCities != null) {
            // Clear the search history list 
            $(".list-group").empty();
            // Add the items from local storage to the array searchHistory
            searchHistory = savedCities;

            // Create a loop to process each item from local storage
            for (var i = 0; i < savedCities.length; i++) {
                // Create a new button
                var btn = $("<button>");
                // Add the name of the city to the new button
                btn.text(savedCities[i]);
                // Add classes to the new button
                btn.addClass("list-group-item list-group-item-action");
                // Add the new button to the search history in the window
                $(".list-group").append(btn);
                // Add an event listener to the new button
                btn.on("click", function () {
                    // Create a variable to retrieve the name of the city from the new button
                    var thisCity = $(this).text();
                    // Call the getWeather function for that city
                    getWeather(thisCity);
                });
            };
        };
    };

    // Create a function to retrieve weather data for the city searched by the user
    function getWeather(city) {
        // Create a variable to hold the name of the city
        var city;
        // Create a variable to hold the URL of the API call
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=9f5f24e057e2a67d1f855db880415b67";
        // Use AJAX method to GET weather data from the API
        $.ajax({
            url: queryURL,
            method: "GET"
        // Create a function to process the weather data from the API call
        }).then(function (response) {
            // Create a variable to convert the format of the date from unix UTC to a readable date
            var date = moment(response.dt, "X").format("MM/DD/YYYY");
            // Create a new image tag in html
            var icon = $("<img>");
            // Create a variable to hold the icon from the API call
            var iconCode = response.weather[0].icon;
            // Create a variable to assign the image URL
            var iconURL = "https://openweathermap.org/img/w/" + iconCode + ".png";
            // Add the image URL as an attribute of the image tag
            icon.attr("src", iconURL);
            // Add the name of the city, the date, and the icon to the Current City in the window
            $(".city").html(response.name + " (" + date + ") " + "<img id='iconURL' src='" + iconURL + "'>");
            // Change the text of the temp <p> tag from html
            $(".temp").text("Temperature: " + (Math.round(((response.main.temp - 273.15) * 1.80) + 32)) + " °F");
            // Change the text of the humidity <p> tag from html
            $(".humidity").text("Humidity: " + response.main.humidity + " %");
            // Change the text of the wind <p> tag from html
            $(".wind").text("Wind Speed: " + response.wind.speed + " MPH");

            // Make a separate API call for UV Index
            queryURL = "https://api.openweathermap.org/data/2.5/uvi?&APPID=9f5f24e057e2a67d1f855db880415b67&lat=" + response.coord.lat + "&lon=" + response.coord.lon;
            // Use AJAX method to GET UV data from the API
            $.ajax({
                url: queryURL,
                method: "GET"
            // Create a function to process the UV data from the API call
            }).then(function (response) {
                // Clear any previous background class from the UV Index class
                $(".uvi").removeClass("bg-success bg-warning bg-danger");
                // $(".uvi").css("background", "white");
                // $(".uvi").removeClass();
                // $(".uvi").css("background", "transparent");
                // Change the text of the uvi <p> tag from html
                $(".uvi").text("UV Index: " + response.value);

                // If the UV Index is less than 3
                if (response.value < 3) {
                    // Change the background to green and the text color to white
                    $(".uvi").addClass("bg-success text-white");
                    // OR if the UV Index is greater than 3 BUT less than 8
                } else if (response.value >= 3 && response.value < 8) {
                    // Change the background color to yellow
                    $(".uvi").addClass("bg-warning");
                    // (IF the UV Index is greater than 8)
                } else if (response.value > 8){
                    // Change the background to red and the text color to white
                    $(".uvi").addClass("bg-danger text-white");
                };
                // Call the getForecast function AND the showHistory function
                getForecast(city);
                showHistory();
            });
        });
    };

    // Create a function to retrieve forecast data for the city searched by the user
    function getForecast(city) {
        // Create a variable to hold the name of the city
        var city;
        // Create a variable to hold the URL of the API call
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=9f5f24e057e2a67d1f855db880415b67";
        // Use AJAX method to GET forecast data from the API
        $.ajax({
            url: queryURL,
            method: "GET"
            // Create a function to process the forecast data from the API call
        }).then(function (response) {
            // Create an array to hold the items from the forecast data array in order to traverse the DOM
            var fiveDay = [response.list[7], response.list[15], response.list[23], response.list[31], response.list[39]];
            // Clear the forecast area
            $("#forecast").empty();

            // Create a loop to build the 5 Day Forecast boxes
            for (var i = 0; i < fiveDay.length; i++) {
                // Create a new div tag
                var box = $("<div>");
                // Add classes to the div
                box.addClass("col-2 offset-col-1 p-2 mb-2 bg-primary text-white rounded");
                // Create a new h5 tag
                var date = $("<h5>");
                //  Add a class to the new h5
                date.addClass("date");
                // Convert the text to the readable date format
                date.text(moment(fiveDay[i].dt, "X").format("MM/DD/YYYY"));
                // Add the date to the box
                box.append(date);
                // Create a new image tag
                var icon = $("<img>");
                // Create a variable to hold the icon code from the API forecast data
                var iconCode = (fiveDay[i]).weather[0].icon;
                // Create a variable to hold the URL for the image
                var iconURL = "https://openweathermap.org/img/w/" + iconCode + ".png";   
                // Add an src attribute to the image
                icon.attr("src", iconURL);
                // Add an alt attribute to the image
                icon.attr("alt", "Weather Icon");
                // Add the icon to the box
                box.append(icon);
                // Create a new p tag
                var dateTemp = $("<p>");
                // Add a class to the new p
                dateTemp.addClass("date-temp");
                // Assign the text to the temp p
                dateTemp.text("Temp: " + (Math.round(((fiveDay[i].main.temp - 273.15) * 1.80) + 32)) + " °F");
                // Add the temp to the box
                box.append(dateTemp);                
                // Create a new p tag
                var dateHum = $("<p>");
                //  Add a class to the new p
                dateHum.addClass("date-hum");
                // Assign the text to the humidity p
                dateHum.text("Hum: " + fiveDay[i].main.humidity + " %");
                // Add the humidity to the box
                box.append(dateHum);
                // Append the box to the forecast div in the window
                $("#forecast").append(box);
            };
        });
    };

    // Add an event listener to the search button
    $(".searchBtn").on("click", function () {
        // Retrieve the city entered by the user
        city = $("#citySearched").val();
        // Call the getWeather function
        getWeather(city);

        // If theuser clicks without typing
        if ($("#citySearched").val() == "") {
            // Send an alert
            alert("Please enter a city")
        };
        // Add the city to the searchHistory array
        searchHistory.push(city);
        // Stringify the array and save to local storage
        localStorage.setItem("mostRecent", JSON.stringify(searchHistory));
    });
})