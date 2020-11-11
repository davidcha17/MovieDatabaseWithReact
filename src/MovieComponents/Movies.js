import { render } from '@testing-library/react'
import React from 'react'

import { Box, Flex, Heading, Image, Spacer } from "@chakra-ui/core";
import { StarIcon } from '@chakra-ui/icons';

import MovieCardComponent from './Movie'

function MoviesContainer({movieCard}) {

    // console.log(movieCard.imageUrl)
    console.log(movieCard)

    return (
        <Box p="4"
          mr="6"
          ml="6" 
          maxW="mx"
          display="flex" 
          alignItems="center"
          justifyContent="space-between" 
          borderWidth="5px"
          borderRadius="lg"
          borderColor="blue"
          >
          {/* this part is to create the container that will hold the movies */}

            <MovieCardComponent movieCard={movieCard} >
                movieCard={movieCard}
            </MovieCardComponent>

          </Box> 
    )
}

// for testing, I need to map out the components. Gotta pass the fetch to movies container then map out each instance.

export default MoviesContainer