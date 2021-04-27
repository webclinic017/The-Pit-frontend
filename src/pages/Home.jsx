import { Box, Heading, Text, InputGroup, Button, Input, InputRightElement } from '@chakra-ui/react';

// component
import { Navbar } from '../components/partials/Navbar';

export default function Home() {
	return (
		<Box overflowX="hidden" h="130vh" bg="#0D1431">
			<Navbar />
			<Box
				position="absolute"
				top="-20"
				left="-10em"
				h="600px"
				w="600px"
				borderRadius="100%"
				border=" 80px solid #192053"
			/>
			<Box
				position="absolute"
				top="40"
				right="-10em"
				h="600px"
				w="600px"
				borderRadius="100%"
				border=" 60px solid #192053"
			/>
			<Box
				position="absolute"
				top="60"
				left="-17em"
				h="600px"
				w="600px"
				borderRadius="100%"
				bg="#0D1431"
				border=" 50px solid #141A48"
			/>
			<Box
				position="relative"
				zIndex="2"
				h="calc(100vh - 200px)"
				display="flex"
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
			>
				<Heading fontSize="
72px" textAlign="center">
					Secure Investing For<br />Everyday Trader
				</Heading>
				<Text fontSize="
18px" textAlign="center" mt="2em">
					The Pit is a place to track performance, take notes and<br /> find the right opportunity to invest.
				</Text>

				<InputGroup borderRadius="10px" mt="2em" w="30%" border=".1px solid #485067">
					<Input
						bg="#151C38"
						borderRadius="10px"
						h="54px"
						className="home-input"
						type="text"
						placeholder="Enter your email"
					/>
					<InputRightElement right="-1em" top="5.5px" width="9.5rem">
						<Button
							bg="#4347E3"
							h="2.4rem"
							size="sm"
							_hover={{
								backgroundColor: '#151C38 !important',
								border: '1px solid #4347E3'
							}}
						>
							Get Started
						</Button>
					</InputRightElement>
				</InputGroup>
			</Box>
		</Box>
	);
}
