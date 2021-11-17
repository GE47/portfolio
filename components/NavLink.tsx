import { Link as ChakraLink, useColorModeValue } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavLink: React.FC<{ href: string }> = ({ href, children }) => {
  const [isActive, setIsActive] = useState(false);

  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    if (pathname === href) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [href, pathname]);

  const bg = useColorModeValue("gray.700", "white");
  const color = useColorModeValue("white", "black");

  return (
    <Link href={href} passHref>
      <ChakraLink
        bg={isActive ? bg : undefined}
        color={isActive ? color : undefined}
        p="2"
        borderRadius="md"
      >
        {children}
      </ChakraLink>
    </Link>
  );
};
export default NavLink;
