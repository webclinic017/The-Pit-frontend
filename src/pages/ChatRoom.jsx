import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Formik, Form, Field } from 'formik';
import { Grid, Box, Stack, Flex, FormControl, Text, Textarea, Button, Heading } from '@chakra-ui/react';

const socket = io('ws://localhost:3030/', {
	transports: [ 'websocket' ],
	upgrade: false
});

export default function ChatRoom() {
	const [ messages, setMessages ] = useState([]);

	useEffect(
		() => {
			socket.on('message', (msg) => {
				setMessages([ ...messages, msg ]);
			});

			return () => {
				socket.on('disconnect', () => {
					socket.removeAllListeners();
				});
			};
		},
		[ messages ]
	);

	console.log(messages);

	const wrapperAllMessages = messages.map((message, index) => <Message msg={message.text} key={index} />);

	return (
		<Grid h="100vh" gridTemplateColumns="4% 25% 1fr 1fr" bg="#9e9d9d">
			<Box h="100%" bg="#0D1431" />
			<Box h="100%" bg="#111839">
				<Heading>ChatRoom</Heading>
			</Box>
			<Grid gridTemplateRows="1fr 25%" justifyContent="center" h="100vh" bg="#0D1431">
				<Box bg="#0D1431">{wrapperAllMessages}</Box>
				<Formik
					initialValues={{ text: '' }}
					onSubmit={(values, { setSubmitting, resetForm }) => {
						setTimeout(() => {
							// sending the message to the server
							socket.emit('chatMessage', values);
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
			</Grid>
			<Box>hello</Box>
		</Grid>
	);
}

export function Message({ msg }) {
	return (
		<Box bg="red" m="1em">
			<Flex>
				<Box bg="#EF874C" w="50px" h="50px" borderRadius="50px" />
				<Heading ml=".5em" fontSize="1.2em">
					nick
				</Heading>
			</Flex>
			<Text bg="green" w="100%" ml="0em" paddingLeft="3.7em" mt=".5em">
				{msg}
			</Text>
		</Box>
	);
}
