var WeatherReducer = function(state = [], action){
	switch(action.type){
		case 'FETCH_WEATHER':
			return action.payload;
		case 'HokeyPokey':
			return state;
		default:
			return state;
	}
}

export default WeatherReducer;