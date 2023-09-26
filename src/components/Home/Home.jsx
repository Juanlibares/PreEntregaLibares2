import { Box } from '@chakra-ui/react'
import { Hero } from './Hero'
import { Categoria } from './Categoria'
import { Newsletter } from './Newsletter'

export const Home = () => {
  return (
    <Box bgColor='green.50'>
      <Hero />
      <Categoria/>
      <Newsletter/>
    </Box>
  )
}
