import { useParams } from 'react-router-dom';

export function RoomsItem() {
	const { id } = useParams();

	return <div>chatroom area</div>;
}
