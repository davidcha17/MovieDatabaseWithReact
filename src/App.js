import logo from './logo.svg';
import './App.css';

import { Box, Flex, Image, Spacer } from "@chakra-ui/core";
// able to utilize flexbox from charka

import { StarIcon } from '@chakra-ui/icons'


function App() {

  const movieCard = {
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRtv_pUWGOUQ99R-iPpU_uLCKGNAtkxUaBBTw&usqp=CAU",
    imageAlt: "someAlt",
    movieTitle: "someTitle",
    year: "2020",
    rating: "8"
  }

  return (

    <div>
      <h1>Movie Front Page</h1>
      <Flex>
        <Spacer />
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src={movieCard.imageUrl} alt={movieCard.imageAlt} />

          <Box mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated 
          >
          {/* intellisense = ctrl + space */}
            {movieCard.movieTitle}
          </Box>

          <Box>
            {movieCard.year}
          </Box> 

          <Box d="flex" mt="2" alignItems="center">
            {Array(10)
            .fill("")
            .map(( _ , i ) => (
              <StarIcon
                key={i}
                color={i < movieCard.rating ? "teal.500" : "gray.300" }
              />
            ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {movieCard.rating} reviews
            </Box>
          </Box>
        </Box>
          <Spacer />

        {/* <Box> 
        <Image src={movieCard.imageUrl} alt={movieCard.imageAlt} />
          <Box w="150px" h="80px" >
            Movie 2
          </Box> 
        </Box>
          <Spacer />

        <Box>
        <Image src={movieCard.imageUrl} alt={movieCard.imageAlt} />
          <Box w="150px" h="80px" >
            Movie 3
          </Box> 
        </Box>
          <Spacer />
          
          <Box>
          <Image src={movieCard.imageUrl} alt={movieCard.imageAlt} />
            <Box w="150px" h="80px" >
              Movie 4
            </Box> 
          </Box>
            <Spacer />
          
          <Box>
          <Image src={movieCard.imageUrl} alt={movieCard.imageAlt} />
            <Box w="150px" h="80px" >
              Movie 5
            </Box>  
          </Box>
            <Spacer /> */}
      </Flex>
    </div>

  );

}

export default App;
