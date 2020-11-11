import React from 'react'

import { Box, Flex, Image, Spacer } from "@chakra-ui/core";
import { StarIcon } from '@chakra-ui/icons';

function MovieCardComponent({movieCard}) {

    console.log(movieCard)
    // passing props down to the singular component does not render or pass

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

// {
//   "popularity": 2766.111,
//   "vote_count": 62,
//   "video": false,
//   "poster_path": "/ugZW8ocsrfgI95pnQ7wrmKDxIe.jpg",
//   "id": 724989,
//   "adult": false,
//   "backdrop_path": "/86L8wqGMDbwURPni2t7FQ0nDjsH.jpg",
//   "original_language": "en",
//   "original_title": "Hard Kill",
//   "genre_ids": [
//     28,
//     53
//   ],
//   "title": "Hard Kill",
//   "vote_average": 4.4,
//   "overview": "The work of billionaire tech CEO Donovan Chalmers is so valuable that he hires mercenaries to protect it, and a terrorist group kidnaps his daughter just to get it.",
//   "release_date": "2020-10-23"
// }
// this is the available instance from a singular movie card, what we need for this is poster_path, title, vote_average, overview, release_date
export default MovieCardComponent