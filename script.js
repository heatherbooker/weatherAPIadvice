// Code goes here

$(document).ready(function() {

    $('button').click(function() {

        // check day selected
        var day = $('#dayMenu').val();
        var dayToForecast = "";

        function shortenDayName(day) {
            if (day === "Sunday") {
                dayToForecast = "Sun";
            } else if (day === "Wednesday") {
                dayToForecast = "Wed";
            }
        }
        shortenDayName(day);

        //get location to check forecast for
        var location = $('#locus').val();
        location = location.charAt(0).toUpperCase() + location.substring(1);



        //reference API 
        $.ajax({
            beforeSend: function(request) {
                request.setRequestHeader("x-api-key", "47801ec2546320154de9cf8c92afef22");
            },
            type: "GET",
            dataType: "jsonp",
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + location,
            success: function(data) {
                window.data = data;
                console.log(data);
                getDayObject(data, 'whatever')
            },
            error: function(err) {
                console.log("ERROR " + JSON.stringify(err));
            }
        });

        function getDayObject(data, dayToForecast) {
            var mainWeather = data.weather[0].main;
            document.getElementById('advice').innerHTML = 'ADVICE <br>' + mainWeather;
            var icon = data.weather[0].icon;
            console.log(icon);
            document.getElementById('weather').innerHTML = '<img src="' + 'http://openweathermap.org/img/w/' + icon + '.png">';
        }

    });
});