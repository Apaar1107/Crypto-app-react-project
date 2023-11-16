import { Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const CardCoin = ({id,name,img,price,symbol,url,currencySymbol}) => {
  return (
  <a href={`/coin/${id}`} target='blank'>
    
    <VStack w={"52"} shadow={"lg"} borderRadius={"xl"} m={"4"} transition={"all 0.3s"}
    css={{
        "&:hover":{
            transform:"scale(1.1)"
        }
    }}
    >
    <Image src={img} target={"blank"} h={10} w={10} objectFit={"contain"} alt='Exchanges' />
     <Heading size={"md"} noOfLines={1}>{symbol}</Heading>
     <Text noOfLines={1}>{name}</Text>
     <Text noOfLines={1}> {price? `${currencySymbol}${price}`:"Na"}</Text>
    </VStack>

  </a>
  )
}

export default CardCoin