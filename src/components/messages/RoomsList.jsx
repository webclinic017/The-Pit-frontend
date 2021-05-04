import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

export function RoomsList({ data }) {
	const { user } = useSelector((state) => state.users);

	const handleCreateRoomOrFindRoom = (e) => {
		const createOrFindRoomId = e.target.baseURI.split('')[e.target.baseURI.split('').length - 1];

		const payload = {
			current_user_id: user.id,
			user_DMs_id: parseInt(createOrFindRoomId)
		};

		fetch('http://localhost:5000/rooms', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(payload)
		});
	};

	const allRoomsButNotCurrentUser = data.filter((room) => String(room.id) !== String(user.id));

	return (
		<Box>
			{allRoomsButNotCurrentUser.map((room) => {
				return (
					<li key={room.id} onClick={handleCreateRoomOrFindRoom}>
						<Link to={`/dashboard/chatrooms/${room.id}`}>{room.attributes.name}</Link>
					</li>
				);
			})}
		</Box>
	);
}
