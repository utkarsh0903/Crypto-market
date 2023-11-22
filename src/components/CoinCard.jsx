import { Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const CoinCard = ({id, image, current_price, symbol, name, currencySymbol}) => {
  return (
    <Link to={`/coin/${id}`}>
        <VStack w={'52'} shadow={"lg"} p={'8'} borderRadius={"lg"} transition={'all 0.3s'}
        m={"4"}
        css={{
                "&:hover":{
                    transform:"scale(1.1)",
                },
            }}
    >
        <Image src={image} h={"10"} w={"10"} objectFit={'contain'} alt='Exchange' />
        <Heading size={'md'} noOfLines={'1'}>{symbol}</Heading>
        <Text noOfLines={'1'}>{name}</Text>
        <Text noOfLines={'1'}>{current_price ? `${currencySymbol}${current_price}` : "NA"}</Text>
    </VStack>
    </Link>
  )
}

export default CoinCard