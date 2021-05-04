import { Component } from 'react';
import { Grid, Box, Text, Image, Flex, Heading, Stack, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
// components
import { Rooms } from '../components/messages/Rooms';
import { RoomsItem } from '../components/messages/RoomsItem';
// images
import chatImage from '../img/chat.svg';
import curveImage from '../img/curves.svg';
import bookImage from '../img/book.svg';
import homeImage from '../img/homepage.svg';

export default function ChatRoom() {
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
					<Box>
						<Heading fontSize="1em" color="#485067">
							DIRECT MESSAGES
						</Heading>
						<Box mt="1em">
							<Rooms />
						</Box>
					</Box>
				</Stack>
			</Flex>
			<RoomsItem />
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
							<Tbody />
						</Table>
					</Box>
				</Box>
				<Box bg="#0D1431" />
			</Grid>
		</Grid>
	);
}
