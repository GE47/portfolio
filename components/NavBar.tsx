import { Stack, Box, Heading, Container } from "@chakra-ui/layout";
import {
  useColorModeValue,
  IconButton,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";

import ToggleThemeButton from "./ToggleThemeButton";
import NavLink from "./NavLink";
import { HamburgerIcon } from "@chakra-ui/icons";

const NavBar: React.FC = () => {
  const navColor = useColorModeValue("lightWhite", "darkBlack");

  return (
    <Box as="nav" w="full" position="fixed" bg={navColor}>
      <Container
        maxW="container.lg"
        p="4"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Link href="/" passHref>
          <Heading as="h1" fontSize="xl" cursor="pointer">
            Alhasan Ali
          </Heading>
        </Link>

        <Stack
          direction={{ md: "row" }}
          display={{ base: "none", md: "flex" }}
          ml="12"
          flexGrow={1}
          alignItems="center"
          justifySelf="start"
        >
          <NavLink href="/">Home</NavLink>
          <NavLink href="/projects">Projects</NavLink>
        </Stack>

        <Box display="flex">
          <Box display={{ base: "inline-block", md: "none" }} mr="2">
            <Menu isLazy>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon h="6" w="6" />}
                variant="outline"
              />
              <MenuList>
                <Link href="/" passHref>
                  <MenuItem as={ChakraLink}>Home</MenuItem>
                </Link>
                <Link href="/projects" passHref>
                  <MenuItem as={ChakraLink}>Projects</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>

          <ToggleThemeButton />
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
