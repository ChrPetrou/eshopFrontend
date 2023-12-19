import { Form } from "formik";
import React from "react";
import { styled } from "styled-components";

const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
  margin: 0 auto;
  z-index: 1;
  min-width: 100%;
  & h1 {
    text-align: center;
  }
`;

const FormSc = styled(Form)`
  display: flex;
  min-width: 250px;
  flex-direction: column;
  gap: 20px;
`;

interface Props {
  children: JSX.Element;
}

const Container = ({ children }: Props) => {
  return <ContainerInner>{children}</ContainerInner>;
};

export default Container;
