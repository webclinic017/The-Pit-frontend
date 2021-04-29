import { useEffect } from 'react';
import { Box } from '@chakra-ui/react';

// components
import { MessageList } from '../components/dashboard/messages/MessageList';
import { ChatRoomList } from '../components/dashboard/messages/ChatRoomList';

export default function ChatRoom() {
	return (
		<Box>
			<ChatRoomList />
			<MessageList />
		</Box>
	);
}
