import { Badge, Box, HStack, LinkBox } from "@chakra-ui/react";
import React, { useState as usePost } from "react";
import { Link, useLocation } from "react-router-dom";
import { Ben, Brown_Milk, Gradient } from "../utils/color";

const Tags = () => {
  const { pathname } = useLocation();

  const [tags, setTags] = usePost([
    {
      name: "Photos",
      link: "/timeline",
      isActive: true,
    },
    {
      name: "Clothes",
      link: "/timeline",
      isActive: false,
    },
    {
      name: "Painting",
      link: "/timeline",
      isActive: false,
    },
    {
      name: "Comic",
      link: "/timeline",
      isActive: false,
    },
    {
      name: "Gaming",
      link: "/timeline",
      isActive: false,
    },
    {
        name: "Anime",
        link: "/timeline",
        isActive: false,
      },
    {
        name: "Food",
        link: "/timeline",
        isActive: false,
      },
      {
        name: "Travels",
        link: "/timeline",
        isActive: false,
      },
      {
        name: "Sports",
        link: "/timeline",
        isActive: false,
      },
      {
        name: "News",
        link: "/timeline",
        isActive: false,
      },
      {
        name: "Reacreation",
        link: "/timeline",
        isActive: false,
      },

  ]);

  const changeCurrentTag = (item) => {
    const index = tags.indexOf(item);
    const newItems = tags.map((item) => ({ ...item, isActive: false }));
    newItems[index].isActive = true;
    setTags(newItems);
  };

  return (
    <Box w={"40%"} ml={"5rem"} >
      {pathname === "/timeline" && (
        <HStack py={3} px={5}>
          {tags.map((item, index) => (
            <LinkBox key={index} onClick={() => changeCurrentTag(item)}>
                <Link to='/timeline'>
                <Badge
                border={1}
                bgColor={item.isActive ? Brown_Milk : Ben}
                color={item.isActive ? Ben : Brown_Milk}
                borderStyle={"solid"}
                borderColor={Gradient}
                rounded={"full"}
                py={2}
                px={4}
              >
                {item.name}
              </Badge>
                </Link>
             
              {/* <Link to={"item.link"}>
            </Link> */}
            </LinkBox>
          ))}
        </HStack>
      )}
    </Box>
  );
};

export default Tags;
