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
            // console.log(response.dt);
            // console.log((response.dt) * 1000);

            // Print the day date in MM/DD/YYYY format
            // console.log(moment(response.daily[i].dt,"X").format("MM/DD/YYYY"))
            // console.log(moment(response.dt, "X").format("MM/DD/YYYY"));
            var date = moment(response.dt,"X").format("MM/DD/YYYY");
            // console.log(date);

            // $(".city").text(response.name + " (" + date + ") ");

            // Add the current weather icon to Current City and date
            // $(".city").text(response.name + " (" + date + ") " + icon);
            // console.log(response.weather[0].icon);

            var icon = $("<img>");

            // var icon;
            var iconcode = response.weather[0].icon;
            var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
            
            icon.attr("src", iconurl);
            // $("#iconurl").attr("src", iconurl);
            // icon.attr("alt", "Weather Icon");
            // console.log(icon);
            console.log(iconcode);
            console.log(iconurl);

            $(".city").html(response.name + " (" + date + ") " + "<img id='iconurl' src='" + iconurl + "'>");



            // <div id="icon"><img id="wicon" src="" alt="Weather icon"></div>
            // var iconcode = a.weather[0].icon;
            // var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
            // $('#wicon').attr('src', iconurl);

            // var iconcode = response.weather[0].icon;
            // var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
            // $('#wicon').attr('src', iconurl);



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
            // console.log(response.list[7].dt);
            var date1 = moment(response.list[7].dt,"X").format("MM/DD/YYYY");
            // console.log(date1);
            $(".date1").text(date1);



            // $(".date1-icon").text(response.list[7].weather[0].icon);
            
            var icon1 = $("<img>");
            var iconcode1 = response.list[7].weather[0].icon;
            var iconurl1 = "http://openweathermap.org/img/w/" + iconcode1 + ".png";
            
            icon1.attr("src", iconurl1);
            icon1.attr("alt", "Weather Icon");

            $(".date1-icon").html(icon1);

            $(".date1-temp").text("Temp: " + (Math.round(((response.list[7].main.temp - 273.15) * 1.80) + 32)) + " °F");

            $(".date1-hum").text("Hum: " + response.list[7].main.humidity + " %");



            // console.log(response.list[15]);
            // console.log(response.list[15].dt_txt);
            // console.log(response.list[15].weather[0].icon);
            // console.log((Math.round(((response.list[15].main.temp - 273.15) * 1.80) + 32)) + " °F");
            // console.log(response.list[15].main.humidity + "%");

            // $(".date2").text(response.list[15].dt_txt);
            // console.log(response.list[15].dt);
            var date2 = moment(response.list[15].dt,"X").format("MM/DD/YYYY");
            // console.log(date2);
            $(".date2").text(date2);



            // $(".date2-icon").text(response.list[15].weather[0].icon);

            var icon2 = $("<img>");
            var iconcode2 = response.list[15].weather[0].icon;
            var iconurl2 = "http://openweathermap.org/img/w/" + iconcode2 + ".png";
            
            icon2.attr("src", iconurl2);
            icon2.attr("alt", "Weather Icon");

            $(".date2-icon").html(icon2);



            $(".date2-temp").text("Temp: " + (Math.round(((response.list[15].main.temp - 273.15) * 1.80) + 32)) + " °F");

            $(".date2-hum").text("Hum: " + response.list[15].main.humidity + " %");
           

            // console.log(response.list[23]);
            // console.log(response.list[23].dt_txt);
            // console.log(response.list[23].weather[0].icon);
            // console.log((Math.round(((response.list[23].main.temp - 273.15) * 1.80) + 32)) + " °F");
            // console.log(response.list[23].main.humidity + "%");

            // $(".date3").text(response.list[23].dt_txt);
            // console.log(response.list[23].dt);
            var date3 = moment(response.list[23].dt,"X").format("MM/DD/YYYY");
            // console.log(date3);
            $(".date3").text(date3);



            // $(".date3-icon").text(response.list[23].weather[0].icon);
            
            var icon3= $("<img>");
            var iconcode3 = response.list[23].weather[0].icon;
            var iconurl3 = "http://openweathermap.org/img/w/" + iconcode3 + ".png";
            
            icon3.attr("src", iconurl3);
            icon3.attr("alt", "Weather Icon");

            $(".date3-icon").html(icon3);



            $(".date3-temp").text("Temp: " + (Math.round(((response.list[23].main.temp - 273.15) * 1.80) + 32)) + " °F");

            $(".date3-hum").text("Hum: " + response.list[23].main.humidity + " %");


            // console.log(response.list[31]);
            // console.log(response.list[31].dt_txt);
            // console.log(response.list[31].weather[0].icon);
            // console.log((Math.round(((response.list[31].main.temp - 273.15) * 1.80) + 32)) + " °F");
            // console.log(response.list[31].main.humidity + "%");

            // $(".date4").text(response.list[31].dt_txt);
            // console.log(response.list[31].dt);
            var date4 = moment(response.list[31].dt,"X").format("MM/DD/YYYY");
            // console.log(date4);
            $(".date4").text(date4);



            // $(".date4-icon").text(response.list[31].weather[0].icon);

            var icon4= $("<img>");
            var iconcode4 = response.list[31].weather[0].icon;
            var iconurl4 = "http://openweathermap.org/img/w/" + iconcode4 + ".png";
            
            icon4.attr("src", iconurl4);
            icon4.attr("alt", "Weather Icon");

            $(".date4-icon").html(icon4);



            $(".date4-temp").text("Temp: " + (Math.round(((response.list[31].main.temp - 273.15) * 1.80) + 32)) + " °F");

            $(".date4-hum").text("Hum: " + response.list[31].main.humidity + " %");


            // console.log(response.list[39]);            
            // console.log(response.list[39].dt_txt);
            // console.log(response.list[39].weather[0].icon);
            // console.log((Math.round(((response.list[39].main.temp - 273.15) * 1.80) + 32)) + " °F");
            // console.log(response.list[39].main.humidity + "%");

            // $(".date5").text(response.list[39].dt_txt);
            // console.log(response.list[39].dt);
            var date5 = moment(response.list[39].dt,"X").format("MM/DD/YYYY");
            // console.log(date5);
            $(".date5").text(date5);



            // $(".date5-icon").text(response.list[39].weather[0].icon);

            var icon5= $("<img>");
            var iconcode5 = response.list[39].weather[0].icon;
            var iconurl5 = "http://openweathermap.org/img/w/" + iconcode5 + ".png";
            
            icon5.attr("src", iconurl5);
            icon5.attr("alt", "Weather Icon");

            $(".date5-icon").html(icon5);



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