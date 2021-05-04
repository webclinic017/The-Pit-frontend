import { Fragment } from 'react';
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
	VStack
} from '@chakra-ui/react';
import { HelpCircle, Bell, Settings } from 'react-feather';
import { Formik, Field, Form } from 'formik';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
// component
import { SideBar } from '../components/dashboard/SideBar';
import SmallChart from '../components/chart/SmallChart';
// image
import userImage from '../img/user.svg';

export default function DashBoard() {
	return (
		<Fragment>
			<Grid h="100vh" gridTemplateRows="8% 1fr">
				<Flex
					borderBottm="3px solid #ccc"
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
						/>
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
				<Grid gridTemplateColumns="1fr 40%">
					<Box bg="red" />
					<Grid gridTemplateColumns="1fr 1fr" bg="#1E2025">
						<Box bg="blue" />
						<Grid gridTemplateRows="20% 30% 50%">
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
												<Input
													className="form-input"
													as={Input}
													type="email"
													name="email"
													onChange={handleChange}
													placeholder="email"
												/>
												<Input
													as={Input}
													type="password"
													name="password"
													onChange={handleChange}
													placeholder="password"
												/>
												<Button bg="#0D1431" type="submit" disabled={isSubmitting}>
													Submit
												</Button>
											</Stack>
										</Form>
									)}
								</Formik>
							</Box>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Fragment>
	);
}
