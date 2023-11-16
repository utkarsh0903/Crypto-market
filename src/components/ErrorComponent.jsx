import { Alert, AlertIcon } from '@chakra-ui/alert'
import React from 'react'

const ErrorComponent = ({message}) => {
  return (
    <Alert pos={"fixed"} status={"error"} 
      bottom={"4"} left={"50%"} 
      transform={"translateX(-50%)"} 
      w={"container.lg"}>
      <AlertIcon />
      {message}
    </Alert>
  )
}

export default ErrorComponent