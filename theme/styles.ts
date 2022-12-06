import { ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("#EDF2F7", "#161616")(props),
    },
  }),
};

const fonts = {
  heading: "Poppins",
  body: "Poppins",
};

const colors = {
  lightWhite: "#EDF2F7",
  darkBlack: "#161616",
  grayBrown: "#525252",
};

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export { fonts, config, styles, colors };
