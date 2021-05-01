import { useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
// helpers
import { PublicRoute } from './helpers/PublicRoute';
import { PrivateRoute } from './helpers/PrivateRoute';
// redux
import { fetchUserBytoken } from './redux/slices/userSlice';

// pages
import Home from './pages/Home';
import DashBoard from './pages/DashBoard';
import ChatRoom from './pages/ChatRoom';
// utils
import { isLogin } from './utils/detect-auth';

export default function App() {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state);

	useEffect(
		() => {
			if (user.isError) {
				toast.error(`unauthorized`);
			}
		},
		[ user.isError ]
	);

	useEffect(
		() => {
			dispatch(fetchUserBytoken({ token: isLogin() }));
		},
		[ dispatch ]
	);

	return (
		<ChakraProvider>
			<Router>
				<Switch>
					<PublicRoute restricted={false} component={Home} path="/" exact />
					<PrivateRoute component={DashBoard} path="/dashboard" exact />
					<PrivateRoute component={ChatRoom} path="/dashboard/chatrooms" exact />
				</Switch>
			</Router>
		</ChakraProvider>
	);
}
