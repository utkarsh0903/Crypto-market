import { Button, HStack, Image, Text, Stack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assests/logo.png"

const Header = () => {
  return <Stack direction={["column", "row"]}
     p={'4'} shadow={'base'} bgColor={'blackAlpha.900'} 
     display={"flex"} justifyContent={"space-between"}>
     <HStack display={"flex"} justifyContent={"center"} >
          <Image src={logo} alt='Logo' h={"40px"} w={"40px"} borderRadius={"10px"} backdropBlur={"12"} />
          <Text fontSize={"3xl"} textAlign={"center"} fontWeight={"thin"} 
          color={"whiteAlpha.700"} mt={""} >CryptoX</Text>
     </HStack>
     <HStack display={"flex"} justifyContent={"center"} >
          <Button variant={"unstyled"} color={"white"} pr={"6"}>
               <Link to="/">Home</Link>
          </Button>
          <Button variant={"unstyled"} color={"white"} pr={"6"}>
               <Link to="/exchanges">Exchanges</Link>
          </Button>
          <Button variant={"unstyled"} color={"white"} pr={"6"}>
               <Link to="/coins">Coins</Link>
          </Button>
     </HStack>
  </Stack>
  
}
 
export default Header;