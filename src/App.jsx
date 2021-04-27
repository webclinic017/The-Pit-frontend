import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ChakraPovider } from '@chakra-ui/react';

// helpers
import { PublicRoute } from './helpers/PublicRoute';
// import { PrivateRoute } from './helpers/PrivateRoute';

// pages
import Home from './pages/Home';
// import DashBoard from './pages/DashBoard';

export default function App() {
	return (
		<Router>
			<Switch>
				<PublicRoute restricted={false} component={Home} path="/" exact />
				{/* <PrivateRoute component={DashBoard} path="/dashboard" exact /> */}
			</Switch>
		</Router>
	);
}
