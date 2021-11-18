import { mode } from "@chakra-ui/theme-tools";

const Link = {
  variants: {
    outlined: (props: any) => ({
      borderRadius: "lg",
      bg: mode("blue.700", "blue.900")(props),
      color: mode("white", "whiteAlpha.900")(props),
      px: 2,
      py: 1,
    }),
  },
};

export default Link;
