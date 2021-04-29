import { useContext, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// root
import { ActionCableContext } from '../../../index';

export function MessageList() {
	const cable = useContext(ActionCableContext);
	const [ channel, setChannel ] = useState(null);

	const conversationId = 1;
	const userId = 1;

	useEffect(
		() => {
			const channel = cable.subscriptions.create({
				channel: 'MessagesChannel',
				id: 1
			});

			setChannel(channel);

			console.log(channel);
			return () => {
				channel.unsubscribe();
			};
		},
		[ cable.subscriptions ]
	);

	// const sendMessage = (content) => {
	// 	const data = { conversationId, userId, content };
	// 	channel.send(data);
	// };

	return (
		<div>
			{/* {renderedMessages} */}
			{/* <Editor sendMessage={sendMessage} /> */}
		</div>
	);
}
