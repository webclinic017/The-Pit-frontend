import { useRef, Fragment, useState, useEffect } from 'react';
import {
	Grid,
	Image,
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
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption
} from '@chakra-ui/react';
import Pusher from 'pusher-js';
import { HelpCircle, Bell, Settings, DollarSign } from 'react-feather';
import { Formik, Field, Form } from 'formik';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
// component
import { SideBar } from '../components/dashboard/SideBar';
import SmallChart from '../components/chart/SmallChart';
// image
import userImage from '../img/user.svg';

export default function DashBoard() {
	const [ pairs, setPairs ] = useState([]);
	const [ sorted, setSorted ] = useState([]);

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
				// setPairs(data);
			});

			if (_isMounted && pairs.length === 0) {
				fetch('http://localhost:5000/forex').then((res) => res.json()).then((data) => setPairs(data));
			}

			// setInterval(() => {
			// 	fetch('http://localhost:5000/forex').then((res) => res.json()).then((data) => setPairs(data));
			// }, 40000);

			/* 
				set the sorted
			*/
			const newSorted = pairs.map((tick) => tick.pair);
			setSorted(newSorted);

			return () => (_isMounted.current = false);
		},
		[ pairs.length, pairs ]
	);
	/* 
			unqiue array
		*/
	const selectSort = [ ...new Set(sorted) ];

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
							placeholder="USD/EUR"
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
									1.23454
								</Text>
								<Text color="#657A95" fontWeight="bold" mt="0 !important" fontSize=".8em">
									$1.23454
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
										1.34323
									</Text>
								</VStack>
							</Box>
							<Box>
								<VStack>
									<Text color="#657A95" fontWeight="bold" fontSize=".8em">
										24h Low
									</Text>
									<Text mt="0 !important" fontWeight="bold" color="#ffffff" fontSize=".8em">
										1.34323
									</Text>
								</VStack>
							</Box>
							<Box>
								<VStack>
									<Text color="#657A95" fontWeight="bold" fontSize=".8em">
										24h Volume
									</Text>
									<Text mt="0 !important" fontWeight="bold" color="#ffffff" fontSize=".8em">
										1.34323
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
									<Text color="#677D9B ">Last</Text>
									<Text color="#677D9B ">Change</Text>
								</Flex>
							</Box>
							<Box>
								<TradingViewWidget symbol="NASDAQ:AAPL" theme={Themes.DARK} locale="fr" autosize />
							</Box>
						</Grid>
						<Box padding="2em" border="2px solid #37373B">
							<HStack spacing="30px">
								<Text fontSize="1em" fontWeight="bold">
									Open Orders
								</Text>
								<Text fontSize="1em" fontWeight="bold">
									Order History
								</Text>
								<Text fontSize="1em" fontWeight="bold">
									Trade History
								</Text>
								<Text fontSize="1em" fontWeight="bold">
									Funds
								</Text>
								<Text fontSize="1em" fontWeight="bold">
									Staking Vault
								</Text>
								<Text fontSize="1em" fontWeight="bold">
									Activity
								</Text>
							</HStack>
							<Box mt="1em">
								<Table variant="unstyled">
									<Thead>
										<Tr>
											<Th>Date</Th>
											<Th>Price</Th>
											<Th>Type</Th>
											<Th>Side</Th>
											<Th>Price</Th>
											<Th>Amount</Th>
											<Th>Filled</Th>
											<Th>Total</Th>
											<Th>Tigger Conditions</Th>
										</Tr>
									</Thead>
									<Tbody>
										<Tr>
											<Td>inches</Td>
											<Td>millimetres (mm)</Td>
											<Td isNumeric>25.4</Td>
											<Td isNumeric>25.4</Td>
											<Td isNumeric>25.4</Td>
											<Td isNumeric>25.4</Td>
											<Td isNumeric>25.4</Td>
											<Td isNumeric>25.4</Td>
											<Td isNumeric>25.4</Td>
										</Tr>
									</Tbody>
								</Table>
							</Box>
						</Box>
					</Grid>
					<Grid gridTemplateColumns="1fr 1fr" bg="#1E2025">
						<Grid border="2px solid #37373B" gridTemplateRows="20% 50% 30%" bg="#1E2025">
							<Box>
								<Table variant="unstyled">
									<Thead>
										<Tr color=" #677D9B">
											<Th>Price(USD)</Th>
											<Th>Amount(BTC)</Th>
											<Th>Total</Th>
										</Tr>
									</Thead>
									<Tbody>
										<Tr bg="#462523" h="10px">
											<Td>1.2342</Td>
											<Td>0.0342</Td>
											<Td isNumeric>2341341</Td>
										</Tr>
									</Tbody>
								</Table>
							</Box>
							<Box>
								<Table variant="unstyled">
									<Thead>
										<Tr color=" #677D9B">
											<Th>7,234</Th>
										</Tr>
									</Thead>
									<Tbody>
										<Tr bg="#2B3D22" h="10px">
											<Td>1.2342</Td>
											<Td>0.0342</Td>
											<Td isNumeric>2341341</Td>
										</Tr>
									</Tbody>
								</Table>
							</Box>
							<Box border="2px solid #37373B" borderRight="none" borderLeft="none" borderBottom="none">
								<Table variant="unstyled">
									<Thead>
										<Tr color=" #677D9B">
											<Th>Price(USD)</Th>
											<Th>Amount(BTC)</Th>
											<Th>Total</Th>
										</Tr>
									</Thead>
									<Tbody>
										<Tr h="10px">
											<Td>1.2342</Td>
											<Td>0.0342</Td>
											<Td isNumeric>2341341</Td>
										</Tr>
									</Tbody>
								</Table>
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
									initialValues={{ email: '', password: '' }}
									onSubmit={(values, { setSubmitting }) => {
										setTimeout(() => {}, 400);
									}}
								>
									{({ isSubmitting, handleChange }) => (
										<Form>
											<Stack spacing="24px" mt="2em">
												<Box color="#677D9B">
													<HStack>
														<DollarSign size="1.2em" />
														<Text fontWeight="bold">.234231231 USD</Text>
													</HStack>
												</Box>
												<Input
													border="1px solid #677D9B !important"
													bg="transparent !important"
													h="40px"
													as={Input}
													type="text"
													name="price"
													onChange={handleChange}
													placeholder="Price"
												/>
												<Input
													border="1px solid #677D9B !important"
													bg="transparent !important"
													h="40px"
													as={Input}
													type="text"
													name="Amount"
													onChange={handleChange}
													placeholder="Amount"
												/>
												<Input
													border="1px solid #677D9B !important"
													bg="transparent !important"
													h="40px"
													as={Input}
													type="text"
													name="Total"
													onChange={handleChange}
													placeholder="Total"
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
											Deposit
										</Button>
									</HStack>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Fragment>
	);
}
