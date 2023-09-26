import { Link, List, ListItem, Text, Flex } from "@chakra-ui/react"
import NavProducts from "./NavProducts"

import CartWidget from './CartWidget';
import SearchBar from './SearchBar';

const NavLinks = () => {
  return(
    <>
      <List bg='green.900' display ='flex' px='12px' py='10px' width='100%' alignItems='center' justifyContent='center' gap='40px'>
        <ListItem>
            <Link>
              <Text fontSize='lg' fontWeight='semibold' as='p' color='white'>Inicio</Text>
            </Link> 
        </ListItem>
        <ListItem>
          <NavProducts/>
        </ListItem>
        <ListItem>
            <Link>
              <Text fontSize='lg' fontWeight='semibold' as='p' color='white'>Sobre Nosotros</Text>
            </Link> 
        </ListItem>
      </List>
      <Flex align='center'>
            <SearchBar />
            <CartWidget />
          </Flex>
    </>
  )
}

export default NavLinks