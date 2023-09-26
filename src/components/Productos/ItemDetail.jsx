import { Box, Container, Divider, Flex, Heading, Image, Stack, StackDivider, Text } from "@chakra-ui/react"
import ItemStock from "./ItemStock"

export const ItemDetail = ({ item }) => {
  return (
    <Container maxW='6xl' py='32'>
      <Flex width='100%' justifyContent='space-between' gap='24px' columns={2}>
        <Flex justify='center'>
          <Image boxSize='400' borderRadius='xl' border='2px' borderColor='green.800' src={item.image} />
        </Flex>
          <Container maxW='2xl' m='0' p='0'>
        <Stack divider={<StackDivider borderColor='green.800' />} direction='column' spacing='6'>
          <Flex direction='column' align='center' gap="6">
            <Heading color='gray.700' size='2xl'>{item.name}</Heading>
            <Text color='green.700' as='b' fontSize='3xl'>$ {item.price}</Text>
          </Flex>
          <Flex>
            <ItemStock stock={item.stock}/>
          </Flex>
            <Flex gap='4' direction='column'>
              <Heading color='gray.700' size='md'>Descripción</Heading>
              <Text fontSize='lg'>{item.description}</Text>
            </Flex>
        </Stack>
          </Container>
      </Flex>
    </Container>
  )
}
