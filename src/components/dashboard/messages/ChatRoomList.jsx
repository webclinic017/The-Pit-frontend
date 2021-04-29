import { useEffect, useContext, useState, Fragment } from 'react';
import { Box, Stack, Flex, Heading, Input, Grid } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// root
import { ActionCableContext } from '../../../index';

export function ChatRoomList() {
	const [ isOpen, setIsOpen ] = useState(false);

	return (
		<Box h="100vh" w="30%" bg="red">
			hello
		</Box>
	);
}
