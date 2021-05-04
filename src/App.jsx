import { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// helpers
import { PublicRoute } from './helpers/PublicRoute';
import { PrivateRoute } from './helpers/PrivateRoute';
// redux
import { fetchUserBytoken } from './redux/actions/users';

// component

// pages
import Home from './pages/Home';
import DashBoard from './pages/DashBoard';
import ChatRoom from './pages/ChatRoom';
// utils
import { isLogin } from './utils/detect-auth';

export default function App() {
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(
		() => {
			dispatch(fetchUserBytoken(isLogin(), history));
		},
		[ dispatch, history ]
	);

	return (
		<ChakraProvider>
			<Switch>
				<PublicRoute restricted={false} component={Home} path="/" exact />
				<PrivateRoute component={DashBoard} path="/dashboard" exact />
				<PrivateRoute component={ChatRoom} path="/dashboard/chatrooms" exact />
				<PrivateRoute component={ChatRoom} path="/dashboard/chatrooms/:id" exact />
			</Switch>
		</ChakraProvider>
	);
}
