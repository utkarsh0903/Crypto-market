import { Image } from '@chakra-ui/image'
import { Box, Text } from '@chakra-ui/layout'
import React from 'react'
import bitcoin from "../assests/btc.png"
import {motion} from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <motion.div style={{
        height:"80vh",
      }} 
      animate={{
        translateY:"20px"
      }}
      transition={{
        duration:2,
        repeat:Infinity,
        repeatType:"reverse",
      }}
      >
      <Image w={"full"} h={"76vh"} objectFit={"contain"} src={bitcoin} filter={"grayscale(1)"} />
      </motion.div>
      <Text fontSize={"6xl"} textAlign={"center"} fontWeight={"thin"} 
        color={"whiteAlpha.700"} mt={""}>CryptoX</Text>
    </Box>
  )
}

export default Home