import React from "react";
import { styled } from "styled-components";

const ContainerInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* padding: 0 15px; */
  flex-direction: column;
`;

interface myProps {
  children?: React.ReactNode;
  className?: string;
}

const Container: React.FC<myProps> = ({ className, children }) => {
  return <ContainerInner className={className}>{children}</ContainerInner>;
};

export default Container;
