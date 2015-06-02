$(document).ready(function() {

    //whenever a different day is selected:
    $('#dayMenu').change(function() {
        // check day selected
        var dayToForecast = $('#dayMenu').val();
        // report weather forcast
        console.log(dayToForecast);
    });

});