import $ from 'jquery';

// fetchWeather is async. dispatcher will not wait. redux middleware helps with this.


var fetchWeather = function(){
	console.log('stop trying to make fetch happen...')
	const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=30324&appid=e312dbeb8840e51f92334498a261ca1d';
	const thePromise = $.getJSON(weatherUrl)
	return{
		type: 'FETCH_WEATHER',
		payload: thePromise
	}
}

export default fetchWeather;