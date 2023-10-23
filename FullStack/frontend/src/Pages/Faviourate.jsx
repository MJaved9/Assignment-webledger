import RestaurantCard from "../Components/RestaurantsCard";
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
  Button
} from "@chakra-ui/react";
import {useEffect, useState} from "react"
const Faviourate = () => {
  const [data,setData]=useState()
  const token=localStorage.getItem("token");
  const fav=JSON.parse(localStorage.getItem("fav"));
  console.log("FAvv",fav)
  useEffect(()=>{
    setData(fav)
  },[])

  if(token){
    return (
      <Box p={4}>
        <Heading as="h1" size="2xl" mb={8}>
          Discover Nearby Restaurants
        </Heading>  
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
          {data ? data.map((ele) => (
            <RestaurantCard key={ele.id} {...ele} />
          )):null}
        </SimpleGrid>
      </Box>
    )
  }
  else{
    return(
      <Box>
        <Heading>
          Login First.....
        </Heading>
      </Box>
    )
  }
}

export default Faviourate 