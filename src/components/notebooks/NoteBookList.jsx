import { Fragment, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export function NoteBookList({ newNoteBook, handleOnClickNoteBook }) {
	const { user } = useSelector((state) => state.users);
	const [ notebooks, setNoteBooks ] = useState([]);

	useEffect(
		() => {
			fetch('http://localhost:3000/api/v1/note_books').then((res) => res.json()).then(({ data }) => {
				let result = [];

				data.map((notebook) => {
					if (notebook.attributes['user-id'] === user.id) {
						return result.push(notebook);
					}
					return result;
				});
				setNoteBooks(result);
			});

			if (typeof newNoteBook !== 'undefined' && newNoteBook[0]) {
				setNoteBooks((prevNoteBook) => [ ...prevNoteBook, newNoteBook[0] ]);
			}
		},
		[ user.id, newNoteBook ]
	);

	return (
		<Fragment>
			{notebooks.map((notebook) => {
				return (
					<Link to={`/dashboard/notebooks/${notebook.id}`}>
						<Box onClick={handleOnClickNoteBook} m="1em 0" key={notebook.id} cursor="pointer">
							{notebook.attributes.name}
						</Box>
					</Link>
				);
			})}
		</Fragment>
	);
}
