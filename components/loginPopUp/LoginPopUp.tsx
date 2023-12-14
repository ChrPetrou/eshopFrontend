import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background-color: red;
`;

const LoginPopUp = () => {
  return <Container>LoginPopUp</Container>;
};

export default LoginPopUp;
