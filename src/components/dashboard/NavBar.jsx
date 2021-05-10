import { Fragment, useRef } from 'react';
import { HelpCircle, Bell, Settings, Book, MessageCircle } from 'react-feather';
import {
	HStack,
	Select,
	Heading,
	Box,
	Flex,
	Button,
	Text,
	VStack,
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverHeader,
	PopoverBody,
	PopoverArrow,
	PopoverCloseButton,
	useDisclosure
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

// component
import { NoteBookDrawer } from './NoteBookDrawer';
import { SettingsDrawer } from './SettingsDrawer';
import { MessageDrawer } from './MessageDrawer';
import { NotificationsDrawer } from './NotificationsDrawer';
export function NavBar({ pairs, selectSort, handleGlobalChange }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { isOpen: isOpenOne, onOpen: onOpenOne, onClose: onCloseOne } = useDisclosure();
	const { isOpen: isOpenTwo, onOpen: onOpenTwo, onClose: onCloseTwo } = useDisclosure();
	const { isOpen: isOpenThree, onOpen: onOpenThree, onClose: onCloseThree } = useDisclosure();
	const btnRef = useRef();
	const btnOneRef = useRef();
	const btnTwoRef = useRef();
	const btnThreeRef = useRef();
	const { user } = useSelector((state) => state.users);

	let average = (array) => array.reduce((a, b) => a + b) / array.length;
	let avgHigh = pairs.map((pair) => parseFloat(pair.h));
	let avgLow = pairs.map((pair) => parseFloat(pair.l));
	let close = pairs.map((pair) => parseFloat(pair.c));
	let avgVolume;

	if (close.length !== 0) {
		avgVolume =
			average(close) * parseFloat([ ...pairs ].splice(-1, 1)[0].s) / parseFloat([ ...pairs ].splice(-1, 1)[0].s);
	}

	return (
		<Flex
			borderBottom="2px solid #37373B"
			padding="1em 2em"
			justifyContent="space-between"
			alignItems="center"
			bg="#23252A"
		>
			<Flex alignItems="center">
				<Heading mr="2em" as="h2" fontSize="1.2em">
					The Pit
				</Heading>
				<Select
					fontSize=".9em"
					fontWeight="bold"
					w="120px"
					bg="transparent"
					borderColor="transparent"
					color="white"
					onChange={handleGlobalChange}
					placeholder="AUD/USD"
				>
					{selectSort.map((pair) => {
						return (
							<Fragment key={pair}>
								<option value={pair}>{pair}</option>
							</Fragment>
						);
					})}
				</Select>
				<HStack ml="2em" spacing="34px">
					<VStack>
						<Text fontWeight="bold" color="#D3504C" fontSize=".8em">
							{pairs.length !== 0 && pairs.slice(-1)[0].c}
						</Text>
						<Text color="#657A95" fontWeight="bold" mt="0 !important" fontSize=".8em">
							${pairs.length !== 0 && pairs.slice(-1)[0].c}
						</Text>
					</VStack>
					<Box>
						<VStack>
							<Text color="#657A95" fontWeight="bold" fontSize=".8em">
								24h Change
							</Text>
							<Text mt="0 !important" fontWeight="bold" color="#66A03E" fontSize=".8em">
								{pairs.length !== 0 && (average(close) * 100 / 10).toFixed(5)}%
							</Text>
						</VStack>
					</Box>
					<Box>
						<VStack>
							<Text color="#657A95" fontWeight="bold" fontSize=".8em">
								24h High
							</Text>
							<Text mt="0 !important" fontWeight="bold" color="#ffffff" fontSize=".8em">
								{pairs.length !== 0 && average(avgHigh).toFixed(5)}
							</Text>
						</VStack>
					</Box>
					<Box>
						<VStack>
							<Text color="#657A95" fontWeight="bold" fontSize=".8em">
								24h Low
							</Text>
							<Text mt="0 !important" fontWeight="bold" color="#ffffff" fontSize=".8em">
								{pairs.length !== 0 && average(avgLow).toFixed(5)}
							</Text>
						</VStack>
					</Box>
					<Box>
						<VStack>
							<Text color="#657A95" fontWeight="bold" fontSize=".8em">
								24h Volume
							</Text>
							<Text mt="0 !important" fontWeight="bold" color="#ffffff" fontSize=".8em">
								{pairs.length !== 0 && avgVolume.toFixed(5)}
							</Text>
						</VStack>
					</Box>
				</HStack>
			</Flex>
			<Flex alignItems="center">
				<HStack spacing="25px" mr="3em">
					<Popover>
						<PopoverTrigger>
							<Button
								bg="none"
								outline="none !important"
								border="none"
								_hover={{ outline: 'none', backgroundColor: 'none' }}
								_active={{ outline: 'none', backgroundColor: 'none' }}
							>
								<HelpCircle size="1.2em" />
							</Button>
						</PopoverTrigger>
						<PopoverContent bg="#37373B" color="#fff !important" border="none" outline="none">
							<PopoverArrow />
							<PopoverCloseButton />
							<PopoverHeader>What is The Pit?</PopoverHeader>
							<PopoverBody>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi doloribus nesciunt
								ullam odit veritatis vel expedita earum, amet eum nemo hic, voluptas, architecto
								mollitia sed qui explicabo quaerat ut. Itaque
							</PopoverBody>
						</PopoverContent>
					</Popover>
					<MessageCircle size="1.2em" ref={btnTwoRef} onClick={onOpenTwo} style={{ cursor: 'pointer' }} />
					<MessageDrawer isOpenTwo={isOpenTwo} onCloseTwo={onCloseTwo} btnTwoRef={btnTwoRef} />

					<Book size="1.2em" ref={btnRef} onClick={onOpen} style={{ cursor: 'pointer' }} />
					<NoteBookDrawer isOpen={isOpen} onClose={onClose} btnRef={btnRef} />

					<Bell size="1.2em" ref={btnThreeRef} onClick={onOpenThree} style={{ cursor: 'pointer' }} />
					<NotificationsDrawer
						isOpenThree={isOpenThree}
						onCloseThree={onCloseThree}
						btnThreeRef={btnThreeRef}
					/>

					<Settings size="1.2em" onClick={onOpenOne} btnOneRef={btnOneRef} style={{ cursor: 'pointer' }} />
					<SettingsDrawer isOpenOne={isOpenOne} onCloseOne={onCloseOne} btnOneRef={btnOneRef} />
				</HStack>
				<Flex alignItems="center">
					<Heading fontSize="1em" mr="1em">
						{user.name}
					</Heading>
					<Box bg="#3fa859" h="30px" w="30px" borderRadius="50px" />
				</Flex>
			</Flex>
		</Flex>
	);
}
