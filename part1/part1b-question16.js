let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2,
    r:      10
};

for ( variable in statistics) {
    if( variable.charAt(0) == 'r' || statistics[variable] % 2 == 1){
        console.log(statistics[variable]);
    }
}