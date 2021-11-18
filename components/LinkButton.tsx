import Link, { LinkProps } from "next/link";
import { Link as ChakraLink, Text } from "@chakra-ui/layout";
import { IconProps } from "@chakra-ui/icons";
import { ComponentWithAs } from "@chakra-ui/system";
import { MouseEvent, HTMLProps } from "react";

interface IProps {
  Icon: ComponentWithAs<"svg", IconProps>;
  text?: string;
  href?: string;
  target?: string;
  onLinkClicked?: (e: MouseEvent<HTMLElement>) => void;
}

const LinkButton: React.FC<
  Omit<LinkProps & HTMLProps<HTMLAnchorElement>, "href"> & IProps
> = ({ Icon, text, href = "", target, children, onLinkClicked = () => {} }) => {
  return (
    <>
      {href ? (
        <Link href={href} passHref>
          <ChakraLink
            variant="outlined"
            display="flex"
            target={target}
            alignItems="center"
            style={{ gap: 2 }}
          >
            <Text>{text}</Text>
            {children}
            <Icon />
          </ChakraLink>
        </Link>
      ) : (
        <ChakraLink
          variant="outlined"
          display="flex"
          alignItems="center"
          onClick={onLinkClicked}
          style={{ gap: 2 }}
        >
          <Text>{text}</Text>
          {children}
          <Icon />
        </ChakraLink>
      )}
    </>
  );
};

export default LinkButton;
