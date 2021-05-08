import { Fragment } from 'react';
import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Input,
	Button,
	Stack,
	FormControl,
	Flex
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { LogOut } from 'react-feather';
import { useHistory } from 'react-router-dom';

import { PATCH_CURRENT_USER } from '../../redux/actions/types';
// utils
import { isLogin, logout } from '../../utils/detect-auth';

export function SettingsDrawer({ isOpenOne, onCloseOne, btnOneRef }) {
	const { user } = useSelector((state) => state.users);
	const dispatch = useDispatch();
	const history = useHistory();

	const handleLogout = () => {
		logout();
		history.push('/');
	};

	const handleDeleteProfile = () => {
		fetch('http://localhost:3000/api/v1/currentuser', {
			method: 'DELETE'
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				logout();
				history.push('/');
			});
	};

	return (
		<Fragment>
			<Drawer isOpen={isOpenOne} placement="right" onClose={onCloseOne} finalFocusRef={btnOneRef}>
				<DrawerOverlay />
				<DrawerContent padding="none !important" bg="#2B3D22">
					<DrawerCloseButton />
					<DrawerHeader>Account</DrawerHeader>

					<DrawerBody>
						<Formik
							initialValues={{ name: user.name, email: user.email, balance: user.balance }}
							onSubmit={(values, { setSubmitting }) => {
								setTimeout(() => {
									fetch('http://localhost:3000/api/v1/currentuser', {
										method: 'PATCH',
										headers: {
											'Content-Type': 'application/json',
											Authorization: `Bearer ${isLogin()}`
										},
										body: JSON.stringify(values)
									})
										.then((res) => res.json())
										.then((data) => {
											dispatch({ type: PATCH_CURRENT_USER, payload: data });
										});
								}, 400);
							}}
						>
							{({ values, isSubmitting, handleChange }) => (
								<Form>
									<Stack spacing="24px" mt="2em">
										<FormControl>
											<Field
												className="form-input"
												as={Input}
												type="text"
												name="name"
												value={values.name}
												onChange={handleChange}
												placeholder="name"
											/>
										</FormControl>
										<FormControl>
											<Field
												as={Input}
												type="text"
												value={values.email}
												name="email"
												onChange={handleChange}
												placeholder="email"
											/>
										</FormControl>
										<FormControl>
											<Field
												className="form-input"
												as={Input}
												type="text"
												value={(values.balance = 100000)}
												name="balance"
												onChange={handleChange}
												placeholder="balance"
											/>
										</FormControl>
										<Button bg="#23252A" type="submit" disabled={isSubmitting}>
											update profile
										</Button>
									</Stack>
								</Form>
							)}
						</Formik>
					</DrawerBody>

					<DrawerFooter>
						<Flex w="100%" justifyContent="space-between" alignItems="center">
							<Button onClick={handleDeleteProfile} bg="#324629">
								delete profile
							</Button>
							<LogOut size="1.2em" onClick={handleLogout} />
						</Flex>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</Fragment>
	);
}
