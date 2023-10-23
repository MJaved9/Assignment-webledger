import { useState, useEffect } from "react";
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
import axios from "axios";
import { useSearchParams } from "react-router-dom";
const apiKey = process.env.api_key;
// Sample restaurant data
// const restaurants = [
//   {
//     id: 1,
//     name: 'Restaurant One',
//     cuisine: 'Italian',
//     image: 'https://b.zmtcdn.com/data/pictures/8/19531958/7983d5dea9d4f10958c46a03cfe9f724_featured_v2.jpg',
//     rating: 4.5,
//     location: '123 Main St',
//   },
//   {
//     id: 2,
//     name: 'Restaurant Two',
//     cuisine: 'Mexican',
//     image: 'https://b.zmtcdn.com/data/pictures/8/19531958/7983d5dea9d4f10958c46a03cfe9f724_featured_v2.jpg',
//     rating: 4.2,
//     location: '456 Elm St',
//   },
//   {
//     id: 3,
//     name: 'Restaurant Three',
//     cuisine: 'Japanese',
//     image: 'https://b.zmtcdn.com/data/pictures/8/19531958/7983d5dea9d4f10958c46a03cfe9f724_featured_v2.jpg',
//     rating: 4.8,
//     location: '789 Oak St',
//   },
//   // Add more restaurant data as needed
// ];

const HomePage = () => {
  
  const [data, setData] = useState([]);
  const token=localStorage.getItem("token");
  console.log(token)

  useEffect(() => {
    const fetData = async () => {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=5d5154af21054019887bee9d5db9443e`
      );
      setData(res.data.results);
      console.log("HI", res.data.results);
    };
    fetData();
  }, []);
  if(token){
    return (
      <Box p={4}>
        <Heading as="h1" size="2xl" mb={8}>
          Discover Nearby Restaurants
        </Heading>
  
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
          {data.map((ele) => (
            <RestaurantCard key={ele.id} {...ele} />
          ))}
        </SimpleGrid>
      </Box>
    );
  }
  else{
    return (
      <Box p={4}>
        <Heading as="h1" size="2xl" mb={8}>
        Login First.....
        </Heading>
  
      </Box>
    );
  }
 
};

export default HomePage;
