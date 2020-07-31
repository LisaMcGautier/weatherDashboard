# 06 Server-Side APIs: Weather Dashboard

Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

Use the [OpenWeather API](https://openweathermap.org/api) to retrieve weather data for cities. The documentation includes a section called "How to start" that will provide basic setup and usage instructions. Use `localStorage` to store any persistent data.

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
[]GIVEN a weather dashboard with 
[]form input(s)?
[]WHEN I search for a city
[]THEN I am presented with 
[]current and 
[]future conditions for that city and 
[]that city is added to the search history
[]WHEN I view current weather conditions for that city
[]THEN I am presented with 
[]the city name, 
[]the date, 
[]an icon representation of weather conditions, 
[]the temperature, 
[]the humidity, 
[]the wind speed, 
[]and the UV index
[]WHEN I view the UV index
[]THEN I am presented with a color that indicates whether the conditions are 
[]favorable, moderate, or severe
[]WHEN I view future weather conditions for that city
[]THEN I am presented with a 
[]5-day forecast that displays 
[]the date, 
[]an icon representation of weather conditions, 
[]the temperature, 
[]and the humidity
[]WHEN I click on a city in the search history
[]THEN I am again presented with current and 
[]future conditions for that city
[]WHEN I open the weather dashboard
[]THEN I am presented with the last searched city forecast
```

The following image demonstrates the application functionality:

![weather dashboard demo](./Assets/06-server-side-apis-homework-demo.png)

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.

7/31

Started by creating the html structure of the page. `index.html`
Forgot to include Bootstrap, so the grid pattern that I created for another project did not render to the window.
Created `indexBS.html` in order to leverage Bootstrap classes.

Created script.js and style.css which are linked to the html by `<script>` and `<style>` tags.

Included a link to the full (google) version of jQuery, because the Bootstrap version of jQuery will not support API calls.

Requesteded an API key from the website above.

Created a function to retrieve weather conditions for the city from the user input box on the click of the search button.

At first, only the weather conditions for Moscow were logging to the console.  Discovered that the example url from the openweathermap documentation included the city code for Moscow (524901) hard-coded in the query.

Changed the API call from `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={YOUR API KEY}` to "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID={YOUR API KEY}".
