import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

// component
import { RoomsList } from './RoomsList';

export function Rooms() {
	const [ data, setData ] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/api/v1/users').then((res) => res.json()).then((data) => setData(data.data));
	}, []);

	return (
		<Box>
			<RoomsList data={data} />
		</Box>
	);
}
