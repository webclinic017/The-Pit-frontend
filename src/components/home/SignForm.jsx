import React, { Fragment } from 'react';
import { Formik, Form, Field } from 'formik';
import { Input, Button, Stack } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// redux
import { signupUser } from '../../redux/actions/users';

export function SignForm() {
	const dispatch = useDispatch();
	const history = useHistory();
	return (
		<Fragment>
			<Formik
				initialValues={{ name: '', email: '', password: '' }}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						dispatch(signupUser(values, history, setSubmitting));
					}, 400);
				}}
			>
				{({ isSubmitting, handleChange }) => (
					<Form>
						<Stack spacing="24px">
							<Field as={Input} type="text" name="name" onChange={handleChange} placeholder="name" />
							<Field as={Input} type="email" name="email" onChange={handleChange} placeholder="email" />
							<Field
								as={Input}
								type="password"
								name="password"
								onChange={handleChange}
								placeholder="password"
							/>
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
