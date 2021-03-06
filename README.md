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
GIVEN a weather dashboard with 
[X]form input(s)?
[X]WHEN I search for a city
THEN I am presented with 
[X]current and 
[X]future conditions for that city and 
[X]that city is added to the search history
[X]WHEN I view current weather conditions for that city
THEN I am presented with 
[X]the city name, 
[X]the date, 
[X]an icon representation of weather conditions, 
[X]the temperature, 
[X]the humidity, 
[X]the wind speed, 
[X]and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are 
[X]favorable, moderate, or severe
[X]WHEN I view future weather conditions for that city
THEN I am presented with a 
[X]5-day forecast that displays 
[X]the date, 
[X]an icon representation of weather conditions, 
[X]the temperature, 
[X]and the humidity
[X]WHEN I click on a city in the search history
[X]THEN I am again presented with current and 
[X]future conditions for that city
[X]WHEN I open the weather dashboard
[X]THEN I am presented with the last searched city forecast
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

Changed the API call from https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={YOUR API KEY} to https://api.openweathermap.org/data/2.5/weather?q= + city + &APPID={YOUR API KEY}.

Adventures with github...
Created the repo without a readme, because I had already written all of the above.  Committed a folder within a folder, and then had to delete the repo, create a new one, and re-commit the files without a folder.  Lesson learned!

8/2

Added classes to html content, so that I will be able to access each one from `script.js` using JQuery.

Moved the function from `indexBS.html` to `script.js` in order to confirm that it is working.

Worked on the syntax of the JQuery to display the API response results dynamically within the HTML.

Created the panels for the 5-day Forecast.  Converted degress Kelvin to Fahrenheit (using the formula provided in this week's class activities).

Added a second API call within the `getWeather` function to retrieve the UV Index based on the latitude and longitude from the first API response. Added Bootstrap classes to the UV Index element to reflect favorable, moderate, and severe conditions.

Started working on how to convert the date from the API call to a readable format. (According to documentation, Open Weather Maps API uses unix UTC for the dt value.  Using google and stack overflow to find a way to convert to mm/dd/yyyy format.)

8/3

Created a function `getForecast` to perform API call and log results to the console.

Navigated through the DOM to retrieve results for the date, icon, temperature, and humidity content for the 5-day forecast.

Sent date, weather icon, temperature, and humidity results from the console to the HTML 5-day Forecast elements.

8/4

Added the `moment.js` script tag to be able to format the dates.
Added the current date to the Current City and the future dates to the 5 forecast boxes.

Consulted stack overflow for help with showing the weather icon.
[https://stackoverflow.com/questions/44177417/how-to-display-openweathermap-weather-icon].

Added the `img` tag to Current City `indexBS.html` to force the icon to render. Struggled with the correct syntax to dynamically change the image source within `indexBS.html` from `script.js`.

Using similar logic, added the weather icons to the Forecast boxes.

Created variables in order to save cities to local storage when the search button is clicked AND retrieve from local storage on page load.

Created a for loop to render the cities saved in local storage as buttons below the search field.

Used `stringify` to convert the `searchHistory` array to a string for local storage.  Used `parse` to read the cities from local storage.

Created function `showHistory` to show previously searched cities from local storage when the page loads and add cites to search history when the search button is clicked.

Changed all `http` to`https` so that links will work via github.

Deleted old lines of code that have been commented out.

Created an `if` statement to evaluate the length of the array `searchHistory` so that the most recent city searched will be displayed when the page loads.

8/5

Created a loop to build the five boxes of the 5-day Forecast. This helps to DRY up the repetitive code.

Also created a backup of the old `script.js`, just in case.
Not really using `style.css`, but fixed the alignment.

Cleaned up old code for the forecast boxes.
Commented on `indexBS.html` and `script.js` to explain the code.  Added a class `dashboard` to the navbar and to `style.css` to increase the font size.

Discovered that once the UV Index backgound color changed to red, it would not change back to green or yellow.  Wrote a line before the if statement to clear any previous background color.

Also removed the class for the text color, so that it will be white if the background is red or green, and dark if the background is yellow.

Googled the location with the lowest UV Index in the world; Port Stanley.  Open Weather Maps API returns the name as "Stanley", but also recognizes Stanley as a city in Great Britain.

App is not loading from github. Changed `index.html` to `OLDindex.html` and the working HTML file from `indexBS.html` to `index.html`.

![Screenshot (28)](https://user-images.githubusercontent.com/62854999/89463275-b1401d00-d73c-11ea-8de5-0fe546a69dab.png)
![Screenshot (29)](https://user-images.githubusercontent.com/62854999/89463284-b43b0d80-d73c-11ea-9da8-a55d4209717f.png)
![Screenshot (31)](https://user-images.githubusercontent.com/62854999/89483538-532a2e80-d76a-11ea-924d-16949694e572.png)

 https://github.com/LisaMcGautier/weatherDashboard
 https://lisamcgautier.github.io/weatherDashboard/
