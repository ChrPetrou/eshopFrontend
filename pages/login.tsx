import Container from "@/components/common/Container";
import ContainerInner from "@/components/common/ContainerInner";
import Login from "@/components/login/Login";
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
        <Login />
      </ContainerInnerExtend>
    </Container>
  );
};

export default login;
