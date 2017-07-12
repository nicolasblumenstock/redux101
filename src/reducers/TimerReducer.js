var TimerReducer = function(state = null, action){
	if(action.type === 'TIMER_TICK'){
		// var time = action.payload
		return action.payload.toLocaleTimeString();
	}else{
		return state;
	}
}

export default TimerReducer;