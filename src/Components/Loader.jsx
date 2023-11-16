import { Box, HStack, Spinner} from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <HStack justifyContent={"center"} h={"90vh"}>
      <Box transform={"scale(3)"}>
         <Spinner size={"xl"}/>

         
      </Box>
    </HStack>
  )
}

export default Loader