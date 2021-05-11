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
	Grid,
	Input,
	Text,
	Heading
} from '@chakra-ui/react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { Link } from 'react-router-dom';

// components
import { NoteBookForm } from '../notebooks/NoteBookForm';
import { NoteBookList } from '../notebooks/NoteBookList';
import { NoteList } from '../notebooks/NoteList';

export function NoteBookDrawer({ isOpen, onClose, btnRef }) {
	const [ text, setText ] = useState('');
	const [ newNoteBook, setNewNoteBook ] = useState([]);
	const [ notes, setNotes ] = useState([]);

	const handleNewNoteBook = (newnotebook) => {
		setNewNoteBook([ newnotebook ]);
	};

	const handleOnClickNoteBook = (e) => {
		const noteBookId = e.target.baseURI.split('/')[e.target.baseURI.split('/').length - 1];

		fetch(`http://localhost:3000/api/v1/note_books/${noteBookId}`)
			.then((res) => res.json())
			.then(({ included }) => {
				console.log(notes);
				console.log(included);
				setNotes(included);
			});
	};

	const handleNoteEdit = (e) => {
		const noteId = e.target.baseURI.split('/')[e.target.baseURI.split('/').length - 1];

		fetch(`http://localhost:3000/api/v1/notes/${noteId}`).then((res) => res.json()).then(({ data }) => {
			setText(data.attributes.paragraph);
		});
	};

	return (
		<Fragment>
			<Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef} size="xl">
				<DrawerOverlay />
				<DrawerContent padding="none !important" bg="#23252A">
					<DrawerCloseButton />
					<DrawerHeader>The Pit Notes</DrawerHeader>

					<DrawerBody padding="none !important">
						<Grid gridTemplateColumns="20% 30% 1fr" h="100%">
							<Grid justifyContent="center" gridTemplateRows="8% 1fr">
								<Box>
									<NoteBookForm handleNewNoteBook={handleNewNoteBook} />
								</Box>
								<Box pl=".5em">
									<Heading mb="1em" fontSize="1.2em" fontWeight="bold">
										NoteBooks
									</Heading>
									<NoteBookList
										handleOnClickNoteBook={handleOnClickNoteBook}
										newNoteBook={newNoteBook[0]}
									/>
								</Box>
							</Grid>
							<Box bg="#7a7a7e" padding=".5em" overflowY="scroll">
								{typeof notes !== 'undefined' &&
									notes.map((note) => {
										return (
											<Link to={`/dashboard/notes/${note.id}`}>
												<NoteList handleNoteEdit={handleNoteEdit} key={note.id} note={note} />
											</Link>
										);
									})}
							</Box>
							<Box>
								<ReactQuill className="quill-notebook" theme="snow" value={text} onChange={setText} />
							</Box>
						</Grid>
					</DrawerBody>

					<DrawerFooter />
				</DrawerContent>
			</Drawer>
		</Fragment>
	);
}
