import React from 'react'
import { Box, Flex } from "@chakra-ui/react"

function Header({logo}) {
  return (
    <Flex justify={'space-around'} align={'center'} color={"#ffffff"} bgColor={'#212D2B'} pt={'1rem'} pb={'1rem'}>
      <img src={logo} alt='logo' width={'200px'} className='logoImg'/>
      <Flex justify={'space-around'} className='contact'>
        <Box mr={'10px'} transition={'0.2s'} _hover={{cursor: 'pointer', color: '#E8C9A8'}}>Nosotros</Box>
        <Box mr={'10px'} transition={'0.2s'} _hover={{cursor: 'pointer', color: '#E8C9A8'}}>Productos</Box>
        <Box mr={'10px'} transition={'0.2s'} _hover={{cursor: 'pointer', color: '#E8C9A8'}}>Contacto</Box>
      </Flex>
    </Flex>
  )
}

export default Header
