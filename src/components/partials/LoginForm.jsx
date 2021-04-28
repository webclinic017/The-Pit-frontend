import React, { Fragment, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { useHistory } from 'react-router-dom';
import { FormControl, Input, Button, Stack } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
// redux
import { loginUser } from '../../redux/slices/userSlice';

export function LoginForm() {
	const history = useHistory();
	const dispatch = useDispatch();

	return (
		<Fragment>
			<Formik
				initialValues={{ email: '', password: '' }}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						dispatch(loginUser(values, history, setSubmitting));
					}, 400);
				}}
			>
				{({ isSubmitting, handleChange }) => (
					<Form>
						<Stack spacing="24px" mt="2em">
							<FormControl>
								<Field
									className="form-input"
									as={Input}
									type="email"
									name="email"
									onChange={handleChange}
									placeholder="email"
								/>
							</FormControl>
							<FormControl>
								<Field
									as={Input}
									type="password"
									name="password"
									onChange={handleChange}
									placeholder="password"
								/>
							</FormControl>
							<Button bg="#0D1431" type="submit" disabled={isSubmitting}>
								Submit
							</Button>
						</Stack>
					</Form>
				)}
			</Formik>
		</Fragment>
	);
}
