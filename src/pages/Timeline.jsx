import { Box, Container, Flex, Heading, HStack, IconButton, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Ben, Black, Brown_Milk, Gradient } from '../utils/color'
import {BiSend} from "react-icons/bi"
import Tags from '../components/Tags'
import { Link } from 'react-router-dom'

const Timeline = () => {
  return (


  <Box bgColor={Black}    opacity= {"0.9"} >

 
    <Box bgColor={Brown_Milk} width={"60%"} h={"91.5vh"} ml={"19rem"}>
       
            <Container   maxW={"container.xl"} display={"grid"} > 
        <Box justifyContent={"center"}>
                <HStack>
                <Heading  color={Ben}>
                        Popular
                    </Heading>

        <Link to='/dm'>
          <IconButton  ml={"59rem"} >
                        <BiSend color={Ben} />
                        </IconButton>
                 
        </Link>
                      
                </HStack>
         <Tags/>
            </Box>

            

              
            </Container>
      
    </Box>
     </Box>
  )
}

export default Timeline