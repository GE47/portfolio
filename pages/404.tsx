import {
  Button,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";

const NotFound: NextPage = () => {
  const router = useRouter();

  const buttonBg = useColorModeValue("blue.700", "blue.900");

  return (
    <Flex
      minH="80vh"
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Heading>Page Not Found</Heading>
      <Text my="2">The page you&apos;re looking for does not exist</Text>
      <Button
        bg={buttonBg}
        color="white"
        _hover={{ bg: "blackAlpha.900" }}
        onClick={() => {
          router.push("/");
        }}
      >
        Return to Home
      </Button>
    </Flex>
  );
};

export default NotFound;
