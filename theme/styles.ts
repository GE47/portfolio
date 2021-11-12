import { ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("#f0f0f0f0", "#161616")(props),
    },
  }),
};

const fonts = {
  heading: "Poppins",
  body: "Poppins",
};

const colors = {
  lightWhite: "#f0f0f0f0",
  darkBlack: "#161616",
  grayBrown: "#525252",
};

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

export { fonts, config, styles, colors };
