import React from "react";
import { styled } from "styled-components";

const ErrorMsgContainer = styled.div<{ $position: string }>`
  display: flex;
  justify-content: ${({ $position }) =>
    $position == "static" ? "center" : "flex-end"};
  position: ${({ $position }) => $position};
  top: 100%;
  width: 100%;
  left: 0;
  p {
    font-size: 14px;
    color: red;
  }
`;

interface Error {
  text: string | undefined;
  position?: string;
}

const ErrorMsg = ({ text, position = "static" }: Error) => {
  return (
    <ErrorMsgContainer $position={position}>
      <p>{text}</p>
    </ErrorMsgContainer>
  );
};

export default ErrorMsg;
