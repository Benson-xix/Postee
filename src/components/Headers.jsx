import { Box, Flex, Heading, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Black, Brown_Milk, White } from '../utils/color'
import {GiPostStamp} from"react-icons/gi"

const Headers = () => {
  return (
  <Box w={"100%"} p='1rem 2rem' bgColor={Black} opacity={'0.9'}  >
    <Flex justifyContent={"start"} gap={2}  alignItems={"center"} _hover={{ opacity: 0.8, color: Brown_Milk}}>
      
        <GiPostStamp color={White}  size={50}  />
             <Heading  color={White} fontWeight={15} fontSize={"1.5rem"}>
                POSTEE
            </Heading>
            
           
    </Flex>
  </Box>
  )
}

export default Headers