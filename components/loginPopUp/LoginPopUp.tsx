import { colors } from "@/configs/colors";
import React, { useState } from "react";
import { css, keyframes, styled } from "styled-components";
import Login from "./Login";
import Register from "./Register";

const fadeIn = keyframes`
  0% {
    pointer-events: none;
    top: 100%;
  }
  50% {
    top: 0;
  }

  100%{
    top: 0;
  }
  `;

const fadeOut = keyframes`
0% {
  top: 0;
  
}
50% {
  top: 100%;
}

100%{
  top: 100%;
}
`;

const Container = styled.div<{ $toggleLogin: boolean }>`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  top: 0;
  left: 0;
  border-radius: 10px;
  width: 100%;
  height: 100%;

  transform-origin: top;
  /* max-width: 950px;
  max-height: 550px; */
  background-color: ${({ theme }) => theme.light};
  gap: 10px;
  position: relative;
  overflow: hidden;
  &::-webkit-scrollbar {
    width: 5px; /* Adjust the width as needed */
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    /* background-color: transparent; */
    display: none;
  }
  &::before {
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.dark};
    height: 100%;
    width: 100%;
    top: 100%;
    left: 0;

    /* ${({ $toggleLogin }) =>
      $toggleLogin
        ? css`
            animation: ${fadeIn} 0.55s ease-in-out forwards;
          `
        : css`
            animation: ${fadeOut} 0.55s ease-in-out forwards;
          `} */
  }
`;

const FormContainer = styled.div<{ $toggleLogin: boolean }>`
  width: 100%;
  overflow: hidden;
  display: flex;
  margin: auto;
  max-width: 450px;
  padding: 20px;
  gap: 20px;
  & > div {
    transition: 0.45s all linear;
    transform: translateX(
      ${({ $toggleLogin }) => ($toggleLogin ? "calc(-100% - 20px)" : "0")}
    );
  }
  &::-webkit-scrollbar {
    width: 5px; /* Adjust the width as needed */
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    /* background-color: transparent; */
    display: none;
  }
`;

const CTA = styled.div<{ $toggleLogin: boolean }>`
  display: flex;
  background-color: ${({ $toggleLogin, theme }) =>
    !$toggleLogin ? theme.dark : theme.light};
  z-index: 1;
  width: 100%;
  padding: 5px;
  /* max-width: 80%; */
  border-radius: 50% 50% 0 0;
  text-align: center;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  transition: all 0.25s linear;
  & p {
    color: ${({ $toggleLogin, theme }) =>
      !$toggleLogin ? theme.light : theme.dark};
  }
`;

const LoginPopUp = () => {
  const [toggleLogin, setToggleLogin] = useState(true);

  const [swapLogin, setWwapLogin] = useState(true);
  return (
    <Container
      $toggleLogin={toggleLogin}
      onAnimationEndCapture={() => setWwapLogin(!swapLogin)}
      onAnimationStart={(e) => e.preventDefault}
    >
      <FormContainer $toggleLogin={toggleLogin}>
        <Login />
        <Register />
      </FormContainer>
      <CTA
        onClick={() => setToggleLogin(!toggleLogin)}
        $toggleLogin={toggleLogin}
      >
        <p> {toggleLogin ? "Register" : "Login"}</p>
      </CTA>
    </Container>
  );
};

export default LoginPopUp;
