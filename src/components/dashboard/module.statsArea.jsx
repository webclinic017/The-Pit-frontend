import { Grid, HStack, Box, Flex, Input, Stack, ButtonGroup, Button, Text, VStack } from '@chakra-ui/react';
import { DollarSign } from 'react-feather';
import { Formik, Form } from 'formik';
import toast from 'react-hot-toast';

// charts
import { LineChart } from '../chart/LineChart';
import { PieChart } from '../chart/PieChart';
import { pieChartData } from '../chart/chartDataPoints';
import { lineChartData } from '../chart/chartDataPoints';

export function ModuleStatsArea({ pairs, id, currentPrice, setOrders, orders }) {
	return (
		<Grid gridTemplateColumns="1fr 1fr" bg="#1E2025">
			<Grid border="2px solid #37373B" gridTemplateRows="35% 35% 20%" bg="#1E2025">
				<Box padding="1em 2em" bg="#1E2025">
					<PieChart data={pieChartData} />
				</Box>
				<Box border="2px solid #37373B" borderLeft="none" borderRight="none">
					<LineChart data={lineChartData} />
				</Box>
				<Box padding="1em 2em" overflowY="scroll">
					{/* {[ ...pairs ].splice(1, 30).map((pair) => {
                    return (
                        <Flex key={pair._id} textAlign="center" justifyContent="space-between" w="100%">
                            <Text>{pair.c}</Text>
                            <Text>{pair.o}</Text>
                            <Text>{pair.l}</Text>
                        </Flex>
                    );
                })} */}
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
									<Button color="#90D647" w="100%" bg="#2B3D22" type="submit" disabled={isSubmitting}>
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
	);
}
