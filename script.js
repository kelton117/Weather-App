const $weatherFor = $('#weatherFor');
const $temperatureFor = $('#temperature');
const $feelsLike = $('#feelsLike');
const $weather = $('#weather');
const $form = $('form')
let weatherData,  userInput;
const $input = $('input[type="text"]');


$('form').on('submit', handleGetData);
function handleGetData(event) {
    event.preventDefault();
    cityName = $input.val();
    console.log($weatherFor)

    const promise = $.ajax({url:`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=9a231be55213fe3ebe183ac38b0c0d7c`})
    promise.then(data => {
            
            console.log(data)
            render(data);
        })
    .catch(error => {
            console.log('bad request', error);
        })
 };

function render(data) {
    $weatherFor.text(data.name);
    $weather.text(data.weather[0].description);
    $temperatureFor.text(data.main.temp);
    $feelsLike.text(data.main.feels_like);
    
};