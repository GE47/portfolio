import { Box, Heading, Text, Link as ChakraLink } from "@chakra-ui/layout";
import { SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { ExternalLinkIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { GetStaticProps, NextPage } from "next";

import projectsData from "../../projects";
import PageAnimation from "../../components/PageAnimation";
import LinkButton from "../../components/LinkButton";
import AppImage from "../../components/AppImage";

interface IProps {
  info: {
    title: string;
    description: string;
    techs: string[];
    images: string[];
    code: string;
    demo: string;
  };
}

const ProjectInfo: NextPage<IProps> = ({ info }) => {
  const badgeBorder = useColorModeValue("blue.700", "blue.900");
  const badgeColor = useColorModeValue("blue.700", "blue.300");

  return (
    <PageAnimation>
      <Box pt="5" minH={info.images.length > 0 ? "80vh" : "60vh"}>
        <Box display="flex" alignItems="center" mb="5">
          <Link href="/projects" passHref>
            <ChakraLink display="flex" alignItems="center" fontSize="3xl">
              <ChevronLeftIcon />
            </ChakraLink>
          </Link>
          <Heading fontSize="3xl">{info.title}</Heading>
        </Box>

        <Box pl="5">
          <Text mb="2">{info.description}</Text>

          <Box display="flex" alignItems="center" mb="2">
            <Text
              variant="outline"
              fontSize="sm"
              fontWeight="bold"
              color={badgeColor}
              borderWidth={1}
              borderRadius="md"
              borderColor={badgeBorder}
              p="2px"
            >
              Technologies
            </Text>
            <Box
              display="flex"
              flexWrap={{ base: "wrap", md: "nowrap" }}
              style={{ gap: 5 }}
              fontSize="sm"
              ml="2"
            >
              {info.techs.map((tech, index, array) => (
                <code key={index}>
                  {tech}
                  {index !== array.length - 1 ? " /" : ""}
                </code>
              ))}
            </Box>
          </Box>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          style={{ gap: 20 }}
          mt="5"
        >
          {info.code && (
            <LinkButton
              Icon={ExternalLinkIcon}
              text="Code"
              href={info.code}
              target="_blank"
            />
          )}
          {info.demo && (
            <LinkButton
              Icon={ExternalLinkIcon}
              text="Demo"
              href={info.demo}
              target="_blank"
            />
          )}
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            gap={{ base: 5, md: 10 }}
            mt="5"
            ml={{ base: 0, md: 5 }}
          >
            {info.images.map((image, index) => (
              <AppImage
                borderWidth="thin"
                w="300px"
                h="200px"
                src={image}
                key={index}
                alt={`${info.title}'s image ${index}`}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </PageAnimation>
  );
};

export const getStaticPaths = async () => {
  const paths = projectsData.map((project) => {
    const id = project.id;

    return {
      params: {
        id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params as any;

  const data = projectsData.find((project) => project.id === id);

  return {
    props: {
      info: data,
    },
  };
};

export default ProjectInfo;
