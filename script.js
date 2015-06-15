$(document).ready(function() {

    var citySearcher = new CitySearcher();
    citySearcher.loadCityList();

    $('button').click(function() {

        // check day selected
        var daySelected = $('#dayMenu').val();
        var dayToForecast = "";

        // function shortenDayName(day) {
        //     if (day === "Sunday") {
        //         dayToForecast = "Sun";
        //     } else if (day === "Wednesday") {
        //         dayToForecast = "Wed";
        //     }
        // }
        // shortenDayName(day);

        var date = new Date();
        var day = date.getDay();
        var name = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][day];


        //get location to check forecast for
        var location = $('#locus').val();
        location = location.charAt(0).toUpperCase() + location.substring(1);


        var cityInList = (citySearcher.search(location));
        if (typeof cityInList === "object") {
            console.log(cityInList);
            //use id instead of name to look up, in case of name having spaces --> invalid url
            var locationCode = cityInList.id;
            var weatherMan = new WeatherMan;
            weatherMan.callWeatherApi(location, locationCode);
        } else {
            console.log(cityInList);
            alert("Invalid City Name");
        };


    });
});

function WeatherMan() {

    return {
        callWeatherApi: function(location, locationCode) {
            $.ajax({
                beforeSend: function(request) {
                    request.setRequestHeader("x-api-key", "47801ec2546320154de9cf8c92afef22");
                },
                type: "GET",
                dataType: "jsonp",
                url: "http://api.openweathermap.org/data/2.5/weather?id=" + locationCode + "&cnt=7",
                success: function(data) {
                    window.data = data;
                    console.log(data);
                    reportWeather(data, 'whatever');
                },
                error: function(err) {
                    console.log("ERROR " + JSON.stringify(err));
                    alert("Invalid City Name or Other Unknown Error");
                }
            });

            function reportWeather(data, dayToForecast) {
                var mainWeather = data.weather[0].main;
                document.getElementById('advice').innerHTML = 'FORECAST for<br>' + location + ': <br>' + mainWeather;
                var icon = data.weather[0].icon;
                document.getElementById('weather').innerHTML = '<img src="' + 'http://openweathermap.org/img/w/' + icon + '.png">';
            }
        },


    }
}