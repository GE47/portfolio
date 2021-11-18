import { extendTheme } from "@chakra-ui/react";

import { fonts, config, styles, colors } from "./styles";
import components from "./components";

const overrides = {
  styles,
  fonts,
  config,
  colors,
  components,
};

const theme = extendTheme(overrides);

export default theme;
