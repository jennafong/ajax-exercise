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
    console.log('line 50 before form inputs');
    const formInputs = {
        qty: $('#qty-field').val(),
        melon_type: $('#melon-type-field').val(),
    };
    console.log('line 55 before ajax');
    
    $.ajax({
        url: "/order-melons.json",
        data: JSON.stringify(formInputs),
        contentType: "application/json",
        success: (res) => {
            if (res.code === 'ERROR') {
                $('#order-status').addClass('order-error');
                $("#order-status").text(res.msg);
                console.log("Error");
            } else {
                $('#order-status').removeClass('order-error');
                $("#order-status").text(res.msg);
                console.log(res);
            };  
        },
        method: "POST",
    });
    console.log('line 65 after ajax');
    
    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
};
// document.getElementById('order-form').addEventListener('submit', orderMelons)
// with jQuery
$("#order-form").on('submit', orderMelons);


