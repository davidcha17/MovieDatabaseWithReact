import logo from './logo.svg';
import './App.css';

import { Box, Flex, Spacer } from "@chakra-ui/core";
// able to utilize flexbox from charka

function App() {
  return (
    <div>
      <h1>Movie Front Page</h1>
      <Flex>
        <Spacer />
          <Box p="3" w="150px" h="80px" color="blue" >
          {/* intellisense = ctrl + space */}
            Movie 1
          </Box> 
          <Spacer />
          <Box w="150px" h="80px" >
            Movie 2
          </Box> 
          <Spacer />
          <Box w="150px" h="80px" >
            Movie 3
          </Box> 
          <Spacer />
          <Box w="150px" h="80px" >
            Movie 4
          </Box> 
          <Spacer />
          <Box w="150px" h="80px" >
            Movie 5
          </Box>  
          <Spacer />
      </Flex>
    </div>
  );
}

export default App;
