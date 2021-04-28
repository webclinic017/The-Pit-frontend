import { Grid, Box } from '@chakra-ui/react';

export default function DashBoard() {
	return (
		<Grid gridTemplateColumns="5% 1fr 5%">
			<Box h="100vh" bg="#0D1431" />
			<Grid gridTemplateRows="5% 1fr 5%" gridTemplateColumns="1fr" h="100vh" bg="#23a729">
				<Box w="100%" bg="#111839" />
				<Box w="100%" bg="#0D1431" />
				<Box w="100%" bg="#111839" />
			</Grid>
			<Box h="100vh" bg="#111839" />
		</Grid>
	);
}
