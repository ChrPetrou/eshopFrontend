import React from "react";
import { styled } from "styled-components";

import Container from "../common/Container";
import Navbar from "../Navbar/Navbar";

interface myProps {
  children?: React.ReactNode;
}

const ContainerExtend = styled(Container)`
  /* min-height: 110vh; */
`;

const Layout = ({ children }: myProps) => {
  return (
    <ContainerExtend>
      <Navbar />
      {children}
    </ContainerExtend>
  );
};

export default Layout;
