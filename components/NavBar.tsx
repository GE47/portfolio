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
    <Box as="nav" w="full" position="fixed" bg={navColor} zIndex={10}>
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
            <Menu autoSelect={false} placement="auto">
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon h="6" w="6" />}
                variant="outline"
              />
              <MenuList bg={navColor}>
                <NavMenuItem href="/" title="Home" />
                <NavMenuItem href="/projects" title="Projects" />
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

const NavMenuItem: React.FC<{ href: string; title: string }> = ({
  href,
  title,
}) => {
  return (
    <Link href={href} passHref>
      <MenuItem>
        <ChakraLink textAlign="center" w="full">
          {title}
        </ChakraLink>
      </MenuItem>
    </Link>
  );
};
