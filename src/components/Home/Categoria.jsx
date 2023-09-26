import { Container, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import notebook from '../../assets/notebook.png'
import smartphone from '../../assets/smartphone.png'
import accesorios from '../../assets/accesorios.png'
import gaming from '../../assets/gaming.png'

export const Categoria = () => {
  return (
    <Container maxW='1305px' py={{base: 9, lg: '70px'}} px={{base: 6, sm: 12}}>
      <Heading width='100%' textAlign='center' size='xl' color='gray.700' pb='12'>Categorías</Heading>
        <SimpleGrid rowGap='12' templateColumns={{base: 'repeat(2, auto)' , md: 'repeat(4, auto)'}} justifyContent={{base: 'space-around', lg: 'space-between'}}>
            <Stack maxW='200px' align='center'>
              <Image borderRadius='full' boxSize={{base: '150px', lg: '200px'}} border='1px' borderColor='blackAlpha.900'  src={notebook} />
              <Text fontSize={{base: 'lg' ,lg: '2xl'}}>Notebooks</Text>
            </Stack>
            <Stack maxW='200px' align='center'>
              <Image borderRadius='full' boxSize={{base: '150px', lg: '200px'}} border='1px' borderColor='blackAlpha.900'  src={smartphone} />
              <Text fontSize={{base: 'lg' ,lg: '2xl'}}>Smartphones</Text>
            </Stack>
            <Stack maxW='200px' align='center'>
              <Image borderRadius='full' boxSize={{base: '150px', lg: '200px'}} border='1px' borderColor='blackAlpha.900'  src={accesorios} />
              <Text fontSize={{base: 'lg' ,lg: '2xl'}}>Hardware</Text>
            </Stack>
            <Stack maxW='200px' align='center'>
              <Image borderRadius='full' boxSize={{base: '150px', lg: '200px'}} border='1px' borderColor='blackAlpha.900'  src={gaming} />
              <Text fontSize={{base: 'lg' ,lg: '2xl'}} textAlign='center'>Gaming</Text>
            </Stack>
        </SimpleGrid>
    </Container>
  )
}
