import React from 'react';

import { Box, Flex, Heading, Image, Spacer } from "@chakra-ui/core";
// able to utilize flexbox from charka

import { StarIcon } from '@chakra-ui/icons';


class App extends React.Component {
  
  state = {
    movies: {},
    pageNumber: 1,
    movieCategory: "now_playing"
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/${this.state.movieCategory}?api_key=ed00f0c03bd42e17810b8f28af633a1d&language=en-US&page=${this.state.pageNumber}`)
    .then(r => r.json()) 
    .then(obj => {
      this.setState({
        movies: obj.results
      })
    })
  }
  
  render() {
    console.log(this.state.movies)

    const movieCard = {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRtv_pUWGOUQ99R-iPpU_uLCKGNAtkxUaBBTw&usqp=CAU",
      imageAlt: "someAlt",
      movieTitle: "someTitle",
      year: "2020",
      rating: "8"
    }
    
    return (
      
        <div>
          <Heading>Movie Home Page</Heading>
          {/* <Flex bg="grey"> */}
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
          </Box>
          {/* </Flex> */}
        </div>
    
    
    );

  }
}


    const movieCard = {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRtv_pUWGOUQ99R-iPpU_uLCKGNAtkxUaBBTw&usqp=CAU",
      imageAlt: "someAlt",
      movieTitle: "someTitle",
      year: "2020",
      rating: "8"
    }
  
 

export default App;
