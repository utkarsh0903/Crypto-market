import {Box, HStack, Text, Image, VStack} from "@chakra-ui/react";
import React from 'react'
import bitcoin from "../assests/btc.png"
import {motion} from "framer-motion";

const Home = () => {
  
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"} color={"white"}>
      <HStack w={"full"} display={"flex"} justifyContent={"space-evenly"} >
        <VStack display={"flex"} justifyContent={"center"}  >
          <Text  w={"full"} h={"full"} fontSize={["20px","20px","30px","45px","60px", "70px"]} 
              textTransform={"uppercase"} display={"flex"} justifyContent={"center"} >Always<br /> ready<br />
              to make your<br /> life better</Text>
          <Text w={"full"} h={"full"} fontSize={["10px","27px"]}
            display={"flex"} justifyContent={"center"}>Every step of the way</Text>
        </VStack>
        <motion.div style={{
          height:"80vh",
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
        <Image  w={["40%","60%"]} h={"76vh"} objectFit={"contain"} src={bitcoin} filter={"grayscale(1)"} 
         m={"auto"} />
        </motion.div>
      </HStack>
    </Box>
  )
}

export default Home