import React from "react";

import Container from "../common/Container";
import Navbar from "../Navbar/Navbar";

interface myProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: myProps) => {
  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  );
};

export default Layout;
