import { Fragment } from 'react';
import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton
} from '@chakra-ui/react';

export function NotificationsDrawer({ isOpenThree, onCloseThree, btnThreeRef }) {
	return (
		<Fragment>
			<Drawer isOpen={isOpenThree} placement="right" onClose={onCloseThree} finalFocusRef={btnThreeRef}>
				<DrawerOverlay />
				<DrawerContent padding="none !important" bg="#2B3D22">
					<DrawerCloseButton />
					<DrawerHeader>Account</DrawerHeader>

					<DrawerBody>hello</DrawerBody>

					<DrawerFooter />
				</DrawerContent>
			</Drawer>
		</Fragment>
	);
}
