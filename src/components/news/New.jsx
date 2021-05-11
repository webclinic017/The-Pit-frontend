import { Fragment } from 'react';
import {
	Box,
	Flex,
	Button,
	Text,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Heading,
	Badge,
	Image
} from '@chakra-ui/react';
export function New({ news }) {
	const { isOpen: isOpenTwo, onOpen: onOpenTwo, onClose: onCloseTwo } = useDisclosure();

	return (
		<Fragment>
			<Box onClick={onOpenTwo} borderRadius="5px" bg="#24272c" w="100%" h="80px" padding=".5em" cursor="pointer">
				<Flex mb=".4em" justifyContent="space-between" alignItems="center">
					<Heading w="200px" fontSize=".8em" fontWeight="bold">
						{news.title}
					</Heading>
					<Badge
						bg={
							news.sentiment === 'Negative' ? (
								'#E53E3E'
							) : news.sentiment === 'Positive' ? (
								'#48BB78'
							) : (
								'#EDF2F7'
							)
						}
						alignSelf="start"
					>
						{news.sentiment}
					</Badge>
				</Flex>
				<Text fontSize=".7em">{news.date}</Text>
			</Box>
			<Modal isCentered onClose={onCloseTwo} isOpen={isOpenTwo} motionPreset="slideInBottom">
				<ModalOverlay />
				<ModalContent bg="#24272c">
					<ModalHeader>
						<Heading maxWidth="300px" fontSize=".8em" fontWeight="bold">
							{news.title}
						</Heading>
						<Badge
							bg={
								news.sentiment === 'Negative' ? (
									'#E53E3E'
								) : news.sentiment === 'Positive' ? (
									'#48BB78'
								) : (
									'#EDF2F7'
								)
							}
							alignSelf="start"
						>
							{news.sentiment}
						</Badge>
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Image mb="1em" borderRadius="10px" src={news.image_url} alt={news.title} />
						<Text>{news.text}</Text>
					</ModalBody>
					<ModalFooter>
						<Button bg="transparent" mr={3} onClick={onCloseTwo}>
							Close
						</Button>
						<Button bg="#33363b">
							<a href={`${news.news_url}`} target="_blank" rel="noreferrer">
								go to article
							</a>
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Fragment>
	);
}
