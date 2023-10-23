import {useState} from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Badge,
  Stack,
  useDisclosure,
  Spacer,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
export default function  RestaurantCard ({ id,title, cuisine, image}) {
  var rating=4.5||4.1||3.8
  var location="india"
  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );


  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayTwo/>);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleBox=(id,title,image)=>{
    const payload={id,title,image,rating,location}
    setSelectedItem(payload)
    setOverlay(<OverlayTwo/>)
    onOpen()
  }
  var ls=JSON.parse(localStorage.getItem("fav"))||[];
  const Addtofav=()=>{
    let payload={id,title,image,rating}
    ls.push(payload)
    localStorage.setItem("fav",JSON.stringify(ls))
    alert("Addded")
  }
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      transition="transform 0.2s"
      _hover={{ transform: 'scale(1.05)' }}
    >
      <Image src={image} alt={title} onClick={()=>handleBox(id,title,image)}/>

      <Box p="4">
        <Heading as="h2" size="md" fontWeight="semibold">
          {title}
        </Heading>
        <Text fontSize="sm" color="gray.500">
          {cuisine}
        </Text>

        <Stack direction="row" align="center" mt="2">
          <Badge colorScheme="green">{rating}</Badge>
          <Text fontSize="sm" color="gray.500"> 
            {location}
          </Text>
          <Text><AiOutlineHeart color="red" width="5px" onClick={()=>Addtofav()} /></Text>
        </Stack>
      </Box>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Recepie Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedItem && (
              <Stack>
                <Image src={selectedItem.image}></Image>
                <Text>Name: {selectedItem.title}</Text>
                <Text>ID: {selectedItem.id}</Text>
                <Text>Additional Info:HI we Will Update Soon...</Text>
              </Stack>
            )}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
