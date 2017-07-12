import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import './App.css';
// import ReduxStudents from './containers/ReduxStudents';
// import WeatherData from './containers/WeatherData';
// import registerServiceWorker from './registerServiceWorker';
// import rootReducer from './reducers/rootreducer.js';


import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
//allows redux and react to talk
import { Provider } from 'react-redux';

import RootReducer from './reducers/rootreducer.js';

// const theStore = createStore(reducers)
const createStoreWithMiddleWare = applyMiddleware(reduxPromise)(createStore)
const theFinalStore = createStoreWithMiddleWare(RootReducer)

//reactDom.render takes two args. what and where.

// ReactDOM.render(
// 	<Provider store={theStore}>
// 		<div className='main'>
// 			<WeatherData />
// 			<ReduxStudents />
// 		</div>
// 	</Provider>,
// 	document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render(
	<Provider store={theFinalStore}>
		<App />
	</Provider>,
	document.getElementById('root'));
