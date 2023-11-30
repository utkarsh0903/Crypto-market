import {Box, HStack, Text, Image} from "@chakra-ui/react";
import React from 'react'
import bitcoin from "../assests/btc.png"
import {motion} from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <HStack w={"full"} display={"flex"} justifyContent={"space-between"} >
        <Text ml={"12rem"} w={"full"} h={"full"} fontSize={"67px"} color={"whitesmoke"} 
            textTransform={"uppercase"}>Always<br /> ready<br />
            to make your<br /> life better</Text>
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
        <Image mr={"12rem"} w={"80%"} h={"76vh"} objectFit={"contain"} src={bitcoin} filter={"grayscale(1)"} />
        </motion.div>
      </HStack>
    </Box>
  )
}

export default Home