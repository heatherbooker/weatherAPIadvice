alert('controller is functional!');

function findCityInfo() {
    var location = $('#city').val();
    location = location.charAt(0).toUpperCase() + location.substring(1);
    console.log(citySearcher.search(location)); //change console.log to return
}

var citySearcher = new CitySearcher();

citySearcher.loadCityList();

// function display(results) {
//     var showThis = 'City ID: ' + results.id;
//     showThis += '<br>City Name: ' + results.name;
//     showThis += '<br>City Latitude: ' + results.latitude;
//     showThis += '<br>City Longitude: ' + results.longitude;
//     showThis += '<br>Country Code: ' + results.country;
//     document.getElementById('results').innerHTML = showThis;
// }