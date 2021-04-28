import React from 'react';
import {
	Flex,
	HStack,
	Text,
	Box,
	Heading,
	Button,
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Stack,
	useDisclosure
} from '@chakra-ui/react';

// components
import { LoginForm } from './LoginForm';
import { SignForm } from './SignForm';

export function Navbar() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { isOpen: isOpen1, onOpen: onOpen1, onClose: onClose1 } = useDisclosure();
	const firstField = React.useRef();

	return (
		<Flex padding="2em" alignItems="center" justifyContent="space-between" w="100%" h="80px">
			<Box>
				<Heading>The Pit</Heading>
			</Box>
			<HStack ml="12%" spacing="34px">
				<Text>Home</Text>
				<Text>Price</Text>
				<Text>Blog</Text>
				<Text>About Us</Text>
			</HStack>
			<HStack spacing="34px">
				<Button bg="none" _hover={{ backgroundColor: 'none' }} onClick={onOpen}>
					Login
				</Button>
				<Drawer isOpen={isOpen} placement="right" initialFocusRef={firstField} onClose={onClose}>
					<DrawerOverlay>
						<DrawerContent bg="#4347E3">
							<DrawerCloseButton />
							<DrawerHeader borderBottomWidth="1px">Login</DrawerHeader>

							<DrawerBody>
								<Stack spacing="24px">
									<LoginForm />
								</Stack>
							</DrawerBody>
						</DrawerContent>
					</DrawerOverlay>
				</Drawer>
				<Button
					bg="#4347E3"
					width="162px"
					height="41px"
					_hover={{
						backgroundColor: '#0D1431 !important',
						border: '1px solid #4347E3'
					}}
					onClick={onOpen1}
				>
					Sign up
				</Button>
				<Drawer isOpen={isOpen1} placement="right" initialFocusRef={firstField} onClose={onClose1}>
					<DrawerOverlay>
						<DrawerContent bg="#4347E3">
							<DrawerCloseButton />
							<DrawerHeader borderBottomWidth="1px">Create a new account</DrawerHeader>

							<DrawerBody>
								<Stack spacing="24px">
									<SignForm />
								</Stack>
							</DrawerBody>
						</DrawerContent>
					</DrawerOverlay>
				</Drawer>
			</HStack>
		</Flex>
	);
}
