import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Formik, Form, Field } from 'formik';
import { useSelector } from 'react-redux';
import { Grid, Box, Stack, Flex, FormControl, Text, Textarea, Button, Heading } from '@chakra-ui/react';

const socket = io('ws://localhost:3030/', {
	transports: [ 'websocket' ],
	upgrade: false
});

export default function ChatRoom() {
	const [ messages, setMessages ] = useState([]);
	const { user } = useSelector((state) => state);

	useEffect(() => {
		socket.on('chat-message', (msg) => {
			setMessages((prev) => [ ...prev, msg ]);
		});
	}, []);

	console.log(messages);

	const wrapperAllMessages = messages.map((message, index) => <Message msg={message.text} key={index} />);

	return (
		<Grid h="100vh" gridTemplateColumns="4% 25% 1fr 1fr" bg="#9e9d9d">
			<Box h="100%" bg="#0D1431" />
			<Flex justifyContent="center" padding="1em" h="100%" bg="#111839">
				<Heading>ChatRoom</Heading>
			</Flex>
			<Grid gridTemplateRows="1fr 25%" justifyContent="center" h="100vh" bg="#0D1431">
				<Box bg="#0D1431" h="100%" overflowY="scroll" overflowX="hidden">
					{wrapperAllMessages}
				</Box>
				<Box justifySelf="center">
					<Formik
						initialValues={{ text: '' }}
						onSubmit={(values, { setSubmitting, resetForm }) => {
							setTimeout(() => {
								// sending the message to the server
								socket.emit('send-chat-message', values);
								resetForm();
							}, 400);
						}}
					>
						{({ isSubmitting, handleChange }) => (
							<Form>
								<Stack w="400px" spacing="24px" mt="2em">
									<FormControl>
										<Field
											as={Textarea}
											type="text"
											name="text"
											onChange={handleChange}
											placeholder="message here"
										/>
									</FormControl>
									<Button bg="#111839" type="submit" disabled={isSubmitting}>
										Submit
									</Button>
								</Stack>
							</Form>
						)}
					</Formik>
				</Box>
			</Grid>
			<Box>hello</Box>
		</Grid>
	);
}

export function Message({ msg }) {
	return (
		<Box m="1em">
			<Flex>
				<Box bg="#EF874C" w="40px" h="40px" borderRadius="50px" />
				<Heading mt=".3em" ml=".5em" fontSize="1.2em">
					nick
				</Heading>
			</Flex>
			<Text w="100%" ml="0em" paddingLeft="3.7em" mt=".5em">
				{msg}
			</Text>
		</Box>
	);
}
