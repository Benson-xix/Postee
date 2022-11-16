import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Show,
  VStack,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { Black, Brown_Milk, White } from "../utils/color";

const Form = () => {
  return (
    <Box placeContent={"center"} opacity={"0.6"} >
      <Container
        bgColor={Black}
        h={"80vh"}
        maxWidth={"100rem"}
        py={"2rem"}
        px={"8rem"}
      >
        <Heading
          textAlign={"center"}
          fontWeight={"semibold"}
          color={Brown_Milk}
        >
          Sign up
        </Heading>
        <VStack gap={".8rem"}>
          <FormControl>
            <FormLabel color={Brown_Milk}>Name</FormLabel>
            <Input />
          </FormControl>

          <FormControl>
            <FormLabel color={Brown_Milk}>Email</FormLabel>
            <Input />
          </FormControl>

          <FormControl>
            <FormLabel color={Brown_Milk}>Date of birth</FormLabel>
            <Input
              placeholder='Select Date and Time'
              size='md'
              type='datetime-local'
              color='white'
            />
          </FormControl>

          <FormControl>
            <FormLabel color={Brown_Milk}>Password</FormLabel>
            <Input
              pr='4.5rem'
              color={Brown_Milk}
              // type={Show ? 'text' : 'password'}
              placeholder='Enter password'
            />
          </FormControl>

          <FormControl>
            <FormLabel color={Brown_Milk}>Gender</FormLabel>
            <HStack>
              <Checkbox color={Brown_Milk}>Male</Checkbox>
              <Checkbox color={Brown_Milk}>Female</Checkbox>
            </HStack>
          </FormControl>

          <FormControl>
            <FormLabel color={Brown_Milk}>City</FormLabel>
            <Input />
          </FormControl>

          <FormControl>
            <FormLabel color={Brown_Milk}>Country</FormLabel>
            <Input />
          </FormControl>

          <HStack>
            <Link to='/login'>
            <Button
             textDecoration={"none"}
              w={"10rem"}
              bgColor={Black}
              color={White}
              border={"1px solid White"}
            _hover={{ opacity: 0.6, bgColor: White, color: Black }}
            >
              Confirm
            </Button>
            </Link>
            
    <Link to='/'>
      <Button
       textDecoration={"none"}
              w={"10rem"}
              bgColor={White}
              color={Black}
            _hover={{ opacity: 0.6, bgColor: Black, color: White, border: "1px solid White" }}
            >
              Cancel
            </Button>
    </Link>
            
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Form;
