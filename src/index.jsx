import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/default.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import actionCable from 'actioncable';

const CableApp = {};

CableApp.cable = actionCable.createConsumer('ws://localhost:3000/cable');

export const ActionCableContext = createContext();

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ActionCableContext.Provider value={CableApp.cable}>
				<App />
				<Toaster />
			</ActionCableContext.Provider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
