import { useColorMode, useColorModeValue, Button } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ToggleThemeButton: React.FC = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  const bg = useColorModeValue("gray.700", "white");
  const color = useColorModeValue("white", "black");

  return (
    <Button onClick={toggleColorMode} p="3" bg={bg} color={color}>
      {colorMode === "light" ? (
        <MoonIcon h="5" w="5" />
      ) : (
        <SunIcon h="5" w="5" />
      )}
    </Button>
  );
};

export default ToggleThemeButton;
