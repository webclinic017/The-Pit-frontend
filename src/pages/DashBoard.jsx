import { useState, Fragment } from 'react';
import { Grid, Box, Heading, Flex, Input, Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const variants = {
	open: {
		opacity: 1,
		x: 0,
		position: 'absolute',
		top: 0,
		left: '3%',
		zIndex: 2,
		height: '100vh',
		width: '17rem',
		backgroundColor: '#111839'
	},
	closed: {
		x: '-100%',
		position: 'absolute',
		top: 0,
		left: 0,
		zIndex: -1,
		height: '100vh',
		width: '0rem',
		backgroundColor: '#111839'
	}
};
const variantsRight = {
	open: {
		opacity: 1,
		x: 0,
		position: 'absolute',
		top: 0,
		right: '3%',
		zIndex: -1,
		height: '100vh',
		width: '20rem',
		backgroundColor: '#0D1431'
	},
	closed: {
		x: '0%',
		position: 'absolute',
		top: 0,
		right: 0,
		zIndex: -1,
		height: '100vh',
		width: '20rem',
		backgroundColor: '#0D1431'
	}
};

const opacityOn = {
	open: {
		opacity: 1
	},
	close: {
		opacity: 0
	}
};

export default function DashBoard() {
	const [ isOpen, setIsOpen ] = useState(false);
	const [ isOpenRight, setIsOpenRight ] = useState(false);

	return (
		<Fragment>
			<Grid gridTemplateColumns={isOpen ? '314px 1fr 314px' : '4% 1fr 4%'}>
				<Box h="100vh" w={'100%'} bg="#0D1431">
					<Flex flexDirection="column" padding="1em">
						<Box
							h="20px"
							bg="red"
							position="relative"
							zIndex={2}
							w="20px"
							onClick={() => setIsOpen((isOpen) => !isOpen)}
						/>
					</Flex>
					<motion.div layout variants={variants} animate={isOpen ? 'open' : 'closed'}>
						<Box padding="2em">
							<motion.div variants={opacityOn} animate={isOpen ? 'open' : 'closed'}>
								<Input type="text" bg="#151C38" border="2px solid #485067 !mportant" />
								<Stack spacing="24px" mt="4em">
									<Heading fontSize="1em">FAVORITE</Heading>
									<Heading fontSize="1em">DIRECT MESSAGES</Heading>
									<Heading fontSize="1em">GROUP</Heading>
								</Stack>
							</motion.div>
						</Box>
					</motion.div>
				</Box>
				<Grid gridTemplateRows="4% 1fr 4%" h="100vh" bg="#0D1431" w="100%">
					<Box bg="#111839" />
					<Box />
					<Box bg="#111839" />
				</Grid>
				<Box position="absolute" bg="#111839" h="100vh" w="4%" top="0" right="0">
					<Flex padding="1em">
						<Box
							h="20px"
							bg="red"
							position="relative"
							zIndex={2}
							w="20px"
							onClick={() => setIsOpenRight((isOpenRight) => !isOpenRight)}
						/>
					</Flex>
					<motion.div layout variants={variantsRight} animate={isOpenRight ? 'open' : 'closed'} />
				</Box>
			</Grid>
		</Fragment>
	);
}
