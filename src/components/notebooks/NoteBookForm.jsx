import { Fragment, useState } from 'react';
import { Input } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Formik, Form } from 'formik';

export function NoteBookForm({ handleNewNoteBook }) {
	const [ payload, setPayload ] = useState([]);
	const { user } = useSelector((state) => state.users);

	const handleChangeText = (e) => {
		if (e.keyCode === 13) {
			const payload = {
				name: e.target.value,
				user_id: user.id,
				delete_object: false
			};

			return setPayload(payload);
		}
	};

	return (
		<Fragment>
			<Formik
				initialValues={{}}
				onSubmit={(values, { setSubmitting, resetForm }) => {
					setSubmitting(true);
					setTimeout(() => {
						fetch('http://localhost:3000/api/v1/note_books', {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json'
							},
							body: JSON.stringify(payload)
						})
							.then((res) => res.json())
							.then(({ data }) => {
								handleNewNoteBook(data);
							})
							.catch(console.log);

						resetForm();
						setSubmitting(false);
					}, 400);
				}}
			>
				{() => (
					<Form>
						<Input
							w="140px"
							border="none"
							bg="#37373B !important"
							h="40px"
							color="#677D9B"
							type="text"
							name="notebook"
							placeholder="new notebook"
							onKeyDown={handleChangeText}
							onChange={handleChangeText}
						/>
					</Form>
				)}
			</Formik>
		</Fragment>
	);
}
