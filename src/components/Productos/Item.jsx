import { Button, Card, CardBody, CardHeader, Flex, Heading, Image, Text } from "@chakra-ui/react"
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import { useContext } from "react"
import { CartContext } from "../../context/ShoppingCartContext"



const Item = ({ name, price, image, id }) => {
  const { addToCart } = useContext(CartContext)

  return(
    <Card height='100%' maxW='sm' borderRadius='lg' border='2px' borderColor='green.700' flex='1'>
      <CardHeader p='0' m='0'>
        <ChakraLink as={ReactRouterLink} to={`item/${id}`}>  
          <Image
              src={image}
              alt={name}
              borderRadius='md' 
              borderBottomRightRadius='0'
              borderBottomLeftRadius='0'
              borderBottom='2px'
          />
        </ChakraLink>
      </CardHeader>
      <CardBody>
        <Flex height='100%' direction='column' gap='3'>
          <Heading size='md'>{name}</Heading>
          <Text mt='auto' color='green.800' fontSize='2xl'>
            $ {price}
          </Text>
          <Button onClick={() => addToCart({ name, price, image, id })}  variant='solid' colorScheme='green' bg='green.800'>
              Añadir al carro
          </Button>
        </Flex>
    </CardBody>
    </Card>
  )
}

export default Item