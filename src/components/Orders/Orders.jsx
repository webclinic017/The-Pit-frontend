import { Fragment } from 'react';
import {
	HStack,
	Text,
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Stack,
	Box,
	Input
} from '@chakra-ui/react';

import { Formik, Form } from 'formik';

export function Orders({ order, price }) {
	const { isOpen: isOpenTwo, onOpen: onOpenTwo, onClose: onCloseTwo } = useDisclosure();

	return (
		<Fragment>
			<HStack key={order.id} spacing="90px" m="1em">
				<Text color="#677D9B ">{order.attributes['created-at'].split('T')[0]}</Text>
				<Text ml="3em !important">{order.attributes.symbol}</Text>
				<Text ml="5em !important">Limit</Text>
				<Text color="#90D647" ml="7em !important">
					Buy
				</Text>
				<Text ml="7em !important">{typeof price !== 'undefined' && price.c}</Text>
				<Text>{order.attributes.qty}</Text>
				<Text>{order.attributes['avg-fill-price']}</Text>
				<Button bg="#22242b" onClick={onOpenTwo} ml="6em !important">
					Cancel
				</Button>
			</HStack>
			<Modal isCentered onClose={onCloseTwo} isOpen={isOpenTwo} motionPreset="slideInBottom">
				<ModalOverlay />
				<ModalContent bg="#24272c">
					<ModalHeader />
					<ModalCloseButton />
					<ModalBody>
						<Formik
							enableReinitialize={true}
							initialValues={{
								symbol: 'AUD/USD',
								user_id: '',
								qty: 10000,
								take_profit: 0,
								avg_fill_price: ''
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
											console.log(data);
											// toast.success(`Order Filled - ${data.attributes.symbol}`);
											// setOrders([ ...orders, data ]);
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
												<Text fontWeight="bold" />
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
											value={''}
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
											Take Profit
										</Button>
									</Stack>
								</Form>
							)}
						</Formik>
					</ModalBody>
					<ModalFooter>
						<Button bg="transparent" mr={3} onClick={onCloseTwo}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Fragment>
	);
}
