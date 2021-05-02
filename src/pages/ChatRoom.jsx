import { Component } from 'react';
import { Grid, Box, Text, Image, Flex, Heading, Stack, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import axios from 'axios';
import Pusher from 'pusher-js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// components
import { ChatList } from './messages/ChatList';
import { ChatBox } from './messages/ChatBox';
import { NewRoomForm } from './messages/NewRoomForm';
// images
import chatImage from '../img/chat.svg';
import curveImage from '../img/curves.svg';
import bookImage from '../img/book.svg';
import homeImage from '../img/homepage.svg';
class ChatRoom extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			username: '',
			chats: [],
			rooms: [],
			private_rooms: [],
			tickers: []
		};
	}

	componentDidMount() {
		const username = 'link';
		this.setState({ username });

		const pusher = new Pusher(`b8f20a3d52d39b9262c2`, {
			cluster: 'us2',
			encrypted: true
		});

		const channel = pusher.subscribe('chat');
		const ticker = pusher.subscribe('ticker');

		channel.bind('message', (data) => {
			this.setState({ chats: [ ...this.state.chats, data ] });
		});

		ticker.bind('tick', (data) => {
			this.setState({ tickers: [ ...this.state.tickers, data ] });
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

	handleNewRoomForm = (e) => {
		if (e.keyCode === 13) {
			console.log(e.target.value);
			const payload = {
				username: this.state.username,
				message: this.state.text
			};
			axios.post('http://localhost:5000/message', payload);
		}
	};

	render() {
		return (
			<Grid h="100vh" gridTemplateColumns="5% 20% 1fr 1fr" bg="#9e9d9d">
				<Stack spacing="54px" alignItems="center" padding="1em" h="100%" bg="#0D1431">
					<Link to="/dashboard">
						<Image src={curveImage} w="40px" />
					</Link>
					<Link to="/dashboard">
						<Image src={homeImage} w="25px" />
					</Link>
					<Link to="/dashboard/chatrooms">
						<Image src={chatImage} w="25px" />
					</Link>
					<Link to="/dashboard/notebook">
						<Image src={bookImage} w="25px" />
					</Link>
				</Stack>
				<Flex flexDirection="column" padding="1em" h="100%" bg="#111839">
					<Stack spacing="34px">
						<NewRoomForm handleNewRoomForm={this.handleNewRoomForm} />
						<Box>
							<Heading fontSize="1em" color="#485067">
								FAVORITE
							</Heading>
						</Box>
						<Box>
							<Heading fontSize="1em" color="#485067">
								DIRECT MESSAGES
							</Heading>
						</Box>
						<Box>
							<Heading fontSize="1em" color="#485067">
								GROUPS
							</Heading>
						</Box>
					</Stack>
				</Flex>
				<Grid gridTemplateRows="10% 1fr 14%" h="100vh" bg="#0D1431">
					<Stack spacing="10px" bg="#151C38" padding="1em">
						<Heading fontSize="1em">Nick</Heading>
						<Text color="#485067">2 member</Text>
					</Stack>
					<Grid padding="1em" w="100%" bg="#0D1431" h="100%" overflowY="scroll" overflowX="hidden">
						<ChatList chats={this.state.chats} />
					</Grid>
					<Box padding="1em">
						<ChatBox
							text={this.state.text}
							username={this.state.username}
							handleTextChange={this.handleTextChange}
						/>
					</Box>
				</Grid>
				<Grid bg="#0D1431" gridTemplateRows="15% 80% 5%" h="100vh">
					<Stack bg="#151C38" padding=".5em" spacing="24px">
						<Heading pl=".6em" mt=".5em" fontSize="1.7em" color="#c9ccd3">
							List of Currencies
						</Heading>
						<Box>
							<Table variant="unstyled">
								<Thead>
									<Tr color="#485067">
										<Th>symbol</Th>
										<Th>ask</Th>
										<Th>bid</Th>
									</Tr>
								</Thead>
							</Table>
						</Box>
					</Stack>
					<Box h="100%">
						<Box h="100%" overflowX="hidden" overflowY="auto !important">
							<Table variant="unstyled">
								<Tbody>
									{this.state.tickers.length ? (
										this.state.tickers.map((tick, index) => (
											<Tr key={index} borderBottom="1px solid  #485067">
												<Td>{tick.p}</Td>
												<Td isNumeric>{tick.a}</Td>
												<Td isNumeric>{tick.b}</Td>
											</Tr>
										))
									) : (
										<Tr />
									)}
								</Tbody>
							</Table>
						</Box>
					</Box>
					<Box bg="#0D1431" />
				</Grid>
			</Grid>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.user
});

export default connect(mapStateToProps)(ChatRoom);
