import React, {Component} from 'react';
import {connect} from 'react-redux';
// import $ from 'jquery';
import {bindActionCreators} from 'redux';
import fetchWeather from '../actions/FetchWeather';

class WeatherData extends Component{

	componentDidMount() {
		this.props.fetchWeather();
	}


	render(){
		console.log(this.props.weather)
		if(this.props.weather.main === undefined){
			return(<h1>loading...</h1>)
		}else{
		return(
			<div>
				<h1>Atlanta Weather</h1>
				<ul>
					<li>
						{this.props.weather.main.temp} &#176; F
					</li>
					<li>
						{this.props.weather.weather[0].description}
					</li>
				</ul>
			</div>
		)
		}
	}
}

function mapStateToProps(state){
	return{
		weather: state.weather
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		fetchWeather: fetchWeather
	}, dispatch)
}




export default connect(mapStateToProps,mapDispatchToProps)(WeatherData);