import { colors } from "@/configs/colors";
import React, { useState } from "react";
import { css, keyframes, styled } from "styled-components";
import Login from "./Login";
import Register from "./Register";
import TwoFa from "./TwoFa";

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
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.light};
  gap: 5px;
`;

const FormContainer = styled.div<{ $toggleLogin: boolean }>`
  width: 100%;
  overflow: hidden;
  display: flex;
  margin: auto;
  max-width: 450px;
  /* padding: 0 10px; */
  gap: 20px;
  & > div {
    transition: 0.25s all linear;
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

const CTA = styled.div`
  display: flex;
  width: 100%;
  max-width: 200px;

  position: relative;
  border-radius: 8px;
  margin: auto;
  border: 1px solid black;
  overflow: hidden;
`;

const SwapSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
  padding: 5px;
  transition: all 0.15s linear;
  &:first-child {
    border-right: 2px solid black;
  }
  & p {
    flex: 1;
    text-align: center;
    color: white;
    mix-blend-mode: difference;
  }

  &.active {
    background-color: ${({ theme }) => theme.dark};
  }
`;

const LoginPopUp = () => {
  const [toggleLogin, setToggleLogin] = useState(false);
  interface token {
    twoFaToken: string;
    email: string;
  }
  const [response, setResponse] = useState<token>();
  return (
    <Container $toggleLogin={toggleLogin}>
      <CTA>
        {response ? (
          <></>
        ) : (
          <>
            <SwapSection
              onClick={() => setToggleLogin(false)}
              className={!toggleLogin ? "active" : ""}
            >
              <p>Login </p>
            </SwapSection>
            <SwapSection
              onClick={() => setToggleLogin(true)}
              className={toggleLogin ? "active" : ""}
            >
              <p>Register </p>
            </SwapSection>
          </>
        )}
      </CTA>
      <FormContainer $toggleLogin={toggleLogin}>
        {response ? (
          <TwoFa response={response} />
        ) : (
          <>
            {" "}
            <Login setResponse={setResponse} />
            <Register setResponse={setResponse} />
          </>
        )}
      </FormContainer>
    </Container>
  );
};

export default LoginPopUp;
