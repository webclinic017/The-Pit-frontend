import { Grid, HStack, Box, Flex, Input, Text } from '@chakra-ui/react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

export function ModuleChartArea({ abs, pairs, orders, handleCancel }) {
	return (
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
								<Flex key={index} textAlign="center" justifyContent="space-between" w="100%">
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
								<Text ml="7em !important">{pairs.length !== 0 && pairs.slice(-1)[0].c}</Text>
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
	);
}
