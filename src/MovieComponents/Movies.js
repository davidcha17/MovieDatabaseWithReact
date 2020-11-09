import { render } from '@testing-library/react'
import React from 'react'

import { Box, Flex, Heading, Image, Spacer } from "@chakra-ui/core";
import { StarIcon } from '@chakra-ui/icons';

import MovieCard from './Movie'

function MoviesContainer({movieCard}) {

    // console.log(movieCard.imageUrl)
    // console.log(movieCard)

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

            <MovieCard>
                {movieCard={movieCard}}
            </MovieCard>

          </Box> 
    )
}

export default MoviesContainer