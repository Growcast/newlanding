import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { SocialIcon } from 'react-social-icons'

function Footer() {
  return (
    <Flex backgroundColor={'#282c34'} p={'2rem'} justify={'center'}>
        
      <Box mr={'10px'}><SocialIcon url="https://whatsapp.com/"/></Box>
      <Box mr={'10px'}><SocialIcon url="https://linkedin.com/"/></Box>
      <Box mr={'10px'}><SocialIcon url="https://facebook.com/"/></Box>
      <Box mr={'10px'}><SocialIcon url="https://instagram.com/"/></Box>
      <Box ><SocialIcon url="https://x.com/"/></Box>
    </Flex>
  )
}

export default Footer
