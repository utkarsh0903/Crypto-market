import {Box, HStack, Text, Image, VStack} from "@chakra-ui/react";
import React from 'react'
import bitcoin from "../assests/btc.png"
import {motion} from "framer-motion";

const Home = () => {
  
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"} color={"white"}>
      <HStack w={"full"} display={"flex"} justifyContent={"space-around"} >
        <VStack h={"100%"}  >
          <Text  w={"full"} h={"full"} fontSize={["25px","35px","45px","55px","65px", "65px"]} 
             display={"flex"} justifyContent={"center"} textTransform={"uppercase"}
             m={{base:"auto", xl : "0"}} >Always<br /> ready<br />
              to make your<br /> life better</Text>
        </VStack>
        <motion.div style={{
          height:"80vh",
          width:"50%"
        }} 
        animate={{
          translateY:"20px"
        }}
        transition={{
          duration:1,
          repeat:Infinity,
          repeatType:"reverse",
        }}
        >
        <Image  w={{base:"50%", lg:"55%", xl:"60%"}} h={"76vh"} objectFit={"contain"} 
        src={bitcoin} filter={"grayscale(1)"} m={"auto"} />
        </motion.div>
      </HStack>
    </Box>
  )
}

export default Home