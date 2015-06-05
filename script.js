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
            url: "api.openweathermap.org/data/2.5/forecast?q=London",
            success: function(data) {
                console.log(data);
            },
            error: function(err) {
                console.log("ERROR" + err.stringify);
            }
        });

        function getDayObject(data, dayToForecast) {
            for (var i = 0; i < 7; i++) {
                if (dayToForecast === data[i].day_of_week) {
                    console.log('getting there');
                }
            }
        }

    });
});