import type { NextPage } from "next";
import Link from "next/link";
import { Box, Text, List, ListItem, ListIcon, Flex } from "@chakra-ui/layout";
import {
  Heading,
  Divider,
  useToast,
  useColorModeValue,
  Link as ChakraLink,
  Image,
} from "@chakra-ui/react";
import { ExternalLinkIcon, CopyIcon, StarIcon } from "@chakra-ui/icons";

import PageAnimation from "../components/PageAnimation";
import LinkButton from "../components/LinkButton";

const Home: NextPage = () => {
  const iconColor = useColorModeValue("blue.900", "blue.600");
  const imageBorder = useColorModeValue("blackAlpha.800", "whiteAlpha.800");
  const toast = useToast();

  const ListContent = ({ text }: { text: string }): JSX.Element => {
    return (
      <ListItem display="flex" alignItems="center">
        <ListIcon as={StarIcon} color={iconColor} />
        <span>{text}</span>
      </ListItem>
    );
  };

  const email = "Alhassan.Ali.Alrubaye@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);

    toast({
      title: "Email Copied",
      description: `"${email}" has been copied to the clipboard.`,
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box pt="10">
      <PageAnimation>
        <Box
          display={{ md: "flex" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Heading as="h2" fontSize="3xl">
              Hello, I&apos;m Alhasan Ali
            </Heading>
            <Text fontSize="xl">A Front-End Web Developer</Text>
          </Box>
          <Box
            mt={{ base: 4, md: 0 }}
            ml={{ md: 5 }}
            display={{ base: "flex", md: "block" }}
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
          >
            <Image
              src={"/assets/pfp.jpg"}
              alt="Profile Picture"
              display="inline-block"
              w="150px"
              h="150px"
              borderRadius="full"
              objectFit="cover"
              borderStyle="solid"
              borderWidth={2}
              borderColor={imageBorder}
            />
          </Box>
        </Box>

        <Box mt="5">
          <Heading variant="title">About Me</Heading>

          <Text mb="2">
            A front-end web developer who enjoys working in a team environment.
            Passionate about creating efficient and easy-to-use applications.
          </Text>

          <Flex alignItems="center">
            <Heading fontSize="15" mx="5">
              2020
            </Heading>
            <Text>
              Received a bachelor&apos;s degree in Information Technology from
              the University of Babylon.
            </Text>
          </Flex>

          <Flex alignItems="center" my="2">
            <Heading fontSize="15" mx="5">
              2021
            </Heading>
            <Text>
              Completed
              <Link href="https://www.re-coded.com" passHref>
                <ChakraLink
                  target="_blank"
                  cursor="pointer"
                  textDecor="underline"
                  color="blue.500"
                  px="5px"
                  display="inline-flex"
                  alignItems="center"
                >
                  <span>Re:Coded</span>
                  <ExternalLinkIcon />
                </ChakraLink>
              </Link>
              React Web Development Bootcamp.
            </Text>
          </Flex>
        </Box>
        <Divider mt="3" />

        <Box mt="5">
          <Heading variant="title">Skills</Heading>
          <List spacing={3}>
            <ListContent text="JavaScript" />
            <ListContent text="React js" />
            <ListContent text="Next js" />
            <ListContent text="Redux js" />
            <ListContent text="Firebase" />
            <ListContent text="HTML & CSS" />
            <ListContent text="TailwindCSS" />
            <ListContent text="Chakra UI" />
            <ListContent text="Git & GitHub" />
          </List>
        </Box>

        <Divider mt="3" />

        <Box mt="5">
          <Heading variant="title">My Hobbies</Heading>
          <Text>
            Music, Anime & Manga, Drawing, Learning Japanese, Playing Guitar.
          </Text>
        </Box>

        <Divider mt="3" />

        <Box
          mt="2"
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="start"
        >
          <Heading variant="title">Contact Me</Heading>

          <LinkButton
            Icon={CopyIcon}
            text={`${email}`}
            onLinkClicked={handleCopyEmail}
          />

          <Box my="3">
            <LinkButton
              href="https://www.linkedin.com/in/alhasan-ali"
              text="Linkedin"
              Icon={ExternalLinkIcon}
              target="_blank"
            />
          </Box>

          <LinkButton
            href="https://github.com/GE47"
            text="GitHub"
            Icon={ExternalLinkIcon}
            target="_blank"
          />
        </Box>
      </PageAnimation>
    </Box>
  );
};

export default Home;
