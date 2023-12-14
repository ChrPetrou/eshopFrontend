import { colors } from "@/configs/colors";
import React from "react";
import { styled } from "styled-components";
import Login from "./Login";
import Register from "./Register";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  top: 0;
  left: 0;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  /* max-width: 950px;
  max-height: 550px; */
  background-color: ${colors.light};
  gap: 10px;

  overflow: scroll;
  &::-webkit-scrollbar {
    width: 5px; /* Adjust the width as needed */
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    /* background-color: transparent; */
    display: none;
  }
`;

const LoginPopUp = () => {
  return (
    <Container>
      <Login />
      <Register />
    </Container>
  );
};

export default LoginPopUp;
