import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/default.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router } from 'react-router-dom';
import 'pure-react-carousel/dist/react-carousel.es.css';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<App />
				<Toaster />
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
