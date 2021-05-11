import { Component, Fragment } from 'react';
import Pusher from 'pusher-js';
import toast from 'react-hot-toast';
// component
import { Message } from './message';

export default class Room extends Component {
	constructor(props) {
		super(props);
		this.state = {
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
	}

	render() {
		return (
			<Fragment>
				{this.state.chats.map((chat, index) => {
					return <Message key={index} chat={chat} />;
				})}
			</Fragment>
		);
	}
}
