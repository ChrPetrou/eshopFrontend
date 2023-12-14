import Container from "@/components/common/Container";
import ContainerInner from "@/components/common/ContainerInner";
import Login from "@/components/loginPopUp/Login";
import Register from "@/components/loginPopUp/Register";
import React from "react";
import { styled } from "styled-components";
import * as Yup from "yup";

const ContainerInnerExtend = styled(ContainerInner)`
  gap: 20px;
`;
const login = () => {
  return (
    <Container>
      <ContainerInnerExtend>
        <Login />
        <Register />
      </ContainerInnerExtend>
    </Container>
  );
};

export default login;
