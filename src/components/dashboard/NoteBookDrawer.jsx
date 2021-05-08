import { Fragment, useRef } from 'react';
import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Box,
	Grid,
	Input,
	Text,
	Heading
} from '@chakra-ui/react';

export function NoteBookDrawer({ isOpen, onClose, btnRef }) {
	return (
		<Fragment>
			<Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef} size="xl">
				<DrawerOverlay />
				<DrawerContent padding="none !important" bg="#23252A">
					<DrawerCloseButton />
					<DrawerHeader>Pit Note</DrawerHeader>

					<DrawerBody padding="none !important">
						<Grid gridTemplateColumns="20% 30% 1fr" h="100%">
							<Grid justifyContent="center" gridTemplateRows="8% 1fr">
								<Box>
									<Input
										w="140px"
										border="none"
										bg="#37373B !important"
										h="40px"
										color="#677D9B"
										type="text"
										name="search"
										placeholder="new notebook"
									/>
								</Box>
								<Box pl=".5em">
									<Heading mb="1em" fontSize="1.2em" fontWeight="bold">
										NoteBooks
									</Heading>
									<Box>USD/EUR</Box>
								</Box>
							</Grid>
							<Box bg="#37373B" padding=".5em" overflowY="scroll" ov>
								<Box
									boxShadow="md"
									p="6"
									rounded="md"
									bg="#23252A"
									padding="1em"
									h="200px"
									w="100%"
									borderRadius="5px"
									mt="1em"
									mb="1em"
								>
									<Heading mb="1em" fontSize="1.2em" fontWeight="bold">
										The pit is going up
									</Heading>
									<Text fontSize=".9em" color="#ccc5c5">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequatur
										voluptatum provident quae. Ipsa odit tempora
									</Text>
								</Box>
							</Box>
							<Box />
						</Grid>
					</DrawerBody>

					<DrawerFooter />
				</DrawerContent>
			</Drawer>
		</Fragment>
	);
}
