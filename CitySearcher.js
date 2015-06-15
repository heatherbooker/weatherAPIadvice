function CitySearcher() {

    var cityList = "";

    return {

        loadCityList: function() {
            $.ajax({
                type: "GET",
                dataType: "text",
                url: "cities.txt",
                success: function(data) {
                    cityList = data;
                    organize(data);
                },
                error: function(err) {
                    console.log("uh oh spaghettis " + err);
                }
            })

            function organize(data) {
                var regex = '\n';
                var arrayOfCities = data.split(regex);
                var endOfArray = arrayOfCities.length;
                makeCityObjects(0, endOfArray, arrayOfCities);
            }

            function City(arrayOfProperties) {
                this.id = arrayOfProperties[0];
                this.name = arrayOfProperties[1];
                this.latitude = arrayOfProperties[2];
                this.longitude = arrayOfProperties[3];
                this.country = arrayOfProperties[4];
            }


            function makeCityObjects(start, end, arrayOfCities) {
                for (var i = start; i < end; i++) {
                    arrayOfCities[i] = arrayOfCities[i].split('\t');
                    arrayOfCities[i] = new City(arrayOfCities[i]);
                };
                cityList = arrayOfCities;
            }
        },


        search: function(location) {

            var isNotFound = true;

            for (var i = 0; isNotFound; i++) {

                if (cityList[i].name === location) {

                    console.log('found city: ' + location);
                    isNotFound = false;
                    return (cityList[i]);
                } else if (cityList[i].name === undefined) {
                    isNotFound = false;
                    return "City '" + location + "' Not Found";
                } else if (i === cityList.length) {
                    isNotFound = false;
                    return "City '" + location + "' Not Found";
                }
            }
        },
    }
}