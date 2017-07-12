var SelectStudent = function(student){
	// console.log(student)
	return{
		type: 'PICK_STUDENT',
		payload: student
	}
}

export default SelectStudent;

// this is an action. 
// actions must return an object with a type property
// this is similar to components and render functions