import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  max-width: 1140px;
  padding: 0 15px;
`;

interface myProps {
  children?: React.ReactNode;
  className?: string;
}

const ContainerInner = ({ className, children }: myProps) => {
  return <Container className={className}>{children}</Container>;
};

export default ContainerInner;
