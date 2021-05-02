"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    $.get('/fortune', (response) => {
        $('#fortune-text').text(response);

    });
    // TODO: get the fortune and show it in the #fortune-text div
}

document.querySelector('#get-fortune-button').addEventListener('click', showFortune)
// with jQuery
// $('#get-fortune-button').on('click', showFortune);


// PART 2: SHOW WEATHER

function showWeather(evt) {
    //$('#weather-form').on('submit', (evt) => {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get("/weather.json", formData, (res) => {
        $('#weather-info').html(res.forecast);
        console.log('Hello');
    });
        
    //});    
}



//document.getElementById('#weather-form').addEventListener('submit', showWeather)
// with jQuery
$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}
document.getElementById('order-form').addEventListener('submit', orderMelons)
// with jQuery
// $("#order-form").on('submit', orderMelons);


