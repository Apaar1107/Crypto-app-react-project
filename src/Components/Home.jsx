import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import img from '../assets/btc.png'
import { animate, motion } from 'framer-motion'
const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} h={"85vh"} w={"full"}>
    <motion.div style={{
      height:"80vh",
    }}
     animate={{
      translateY:"18px"
    }}
    transition={{
      duration:3,
      repeat:Infinity,
      repeatType:"reverse"
      

    }}
    >
   <Image w={"full"} h={"full"} objectFit={"contain"} src={img} filter={"grayscale(1)"}/>
   </motion.div>
   <Text fontSize={"6xl"} textAlign={"center"} color={"whiteAlpha.700"} mt={"-20"} fontWeight={"thin"}>Xcrypto</Text>
    </Box>
  )
}

export default Home