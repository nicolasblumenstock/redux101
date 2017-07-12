import React, { Component } from 'react';
import logo from '../logo.svg';
import { connect } from 'react-redux';
import SelectStudent from '../actions/SelectStudentAction';
import Timer from '../actions/TimerAction';
import { bindActionCreators } from 'redux';
// bindActionCreators is a redux funtion that we will tap into to let all reducers know any time an action occurs;

class ReduxStudents extends Component{

	componentDidMount() {
		// setInterval(()=>{
		// 	this.props.Timer()
		// }, 1000)
	}


	render(){
		var studentArray = [];
		this.props.students.map((student, index)=>{
			studentArray.push(
				<li
					key={index}
					className='taco'
					onClick={()=>{
						this.props.SelectStudent(student)
					}
				}>
					{student}
				</li>
			);
			return '1'
		})
		return(
			<div className='App'>
				<div>
					<h3>
						{this.props.timer}
					</h3>
					<p>
						{studentArray}
					</p>
					<p>
						{this.props.selectedStudent} is the Chosen One!
					</p>
				</div>
			</div>
		)
	}

}

//all containers that need access to state will have this function. we are creating a mapping between redux state and this compoents props

function mapStateToProps(state){
	//mapStateToProps returns an object with each piece of state that we need
	//from master reducer, we have a 'state' object
	//inside of that state object. we have a property: students.
	//this exists because we made it a property in the rootReducer.
	return{
		students: state.students,
		selectedStudent: state.selectedStudent,
		timer: state.timer
	}
}


// mapDipatchToProps goes out to the dispatcher, grabs an action from it and sets it as a prop for this component.
function mapDispatchToProps(dispatch){
	return bindActionCreators({
		SelectStudent: SelectStudent,
		Timer: Timer
	}, dispatch)
}

//instead of exporting the class. we export connect.
// connect takes 2 arguments that returns a function that takes one argument.
// connect takes the state mapping function and the action mapping function
export default connect(mapStateToProps, mapDispatchToProps)(ReduxStudents);