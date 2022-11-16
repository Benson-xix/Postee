import { Box, Button, Checkbox, Container, Flex, FormControl, FormLabel, Heading, HStack, Input, Spacer, Text, VStack,Link } from '@chakra-ui/react'
import React from 'react'
import { Black, Brown_Milk, Gradient, White } from '../utils/color'

const Login = () => {
  return (
   <Box w={"100%"} h={"91vh"} opacity={"0.8"}  bgGradient={"linear-gradient(200deg, rgba(28,58,50,1) 0%, rgba(14,78,90,1) 81%);"} position={"relative"}>
   
   <Box position={"absolute"} top={"5rem"} left={"40rem"}>
        <Container bgColor={Black} h={""} maxWidth={"100rem"} opacity={"0.7"} py={"4rem"} px={"6rem"} >
          <Heading pt={30} textAlign={"center"} fontWeight={"semibold"} color={Brown_Milk}>
            Login
          </Heading>
          <VStack gap={30} mt={10} >
            <FormControl>
              <FormLabel  color={Brown_Milk}>Email</FormLabel>
              <Input/>
            </FormControl>

            <FormControl>
              <FormLabel  color={Brown_Milk}>Password</FormLabel>
              <Input/>
            </FormControl>

            <HStack >
            <Checkbox color={Brown_Milk}>Try sabi me later biko may i no run forget password</Checkbox>

          
              </HStack>
           <Link to='/timeline' textDecoration={"none"}> 
           <Button w={"10rem"} bgColor={White}  _hover={{opacity: 0.6, bgColor:Black, color: White }}>
                Login
              </Button>
           </Link>
             
              <HStack w={"100%"} >
                <Link  to='/'><Text  textDecoration={"none"} textAlign={"center"} color={Brown_Milk}>Forgot PassWord?  boss e no fit you oh! try improve</Text></Link>
 {/* onClick={handleLoginUser} isLoading={isLoading} */}
            </HStack>
          </VStack>
        </Container>
      </Box>
</Box>
  )
}

export default Login