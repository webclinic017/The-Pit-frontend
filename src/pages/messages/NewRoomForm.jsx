import { useState, useEffect } from 'react';
import { Input, Box, Stack } from '@chakra-ui/react';

export function NewRoomForm({ handleNewRoomForm }) {
	const [ friend, setFriend ] = useState('');
	const [ allUser, setAllUser ] = useState([]);
	const [ displayBox, setDisplayBox ] = useState(false);

	useEffect(() => {
		fetch('http://localhost:3000/api/v1/users').then((res) => res.json()).then((users) => {
			const usersNames = users.data.map((name) => name.attributes.name);
			return setAllUser(usersNames);
		});
	}, []);

	const handleNewFriend = (e) => {
		setFriend(e.target.value);
	};

	const displayPerson = allUser.filter((person) => person.toLowerCase().includes(friend.toLowerCase()));

	handleNewRoomForm(friend);

	return (
		<Box position="relative">
			<Input
				type="text"
				value={friend}
				onChange={handleNewFriend}
				onKeyDown={handleNewRoomForm}
				onFocus={() => setDisplayBox(!displayBox)}
				border="1px solid #485067 !important"
				bg="#151C38"
				placeholder="search for a friend..."
			/>
			<Box
				display={displayBox ? 'block' : 'none'}
				borderBottomLeftRadius="0.375rem"
				borderBottomRightRadius="0.375rem"
				w="100%"
				position="absolute"
				bg="#151C38"
				padding="2em 2em 3em 2em"
			>
				<ul>
					<Stack spacing="24px">
						{displayPerson.map((person, index) => {
							return <li key={index}>{person}</li>;
						})}
					</Stack>
				</ul>
			</Box>
		</Box>
	);
}
