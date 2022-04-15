# Weather API

![npm](https://img.shields.io/npm/v/@alisherbegmatov/weather-api)
![NPM](https://img.shields.io/npm/l/@alisherbegmatov/weather-api)
![repo size](https://img.shields.io/github/repo-size/alisherbegmatov/weather-api)
![issues](https://img.shields.io/github/issues/alisherbegmatov/weather-api)
![downloads](https://img.shields.io/npm/dm/weather-api.svg?style=flat)

## Description

### A library that can be used by anyone who wants to use the OpenWeatherMap API in any project they might create.

this repository is powered by [Open Weather Map API](https://openweathermap.org).

## Built With

- [HTML](https://en.wikipedia.org/wiki/HTML)
- [Node](https://nodejs.org/en/)

## Getting Started
1. In order to clone the repository to your local machine, run the following command below or click the green Code button on the top right corner of the repository and then select Open with GitHub Desktop option or select Download ZIP option.
```zsh
git clone https://github.com/alisherbegmatov/weather-api-package.git
```

## Installation
2. Open the project in the text / code editor of your choice and in the terminal, run the following command below:
```zsh
npm i or npm install
```

## Usage
1. **`getWeatherByZip()`** allows searching by zip code.

- `(params)` are:
- `zip`: A 5 digit USA based zip code
- `apiKey`: You will need to input your own API Key for your project.
- `units`: No entry will default to 'imperial', but options are 'metric' or 'kelvin'

2. **`getWeatherByCity()`** allows searching by city name.

- `params` are:
- `city`: City Name
- `apiKey`: Your API Key
- `units`

3. **`getWeatherByGeo()`** allows searching with Latitude & Longitude.

- `params` are:
- `lat`: Latitude
- `lon`: Longitude
- `apiKey`: Your API Key
- `units`

## License
Distributed under the MIT License. See LICENSE.txt for more information.
