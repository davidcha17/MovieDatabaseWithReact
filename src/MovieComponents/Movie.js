import React from 'react'

import { Box, Flex, Heading, Image, Spacer } from "@chakra-ui/core";
import { StarIcon } from '@chakra-ui/icons';

function MovieCard({movieCard}) {

    console.log(movieCard)

    return(
        <div>
            {/* <Spacer /> */}
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={movieCard.imageUrl} alt={movieCard.imageAlt} />
    
              <Box p="6" >
                {/* <Box d="flex" alignItems="baseline"> */}
                  <Box mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated 
                  >
                  {/* intellisense = ctrl + space */}
                    {movieCard.movieTitle} ({movieCard.year})
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
                      {movieCard.rating} rating
                    </Box>
                  {/* </Box> */}
                </Box>
              </Box>
            </Box>
            {/* lines 36 to 66 holds information about a singular movie component */}
              <Spacer />
    
            <Box> 
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
              {/* <Spacer /> */}
              
              {/* <Box>
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
        </div>
    )
}

export default MovieCard