import Link from "next/link";
import { Box } from "@chakra-ui/layout";
import { Stack, Link as ChakraLink } from "@chakra-ui/react";
import { ImLinkedin2 } from "react-icons/im";
import { VscGithub } from "react-icons/vsc";
import { IconType } from "react-icons/lib";

const Footer: React.FC = () => {
  const IconLink = (props: { href: string; Icon: IconType }): JSX.Element => {
    const { href, Icon } = props;

    return (
      <Link href={href} passHref>
        <ChakraLink target="_blank">
          <Icon size="25" />
        </ChakraLink>
      </Link>
    );
  };

  return (
    <Box
      justifySelf="end"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      py="10"
    >
      <Stack
        direction="row"
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{ gap: 10 }}
      >
        <IconLink href="https://github.com/GE47" Icon={VscGithub} />

        <IconLink
          href="https://www.linkedin.com/in/alhasan-ali"
          Icon={ImLinkedin2}
        />
      </Stack>
    </Box>
  );
};

export default Footer;
