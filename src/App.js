import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Students from './Students';
import ReduxStudents from './containers/ReduxStudents';
import WeatherData from './containers/WeatherData';
import { BrowserRouter as Bowser, Route as KidKoopa, Link as Goomba } from 'react-router-dom';


class App extends Component {
	render() {
	return (
		<div className="App">
			<Bowser>
				<div>
					<Goomba to='/'>Home</Goomba>&emsp;|&emsp;
					<Goomba to='/students'>Students</Goomba>&emsp;|&emsp;
					<Goomba to='/old-students'>Old Students</Goomba>				
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Dr. Zaius. Dr. Zaius.</h2>				
				</div>				
					<KidKoopa exact path='/' component={WeatherData} />
					<KidKoopa path='/students' component={ReduxStudents} />
					<KidKoopa path='/old-students' component={Students} />
				</div>
			</Bowser>
		</div>
	);
	}
}

export default App;
