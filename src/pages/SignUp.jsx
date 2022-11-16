import { Box, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Black, Brown_Milk, White } from "../utils/color";
import img from "../assets/images/fm3.png";
import { Link } from "react-router-dom";
import Form from "../components/Form";

const SignUp = () => {
  return (
    <Box
      w={"100%"}
      h={"91vh"}
      bgGradient={
        "linear-gradient(200deg, rgba(28,58,50,1) 0%, rgba(14,78,90,1) 81%);"
      }
      display={"grid"}
      placeContent={"center"}
    >
      <Box
        bgColor={Black}
        w={"100%"}
        h={""}
        display={"flex"}
        gridTemplateColumns={"1fr 1fr"}
      >
       
          <Box
            w={"50rem"}
            h={"80vh"}
            placeContent={"center"}
            display={"grid"}
            grid={"1fr"}
            backgroundImage={`url(${img})`}
            backgroundPosition={"right  "}
            backgroundRepeat={"no-repeat"}
            backgroundSize={"cover"}
            position={"relative"}
            opacity= {"0.5"} 
          >
            <HStack>
              <Box position={"absolute"} top={4} left={"3"}>
                <Link to='/'>
                  <Heading color={White} fontWeight={"lg"}>
                    POSTEE.
                  </Heading>
                </Link>
              </Box>

              <Box position={"absolute"} top={"10rem"} left={"6rem"}>
                <Heading color={White} textAlign={"center"} fontWeight={"md"}>
                  Sign up to Capture the moment .....
                </Heading>
              </Box>

              <Box position={"absolute"} top={"46rem"} left={"10rem"}>
                <Heading color={White} fontWeight={"sm"} textAlign={"center"}>
                  Journey around the world.
                </Heading>
              </Box>
            </HStack>
          </Box>

          {/* second side */}
          <Box>
            <Form/>
          </Box>
       
      </Box>
    </Box>
  );
};

export default SignUp;
