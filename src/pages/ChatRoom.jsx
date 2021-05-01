import { Component } from 'react';
import { Grid, Box, Flex, Heading, Stack, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import axios from 'axios';
import { FiMessageCircle } from '@react-icons/all-files/fi/FiMessageCircle';
import Pusher from 'pusher-js';
import { ChatList } from './messages/ChatList';
import { ChatBox } from './messages/ChatBox';

export default class ChatRoom extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			username: '',
			chats: []
		};
	}

	componentDidMount() {
		const username = 'link';
		this.setState({ username });
		const pusher = new Pusher(`${process.env.REACT_APP_KEY}`, {
			cluster: 'us2',
			encrypted: true
		});
		const channel = pusher.subscribe('chat');
		channel.bind('message', (data) => {
			this.setState({ chats: [ ...this.state.chats, data ], test: '' });
		});
		this.handleTextChange = this.handleTextChange.bind(this);
	}

	handleTextChange(e) {
		if (e.keyCode === 13) {
			const payload = {
				username: this.state.username,
				message: this.state.text
			};
			axios.post('http://localhost:5000/message', payload);
		} else {
			this.setState({ text: e.target.value });
		}
	}

	render() {
		return (
			<Grid h="100vh" gridTemplateColumns="8% 20% 1fr 1fr" bg="#9e9d9d">
				<Flex flexDirection="column" justifyContent="center" padding="1em" h="100%" bg="#0D1431">
					<Heading fontSize="1.3em">Pit</Heading>
					<Box>
						<FiMessageCircle />
					</Box>
				</Flex>
				<Flex justifyContent="center" padding="1em" h="100%" bg="#111839">
					<Heading>ChatRoom</Heading>
				</Flex>
				<Grid padding="1em" gridTemplateRows="1fr 14%" h="100vh" bg="#0D1431">
					<Grid w="100%" bg="#0D1431" h="100%" overflowY="scroll" overflowX="hidden">
						<ChatList chats={this.state.chats} />
					</Grid>
					<Box>
						<ChatBox
							text={this.state.text}
							username={this.state.username}
							handleTextChange={this.handleTextChange}
						/>
					</Box>
				</Grid>
				<Grid bg="#111839" gridTemplateRows="15% 1fr" h="100%">
					<Stack bg="#0D1431" padding=".5em" spacing="24px">
						<Heading>List of Currencies</Heading>
						<Box>
							<Table variant="simple">
								<Thead>
									<Tr>
										<Th>symbol</Th>
										<Th>last</Th>
										<Th>chg</Th>
										<Th>chg%</Th>
									</Tr>
								</Thead>
							</Table>
						</Box>
					</Stack>
					<Box>
						<Table variant="simple">
							<Tbody>
								<Tr>
									<Td>inches</Td>
									<Td>millimetres (mm)</Td>
									<Td isNumeric>25.4</Td>
									<Td isNumeric>25.4</Td>
								</Tr>
								<Tr>
									<Td isNumeric>25.4</Td>
									<Td>feet</Td>
									<Td>centimetres (cm)</Td>
									<Td isNumeric>30.48</Td>
								</Tr>
								<Tr>
									<Td isNumeric>25.4</Td>
									<Td>yards</Td>
									<Td>metres (m)</Td>
									<Td isNumeric>0.91444</Td>
								</Tr>
							</Tbody>
						</Table>
					</Box>
				</Grid>
			</Grid>
		);
	}
}
