import React from 'react';

import { Box, Flex, Heading, Image, Spacer } from "@chakra-ui/core";
// able to utilize flexbox from charka

import { StarIcon } from '@chakra-ui/icons';
import MoviesContainer from './MovieComponents/Movies';


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

  // now that the fetch is working, I need to be able to flip through pages
  
  render() {
    console.log(this.state.movies, "fetch a list of movies")
    
    const movieCard = {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRtv_pUWGOUQ99R-iPpU_uLCKGNAtkxUaBBTw&usqp=CAU",
      imageAlt: "someAlt",
      movieTitle: "someTitle",
      year: "2020",
      rating: "8"
    }
    
    // console.log(movieCard, "movie test card")

    return (
      
        <div>
          <Heading>Movie Home Page</Heading>
          <MoviesContainer movies={this.state.movies} movieCard={movieCard} />
        </div>
    
    
    );

  }
}


export default App;
