import { Box, Heading, Flex } from '@chakra-ui/react';
import Moment from 'react-moment';
import moment from 'moment';
import { Markup } from 'interweave';

export function Message({ chat }) {
	const currentDate = moment().format('YYYY-MM-DD HH:mm:ss');
	return (
		<Box m="2em 0">
			<Flex alignItems="center" mb="1em">
				<Box h="30px" w="30px" bg="#5e6168" borderRadius="50px" />
				<Heading mr="1em" ml=".5em" fontSize="1em" fontWeight="bold">
					{chat.username.name}
				</Heading>
				<time style={{ color: '#706e6e' }}>
					<Moment date={currentDate} />
				</time>
			</Flex>
			<Box>
				<Markup content={`${chat.text}`} />
			</Box>
		</Box>
	);
}
