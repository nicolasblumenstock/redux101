var SelectedStudent = function(state = 'no one' ,action){
	if(action.type === 'PICK_STUDENT'){
		return action.payload
	// }else if(action.type === 'TIMER_TICK'){
	// 	// var newState = state + action.payload.getSeconds();
	// 	return state;
	}else{
		return state;
	}
}

export default SelectedStudent;