import { Fragment, useState } from 'react';
import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Box,
	Grid
} from '@chakra-ui/react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { Send } from 'react-feather';
import axios from 'axios';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
// component
import Room from '../messages/Room';

export function MessageDrawer({ isOpenTwo, onCloseTwo, btnTwoRef }) {
	const [ text, setText ] = useState('');
	const { user } = useSelector((state) => state.users);

	const handleSubmitMessage = () => {
		const payload = {
			text: text,
			username: user
		};
		axios
			.post('http://localhost:5000/message', payload)
			.then(function(response) {})
			.catch(function(error) {})
			.then(function(data) {
				console.log(data);
				setText('');
			});
	};

	return (
		<Fragment>
			<Drawer isOpen={isOpenTwo} placement="right" onClose={onCloseTwo} finalFocusRef={btnTwoRef} size="xl">
				<DrawerOverlay />
				<DrawerContent padding="none !important" bg="#23252A">
					<DrawerCloseButton />
					<DrawerHeader>The Pit Message</DrawerHeader>

					<DrawerBody padding="none !important">
						<Grid h="100%" gridTemplateColumns="20% 1fr" gridTemplateRows="1fr">
							<Box />
							<Grid h="100%" gridTemplateColumns="1fr" gridTemplateRows="1fr 25%">
								<Box overflowX="hidden" overflowY="scroll" padding="2em" maxHeight="650px">
									<Room />
								</Box>
								<Box position="relative" boxShadow="md" rounded="md" bg="white">
									<ReactQuill
										className="quill-message"
										style={{ height: '81%' }}
										theme="snow"
										value={text}
										onChange={setText}
									/>
									<Box
										transform="rotate(40deg)"
										position="absolute"
										bottom="5"
										right="5"
										cursor="pointer"
									>
										<Send onClick={handleSubmitMessage} size="1.2em" />
									</Box>
								</Box>
							</Grid>
						</Grid>
					</DrawerBody>

					<DrawerFooter />
				</DrawerContent>
			</Drawer>
		</Fragment>
	);
}
