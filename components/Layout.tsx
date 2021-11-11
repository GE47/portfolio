import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "./Footer";

import NavBar from "./NavBar";

const Layout: React.FC = ({ children }) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Alhasan's homepage" />
        <meta name="author" content="Alhasan Ali" />
        <title>Alhasan Ali</title>
      </Head>

      <NavBar />

      <Container maxW="container.lg" pt="16">
        {children}
      </Container>

      <Footer />
    </Box>
  );
};

export default Layout;
