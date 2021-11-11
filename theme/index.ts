import { extendTheme } from "@chakra-ui/react";

import { fonts, config } from "./styles";

const overrides = {
  fonts,
  config,
};

const theme = extendTheme(overrides);

export default theme;
