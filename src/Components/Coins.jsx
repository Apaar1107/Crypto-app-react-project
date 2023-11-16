import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { server } from '..';
import { Button, Container, HStack, Radio, RadioGroup,  } from '@chakra-ui/react';
import Loader from './Loader';

import Error from './Error';
import CardCoin from './CardCoin';

const Coins = () => {
    const btn=Array(132).fill(1);
     const [coins , setCoins]=useState([]);
     const [loading ,setLoading]=useState(true);
     const [error,setError]=useState(false)
     const [page,setPage]=useState(1);
     const [currency,setCurrency]=useState("inr")
     const currencySymbol = currency==="inr"? "₹" :currency==="eur"?"€":"$";
     function changePage(p)
     {
        setPage(p);
        setLoading(true);
     }
    useEffect(()=>{
         

        const fetchCoins=async()=>{
          try{
            const {data}= await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
            setCoins(data);
            setLoading(false);
          }
          catch(error){
             setError(true);
             setLoading(false);
          }

        }
        fetchCoins();
    },[{currency},{page}])

    if(error) return <Error/>
    
  return (

    <Container maxW={"container.xl"}>

 {loading ? <Loader/>:<>
       
       <RadioGroup value={currency} onChange={setCurrency}>
          <HStack>
            <Radio value='inr'>Inr</Radio>
            <Radio value='usd'>Usd</Radio>
            <Radio value='eur'>Eur</Radio>
          </HStack>
       </RadioGroup>
      <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
    {coins.map((i)=>(<CardCoin
    name={i.name} 
    img={i.image} 
    symbol={i.symbol}
    price={i.current_price}
    id={i.id}
    url={i.url}
    currencySymbol={currencySymbol}
    
    key={i.id} 
   />)
   )}   
    </HStack>
    
    <HStack overflowX={"auto"}>
       {btn.map((item,index)=>(<Button
        bgColor={"blackAlpha.900"} 
        color={"white"}

         onClick={()=>changePage(index+1)}>
            {index+1}
        </Button>))}
    </HStack>
 </>
 }

    </Container>
  )
}

export default Coins;