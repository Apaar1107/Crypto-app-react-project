import { Avatar, Box, Button, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
   <Box color={"whiteAlpha.700"} bgColor={"blackAlpha.800"} minH={"48"} px={"16"} py={["16","8"]}>
         
         <Stack direction={["column","row"]} h={"full"} justifyContent={"space-between"} alignItems={"center"}>
                 
                 <VStack w={"ful"} alignItems={["center","flex-start"]}>
                    <Text fontWeight={"bold"}>About</Text>
                    <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center","left"]}>We are the best crypto trading app in India, and we provide our guidance at very minimal prices</Text>
                 </VStack> 
                 <VStack>
                  <Avatar boxSize={"28"} mt={["4","0"]}/>
                  <Text>Our Founder</Text>
                 </VStack>
         </Stack>
        
   </Box>
  )
}

export default Footer