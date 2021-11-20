import { Flex } from "@chakra-ui/layout";
import { Image, Text } from "@chakra-ui/react";
import Link from "next/link";

import { prefix } from "../utils/constants";
import PageAnimation from "../components/PageAnimation";

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
          <Image
            src={prefix + cover}
            alt={`${title}'s image`}
            w={{ base: "300px", md: "400px" }}
            h="250px"
            objectFit="fill"
            borderRadius="lg"
            borderStyle="solid"
            borderWidth="thin"
          />
          <Text fontSize="20">{title}</Text>
        </Flex>
      </Link>
    </PageAnimation>
  );
};

export default ProjectItem;
