import { useEffect, useState } from 'react';
import { Grid, HStack, Box, Flex, Input, Text, Heading } from '@chakra-ui/react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import { MainChart } from '../chart/MainChart';
import { Orders } from '../Orders/Orders';

export function ModuleChartArea({ abs, pairs, orders, chartData }) {
	const [ losers, setLosers ] = useState([]);

	useEffect(() => {
		fetch(
			`https://api.polygon.io/v2/snapshot/locale/global/markets/forex/gainers?&apiKey=${process.env
				.REACT_APP_PLOYGON}`
		)
			.then((res) => res.json())
			.then(({ tickers }) => {
				setLosers(tickers);
			});
	}, []);

	return (
		<Grid gridTemplateRows="70% 30%">
			<Grid gridTemplateColumns="28% 1fr">
				<Box padding="2em">
					<Flex justifyContent="space-between" alignItems="center">
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
						<Heading fontSize="1em" fontWeight="bold">
							Losers
						</Heading>
					</Flex>
					<Flex mt="1em" textAlign="center" justifyContent="space-between" w="100%">
						<Text color="#677D9B ">Pair</Text>
						<Text color="#677D9B ">High</Text>
						<Text color="#677D9B ">Low</Text>
						<Text color="#677D9B ">Chg%</Text>
					</Flex>
					<Box mt="1em" h="100%" maxHeight="450px" overflowY="scroll" overflowX="hidden">
						{losers.map((askBid, index) => {
							return (
								<Flex key={index} textAlign="center" justifyContent="space-between" w="100%">
									<Text color="#fff">{askBid.ticker.split(':')[1]}</Text>
									<Text color="#fff">{askBid.day.h.toFixed(2)}</Text>
									<Text color="#C85740">{askBid.day.l.toFixed(2)}</Text>
									<Text color="#90D647 ">{askBid.todaysChangePerc.toFixed(2)}</Text>
								</Flex>
							);
						})}
					</Box>
				</Box>
				<Box alignSelf="end">
					<Box>
						<Heading fontSize="1em" fontWeight="bold">
							Minute Chart
						</Heading>
					</Box>
					<MainChart data={chartData} />
					{/* <TradingViewWidget symbol="AUD/USD" theme={Themes.DARK} locale="fr" autosize /> */}
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
						return <Orders order={order} price={chartData[chartData.length - 1]} />;
					})}
				</Box>
			</Box>
		</Grid>
	);
}
