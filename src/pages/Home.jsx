import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Headers from "../components/Headers";
import { Black, Brown_Milk, Dark_Green, White } from "../utils/color";
import Login from "./Login";
import SignUp from "./SignUp";
import img from "../assets/images/Home.png";

const Home = () => {
  return (
    <Box
      pb={3}
      w={"100%"}
      h={"91vh"}
        placeContent={"center"}
        display={"grid"}
        grid={"1fr"}
      backgroundImage={`url(${img})`}
      backgroundPosition={"center"}
      backgroundRepeat={"no-repeat"}
    >
      {/*  backgroundImage= {Image}
       */}
    
      <Container
        maxW={"container.xl"}
        bgColor={Dark_Green}
        opacity={"0.8"}
        w={"55rem"}
        h={"33rem"}
        display={"grid"}
        grid={"1fr"}
      >
        <Flex mb={10} justifyContent={"center"}>
          <VStack gap={2} mt={1}>
            <Box mt={7}>
              <Heading color={Brown_Milk} textAlign={"center"}>
                Welcome to Postee
              </Heading>
              <Text
                fontSize={"md"}
                color={Brown_Milk}
                textAlign={"center"}
                mt={6}
                ml={8}
              >
                A platform for incredible and quality pictures were you can also
                share and like pictures with your friend
              </Text>
            </Box>

            <HStack>
              <Box w={700} marginTop={"6rem"}>
                <Link to='/signup'>
                  <IconButton
                    w={"45%"}
                    h={"70"}
                    ml={5}
                    _hover={{
                      opacity: 0.75,
                      bgColor: Black,
                      color: Brown_Milk,
                    }}
                  >
                   <Text>Sign up</Text>
                  </IconButton>
                </Link>

                <Link to='/login'>
                  <IconButton
                    w={"45%"}
                    h={"70"}
                    ml={5}
                    _hover={{
                      opacity: 0.75,
                      bgColor: Black,
                      color: Brown_Milk,
                    }}
                  >
                    <Text>Login</Text>
                  </IconButton>
                </Link>
              </Box>
            </HStack>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Home;
