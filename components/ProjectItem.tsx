import { Flex } from "@chakra-ui/layout";
import { Image, Text } from "@chakra-ui/react";
import Link from "next/link";

import PageAnimation from "../components/PageAnimation";
import AppImage from "./AppImage";

interface IProps {
  title: string;
  cover: string;
  id: string;
}

const ProjectItem: React.FC<IProps> = ({ title, cover, id }) => {
  return (
    <PageAnimation>
      <Link href={`/projects/${id}`} passHref>
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          style={{ gap: 10 }}
        >
          <AppImage
            src={cover}
            alt={`${title}'s image`}
            w={{ base: "300px", md: "330px" }}
            h="250px"
            objectFit="cover"
            borderWidth="thin"
          />
          <Text fontSize="20">{title}</Text>
        </Flex>
      </Link>
    </PageAnimation>
  );
};

export default ProjectItem;
