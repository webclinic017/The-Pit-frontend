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

export function Navbar() {
	const { isOpen, onOpen, onClose } = useDisclosure();
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
						<DrawerContent>
							<DrawerCloseButton />
							<DrawerHeader borderBottomWidth="1px">Create a new account</DrawerHeader>

							<DrawerBody>
								<Stack spacing="24px" />
							</DrawerBody>

							<DrawerFooter borderTopWidth="1px">
								<Button variant="outline" mr={3} onClick={onClose}>
									Cancel
								</Button>
								<Button colorScheme="blue">Submit</Button>
							</DrawerFooter>
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
				>
					Sign up
				</Button>
			</HStack>
		</Flex>
	);
}
