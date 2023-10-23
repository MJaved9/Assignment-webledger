import React, { useState } from "react";
import { Box, Link, Text, Stack, Flex, Icon } from "@chakra-ui/react";
import { MdClose, MdMenu } from "react-icons/md";

const Logo = () => {
  return (
    <Box>
      <Text fontSize="lg" fontWeight="bold" color="black">
     <a href="/">WEBLEDGER</a>
      </Text>
    </Box>
  );
};

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <Icon as={MdClose} /> : <Icon as={MdMenu} />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end"]}
        direction={["column", "row"]}
        paddingTop={[4, 4, 0]}
      >
        <MenuItem to="/fav">Faviourate</MenuItem>
        <MenuItem to="#">About us</MenuItem>
        <MenuItem to="/login">Login/Register</MenuItem>
        <MenuItem to="#">Profile</MenuItem>
        <MenuItem to="#">Contact us</MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      width="100%"
      padding={8}
      bg={"transparent"}
      color={"gray.600"}
    >
      {children}
    </Flex>
  );
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer>
      <Logo />
      <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
}

export default Navbar;
