import { NextPage } from "next";
import { Box, SimpleGrid } from "@chakra-ui/layout";

import ProjectItem from "../../components/ProjectItem";
import PageAnimation from "../../components/PageAnimation";
import projectsData from "../../projects";

const Projects: NextPage = () => {
  return (
    <PageAnimation>
      <Box
        pt={{ base: "10", md: "0" }}
        minH="60vh"
        display="flex"
        flexDir="column"
        justifyContent="center"
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
          {projectsData.map((project, index) => (
            <ProjectItem
              id={project.id}
              key={index}
              title={project.title}
              cover={project.cover}
            />
          ))}
        </SimpleGrid>
      </Box>
    </PageAnimation>
  );
};

export default Projects;
