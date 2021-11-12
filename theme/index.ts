import { extendTheme } from "@chakra-ui/react";

import { fonts, config, styles, colors } from "./styles";
import Heading from "./components/Heading";

const overrides = {
  styles,
  fonts,
  config,
  colors,
  components: { Heading },
};

const theme = extendTheme(overrides);

export default theme;
