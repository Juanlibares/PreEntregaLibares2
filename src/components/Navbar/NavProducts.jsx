import { Menu, MenuButton, MenuList, MenuItem, Button, Text, MenuGroup} from "@chakra-ui/react"
import { BiChevronDown } from "react-icons/bi";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
const NavProducts = () => {
  return(
    <Menu>
        <MenuButton
          variant='ghost' 
          as={Button} 
          rightIcon={<BiChevronDown color="white" />}
          _hover={{ bg: 'green.600', border: 'none' }} 
          _active={{ bg: 'green.600', border: 'none'}}
        >
          <Text fontSize='lg' color='white'>Productos</Text>
        </MenuButton>
        <MenuList display='flex' flexWrap='wrap' gap='6'>
          <MenuGroup title='Esencias'>
          <ChakraLink as={ReactRouterLink} reloadDocument to='/category/hardware'>
            <MenuItem>Hardware</MenuItem>
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} reloadDocument to='/category/notebooks'>
            <MenuItem>Notebooks</MenuItem>
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} reloadDocument to='/category/smartphones'>
            <MenuItem>Smartphones</MenuItem>
          </ChakraLink>
          
          </MenuGroup>
        </MenuList>
      </Menu>
  )
}

export default NavProducts