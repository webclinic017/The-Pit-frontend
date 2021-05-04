import { Stack, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

// images
import chatImage from '../../img/chat.svg';
import curveImage from '../../img/curves.svg';
import bookImage from '../../img/book.svg';
import homeImage from '../../img/homepage.svg';

export function SideBar() {
	return (
		<Stack spacing="54px" alignItems="center" padding="1em" h="100%" bg="#141822">
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
	);
}
