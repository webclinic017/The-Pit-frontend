import { Fragment } from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
export function ChatList({ chats }) {
	return (
		<ul>
			{chats.map((chat, index) => {
				console.log(chat);
				return (
					<Fragment key={index}>
						<Flex>
							<Box bg="#EF874C" w="40px" h="40px" borderRadius="50px" />
							<Heading color="#A9AEBD" mt=".3em" ml=".5em" fontSize="1.2em">
								{chat.username}
							</Heading>
						</Flex>
						<Text w="100%" ml="0em" paddingLeft="3.7em" mt=".5em">
							{chat.message}
						</Text>
					</Fragment>
				);
			})}
		</ul>
	);
}
