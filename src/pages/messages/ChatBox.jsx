import { Fragment } from 'react';
import { Input } from '@chakra-ui/react';

export function ChatBox({ text, handleTextChange }) {
	return (
		<Fragment>
			<Input
				color="#fff"
				type="text"
				value={text}
				h="100%"
				bg="#151C38"
				placeholder="let's talk..."
				border="1px solid #485067 !important"
				onChange={handleTextChange}
				onKeyDown={handleTextChange}
			/>
		</Fragment>
	);
}
