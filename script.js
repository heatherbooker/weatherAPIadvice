$(document).ready(function() {

    //whenever a different day is selected:
    $('#dayMenu').change(function() {
        // check day selected
        var dayToForecast = $('#dayMenu').val();
        // report weather forcast
        console.log(dayToForecast);
    });

    //reference API
    $.ajax({
        beforeSend: function(request) {
            request.setRequestHeader("X-Mashape-Key", "QZEnKyYBkDmshpGpiYZ7HEq66Iuwp14dcvojsnHzeVRVBn06Ij");
            request.setRequestHeader("Accept", "application/json");
        },
        type: "GET",
        url: "https://george-vustrey-weather.p.mashape.com/api.php?location=Vancouver",
        success: function(data) {
            console.log(data);
        },
        error: function(err) {
            console.log("ERROR" + err);
        }
    });

});