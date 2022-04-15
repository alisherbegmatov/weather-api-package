import {
  getWeatherByZip,
  getWeatherByCity,
  getWeatherByGeo,
} from './scripts.js';

const tempEl = document.getElementById('temp');
const descEl = document.getElementById('desc');
const feelsLikeEl = document.getElementById('feels_like');
const minMaxEl = document.getElementById('min_max');
const formEl = document.getElementById('form');
const inputInput = document.getElementById('input-field');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = inputInput.value;
  const apiKey = '022716d25b2c9f7f164cfb5594767d22';

  function catchAllWeather() {
    if (input % 1 === 0 && input.length === 5) {
      return getWeatherByZip(input, apiKey);
    }
    if (typeof input === 'string' && !input.includes(',')) {
      return getWeatherByCity(input, apiKey);
    }
    if (input.indexOf(' ') >= 1 && input.includes(',')) {
      const splitInput = input.split(' ', 2);
      const input1 = splitInput[0].replace(',', '');
      const input2 = splitInput[1];
      return getWeatherByGeo(input1, input2, apiKey);
    }
    descEl.innerHTML =
      'ERROR, Please enter a 5 Digit Zip Code, City Name or Latitude, Longitude';
  }

  catchAllWeather()
    .then((data) => {
      tempEl.innerHTML = data.temp;
      descEl.innerHTML = `There is ${data.description} in  ${data.name}, ${data.country}`;
      feelsLikeEl.innerHTML = `It feels like ${data.feels_like}° degrees`;
      minMaxEl.innerHTML = `Today's high is ${data.temp_max}° degrees and today's low is ${data.temp_min}° degrees`;
    })
    .catch((err) => console.log(err.message));
});
