import { Box, Heading, Text } from '@chakra-ui/react';
export function NoteList({ note, handleNoteEdit }) {
	return (
		<Box
			onClick={handleNoteEdit}
			boxShadow="md"
			p="6"
			rounded="md"
			bg="#616168"
			padding="1em"
			h="200px"
			w="100%"
			borderRadius="5px"
			mt="1em"
			mb="1em"
		>
			<Heading mb="1em" fontSize="1.2em" fontWeight="bold">
				{note.attributes.name}
			</Heading>
			<Text fontSize=".9em" color="#eee8e8">
				{note.attributes.paragraph}
			</Text>
		</Box>
	);
}
