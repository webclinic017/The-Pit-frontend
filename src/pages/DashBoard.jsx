import React, { useRef, Fragment, useState, useEffect } from 'react';
import {
	Grid,
	HStack,
	Select,
	Heading,
	Box,
	Flex,
	Input,
	Stack,
	ButtonGroup,
	Button,
	Text,
	VStack,
	Table,
	Thead,
	Tbody
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import Pusher from 'pusher-js';
import { HelpCircle, Bell, Settings, DollarSign } from 'react-feather';
import { Formik, Form } from 'formik';
import toast from 'react-hot-toast';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
// component

function DashBoard() {
	const user = useSelector((state) => state.users);
	const [ pairs, setPairs ] = useState([]);
	const [ sorted, setSorted ] = useState([]);
	const [ orders, setOrders ] = useState([]);
	const [ abs, setABs ] = useState([]);
	// websocket
	const [ startWS, setStartWS ] = useState([]);
	const [ id, setId ] = useState(2);
	const [ currentPrice, setCurrentPrice ] = useState(Number);
	// number - maybe not needed
	const format = (val) => `$` + val;
	const parse = (val) => val.replace(/^\$/, '');
	const [ dollar, setDollar ] = React.useState('10000');

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
			// 	}, 40000);
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
	console.log(abs);
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

	let average = (array) => array.reduce((a, b) => a + b) / array.length;
	let avgHigh = pairs.map((pair) => parseFloat(pair.h));
	let avgLow = pairs.map((pair) => parseFloat(pair.l));
	let close = pairs.map((pair) => parseFloat(pair.c));
	let avgVolume;

	if (close.length !== 0) {
		avgVolume =
			average(close) * parseFloat([ ...pairs ].splice(-1, 1)[0].s) / parseFloat([ ...pairs ].splice(-1, 1)[0].s);
	}

	const handleCancel = (e) => {};

	return (
		<Fragment>
			<Grid h="100vh" gridTemplateRows="8% 1fr">
				<Flex
					borderBottom="2px solid #37373B"
					padding="1em 2em"
					justifyContent="space-between"
					alignItems="center"
					bg="#23252A"
				>
					<Flex alignItems="center">
						<Heading mr="2em" as="h2" fontSize="1.2em">
							The Pit
						</Heading>
						<Select
							fontSize=".9em"
							fontWeight="bold"
							w="120px"
							bg="transparent"
							borderColor="transparent"
							color="white"
							onChange={handleGlobalChange}
							placeholder="AUD/USD"
						>
							{selectSort.map((pair) => {
								return (
									<Fragment key={pair}>
										<option value={pair}>{pair}</option>
									</Fragment>
								);
							})}
						</Select>
						<HStack ml="2em" spacing="34px">
							<VStack>
								<Text fontWeight="bold" color="#D3504C" fontSize=".8em">
									{pairs.length !== 0 && pairs.slice(-1)[0].c}
								</Text>
								<Text color="#657A95" fontWeight="bold" mt="0 !important" fontSize=".8em">
									${pairs.length !== 0 && pairs.slice(-1)[0].c}
								</Text>
							</VStack>
							<Box>
								<VStack>
									<Text color="#657A95" fontWeight="bold" fontSize=".8em">
										24h Change
									</Text>
									<Text mt="0 !important" fontWeight="bold" color="#66A03E" fontSize=".8em">
										3.16% 0.003%
									</Text>
								</VStack>
							</Box>
							<Box>
								<VStack>
									<Text color="#657A95" fontWeight="bold" fontSize=".8em">
										24h High
									</Text>
									<Text mt="0 !important" fontWeight="bold" color="#ffffff" fontSize=".8em">
										{pairs.length !== 0 && average(avgHigh).toFixed(5)}
									</Text>
								</VStack>
							</Box>
							<Box>
								<VStack>
									<Text color="#657A95" fontWeight="bold" fontSize=".8em">
										24h Low
									</Text>
									<Text mt="0 !important" fontWeight="bold" color="#ffffff" fontSize=".8em">
										{pairs.length !== 0 && average(avgLow).toFixed(5)}
									</Text>
								</VStack>
							</Box>
							<Box>
								<VStack>
									<Text color="#657A95" fontWeight="bold" fontSize=".8em">
										24h Volume
									</Text>
									<Text mt="0 !important" fontWeight="bold" color="#ffffff" fontSize=".8em">
										{pairs.length !== 0 && avgVolume.toFixed(5)}
									</Text>
								</VStack>
							</Box>
						</HStack>
					</Flex>
					<HStack spacing="25px">
						<HelpCircle size="1.2em" />
						<Bell size="1.2em" />
						<Settings size="1.2em" />
					</HStack>
				</Flex>
				<Grid gridTemplateColumns="1fr 40%" bg="#1E2025">
					<Grid gridTemplateRows="70% 30%">
						<Grid gridTemplateColumns="30% 1fr">
							<Box padding="2em">
								<Input
									w="140px"
									border="none"
									bg="#2C2E36  !important"
									h="40px"
									color="#677D9B"
									as={Input}
									type="text"
									name="search"
									placeholder="search"
								/>
								<Flex mt="1em" textAlign="center" justifyContent="space-between" w="100%">
									<Text color="#677D9B ">Price</Text>
									<Text color="#677D9B ">Ask</Text>
									<Text color="#677D9B ">Bid</Text>
								</Flex>
								<Box mt="1em" h="100%" maxHeight="450px" overflowY="scroll" overflowX="hidden">
									{abs.reverse().map((askBid, index) => {
										return (
											<Flex
												key={index}
												textAlign="center"
												justifyContent="space-between"
												w="100%"
											>
												<Text color="#fff">{pairs.length !== 0 && pairs.slice(-1)[0].c}</Text>
												<Text color="#C85740">{askBid.a}</Text>
												<Text color="#90D647 ">{askBid.b}</Text>
											</Flex>
										);
									})}
								</Box>
							</Box>
							<Box>
								<TradingViewWidget symbol="AUD/USD" theme={Themes.DARK} locale="fr" autosize />
							</Box>
						</Grid>
						<Box padding="2em" border="2px solid #37373B">
							<HStack spacing="30px">
								<Text fontSize="1em" fontWeight="bold">
									Open Orders
								</Text>
								<Text color="#677D9B " fontSize="1em" fontWeight="bold">
									Order History
								</Text>
								<Text color="#677D9B " fontSize="1em" fontWeight="bold">
									Trade History
								</Text>
								<Text color="#677D9B " fontSize="1em" fontWeight="bold">
									Funds
								</Text>
								<Text color="#677D9B " fontSize="1em" fontWeight="bold">
									Staking Vault
								</Text>
								<Text color="#677D9B " fontSize="1em" fontWeight="bold">
									Activity
								</Text>
							</HStack>
							<Box mt="1em">
								<HStack spacing="90px" justifyContent="center">
									<Text w="100%" color="#677D9B ">
										Date
									</Text>
									<Text w="100%" color="#677D9B ">
										Pair
									</Text>
									<Text w="100%" color="#677D9B ">
										Type
									</Text>
									<Text w="100%" color="#677D9B ">
										Side
									</Text>
									<Text w="100%" color="#677D9B ">
										Price
									</Text>
									<Text w="100%" color="#677D9B ">
										Amount
									</Text>
									<Text w="100%" color="#677D9B ">
										Filled
									</Text>
									<Text w="100%" color="#677D9B ">
										Conditions
									</Text>
								</HStack>
							</Box>
							<Box mt="1em" overflowY="scroll !important" height="130px !important">
								{orders.map((order) => {
									return (
										<HStack key={order.id} spacing="90px">
											<Text color="#677D9B ">{order.attributes['created-at'].split('T')[0]}</Text>
											<Text ml="3em !important">{order.attributes.symbol}</Text>
											<Text ml="5em !important">Limit</Text>
											<Text color="#90D647" ml="7em !important">
												Buy
											</Text>
											<Text ml="7em !important">
												{pairs.length !== 0 && pairs.slice(-1)[0].c}
											</Text>
											<Text>{order.attributes.qty}</Text>
											<Text>{order.attributes['avg-fill-price']}</Text>
											<Text onClick={handleCancel} ml="6em !important">
												Cancel
											</Text>
										</HStack>
									);
								})}
							</Box>
						</Box>
					</Grid>
					<Grid gridTemplateColumns="1fr 1fr" bg="#1E2025">
						<Grid border="2px solid #37373B" gridTemplateRows="35% 35% 20%" bg="#1E2025">
							<Box padding="1em 2em" bg="#1E2025">
								<Flex mt="1em" textAlign="center" justifyContent="space-between" w="100%">
									<Text fontSize="1em" fontWeight="bold" color="#677D9B ">
										Close
									</Text>
									<Text fontSize="1em" fontWeight="bold" color="#677D9B ">
										Open
									</Text>
									<Text fontSize="1em" fontWeight="bold" color="#677D9B ">
										Low
									</Text>
								</Flex>
							</Box>
							<Box border="2px solid #37373B" borderLeft="none" borderRight="none">
								hello
							</Box>
							<Box padding="1em 2em" overflowY="scroll">
								{[ ...pairs ].splice(1, 30).map((pair) => {
									return (
										<Flex key={pair._id} textAlign="center" justifyContent="space-between" w="100%">
											<Text>{pair.c}</Text>
											<Text>{pair.o}</Text>
											<Text>{pair.l}</Text>
										</Flex>
									);
								})}
							</Box>
						</Grid>
						<Grid gridTemplateRows="20% 50% 30%">
							<Box border="2px solid #37373B" bg="#1E2025" borderRight="none !important" padding="2em">
								<Flex justifyContent="space-between">
									<Text fontSize="1.2em" fontWeight="bold">
										Purchase
									</Text>
									<Flex alignItems="center" fontSize="1em" fontWeight="bold">
										<span style={{ borderBottom: '1px solid #90D647', color: '#90D647' }}>VIP</span>
										<VStack spacing=".1em" ml="1em">
											<Box borderRadius="50px" bg="#fff" w="3px" h="3px" />
											<Box borderRadius="50px" bg="#fff" w="3px" h="3px" />
											<Box borderRadius="50px" bg="#fff" w="3px" h="3px" />
										</VStack>
									</Flex>
								</Flex>
								<ButtonGroup
									mt="2em"
									w="100%"
									size="md"
									isAttached
									variant="unstyled"
									borderRadius="10px"
									border="1px solid #2E3D2A"
								>
									<Button color="#90D647" w="100%" bg="#2B3D22">
										Buy
									</Button>
									<Button w="100%">Sell</Button>
								</ButtonGroup>
							</Box>
							<Box padding="2em">
								<Flex justifyContent="space-between">
									<Text fontSize="1em" fontWeight="bold" color="#90D647">
										Market
									</Text>
									<Text fontSize="1em" fontWeight="bold" color="#677D9B">
										Limit
									</Text>
								</Flex>

								<Formik
									enableReinitialize={true}
									initialValues={{
										symbol: 'AUD/USD',
										user_id: id,
										qty: 10000,
										take_profit: 0,
										avg_fill_price: currentPrice
									}}
									onSubmit={(values, { setSubmitting, resetForm }) => {
										setTimeout(() => {
											fetch('http://localhost:3000/api/v1/stock_purchases', {
												method: 'POST',
												headers: {
													'Content-Type': 'application/json'
												},
												body: JSON.stringify(values)
											})
												.then((res) => res.json())
												.then(({ data }) => {
													toast.success(`Order Filled - ${data.attributes.symbol}`);
													setOrders([ ...orders, data ]);
												})
												.catch((err) => console.error(err));

											setSubmitting(false);
											resetForm({
												symbol: '',
												qty: '',
												take_profit: ''
											});
										}, 400);
									}}
								>
									{({ isSubmitting, handleChange }) => (
										<Form>
											<Stack spacing="24px" mt="2em">
												<Box color="#677D9B">
													<HStack>
														<DollarSign size="1.2em" />
														<Text fontWeight="bold">
															{pairs.length !== 0 && pairs.slice(-1)[0].c} USD
														</Text>
													</HStack>
												</Box>
												<Input
													border="1px solid #677D9B  !important"
													h="40px"
													borderRadius="md"
													name="qty"
													type="number"
													step={1000}
													onChange={handleChange}
													defaultValue={10000}
												/>
												<Input
													border="1px solid #677D9B !important"
													bg="transparent !important"
													h="40px"
													type="number"
													disabled
													value={currentPrice}
													name="avg_fill_price"
													onChange={handleChange}
													placeholder="current price"
												/>
												<Button
													color="#90D647"
													w="100%"
													bg="#2B3D22"
													type="submit"
													disabled={isSubmitting}
												>
													Buy
												</Button>
											</Stack>
										</Form>
									)}
								</Formik>
							</Box>
							<Box border="1px solid #37373B">
								<Box padding="2em">
									<Text fontSize="1em" fontWeight="bold">
										Balance
									</Text>
									<HStack justifyContent="space-evenly" mt="1em">
										<Button bg="transparent" color=" #90D647" border="1px solid #90D647" w="100%">
											Deposit
										</Button>
										<Button bg="transparent" w="100%" color="#304226" border="1px solid #304226">
											withdrawal
										</Button>
									</HStack>
									<Box w="100%" mt="2em">
										<VStack>
											<Flex justifyContent="space-between" w="100%">
												<Text color="#677D9B ">Account:</Text>
												<Text>${}</Text>
											</Flex>
										</VStack>
									</Box>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Fragment>
	);
}

export default React.memo(DashBoard);
