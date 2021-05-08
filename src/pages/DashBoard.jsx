import React, { useRef, Fragment, useState, useEffect } from 'react';
import { Grid } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import Pusher from 'pusher-js';

// component
import { NavBar } from '../components/dashboard/NavBar';
import { ModuleChartArea } from '../components/dashboard/module.chartArea';
import { ModuleStatsArea } from '../components/dashboard/module.statsArea';

function DashBoard() {
	const user = useSelector((state) => state.users);
	const [ pairs, setPairs ] = useState([]);
	const [ sorted, setSorted ] = useState([]);
	const [ orders, setOrders ] = useState([]);
	const [ abs, setABs ] = useState([]);
	const [ startWS, setStartWS ] = useState([]);
	const [ id, setId ] = useState(2);
	const [ currentPrice, setCurrentPrice ] = useState(Number);
	let _isMounted = useRef(false);

	useEffect(
		() => {
			_isMounted.current = true;

			const pusher = new Pusher(`b8f20a3d52d39b9262c2`, {
				cluster: 'us2',
				encrypted: true
			});

			const ticker = pusher.subscribe('ticker');
			ticker.bind('tick', (data) => {
				console.log(data);
				setABs((prevAbs) => [ ...prevAbs, data ]);
			});

			if (_isMounted && pairs.length === 0) {
				fetch('http://localhost:5000/forex').then((res) => res.json()).then((data) => setPairs(data));
			}

			// if (pairs.length !== 0) {
			// 	setInterval(() => {
			// 		fetch('http://localhost:5000/forex').then((res) => res.json()).then((data) => setPairs(data));
			// 	}, 10000);
			// }

			if (pairs.length !== 0) return setCurrentPrice(pairs.slice(-1)[0].c);
			/* 
				set the sorted
			*/
			const newSorted = pairs.map((tick) => tick.pair);
			setSorted(newSorted);

			return () => (_isMounted.current = false);
		},
		[ pairs.length, pairs, startWS.length ]
	);

	useEffect(
		() => {
			setId((prev) => {
				if (typeof user.user.id === 'number') return parseInt(user.user.id);
			});
		},
		[ user.user.id ]
	);

	useEffect(
		() => {
			fetch('http://localhost:3000/api/v1/stock_purchases').then((res) => res.json()).then(({ data }) => {
				let result = [];
				data.map((purchase) => {
					if (purchase.attributes['user-id'] === id) {
						result.push(purchase);
					}
					return result;
				});

				setOrders(result);
			});
		},
		[ id ]
	);
	/* 
			unqiue array
	*/
	const selectSort = [ ...new Set(sorted) ];

	const handleGlobalChange = (e) => {
		console.log(e.target.value);
		// const ticker = pusher.subscribe('ticker');

		// ticker.bind('tick', (data) => {
		// 	// console.log(data);
		// 	// if (data.pair === e.target.value) return setStartWS([ ...startWS, data ]);
		// });
	};

	const handleCancel = (e) => {};

	return (
		<Fragment>
			<Grid h="100vh" gridTemplateRows="8% 1fr">
				<NavBar pairs={pairs} selectSort={selectSort} />
				<Grid gridTemplateColumns="1fr 40%" bg="#1E2025">
					<ModuleChartArea abs={abs} pairs={pairs} handleCancel={handleCancel} orders={orders} />
					<ModuleStatsArea id={id} setOrders={setOrders} pairs={pairs} currentPrice={currentPrice} />
				</Grid>
			</Grid>
		</Fragment>
	);
}

export default React.memo(DashBoard);
