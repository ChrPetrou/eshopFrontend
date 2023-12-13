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
  const signupSchema = Yup.object().shape({
    firstName: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),

    lastName: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),

    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Required"),
  });

  return (
    <Container>
      <ContainerInnerExtend>
        <Login signupSchema={signupSchema} />
        <Login signupSchema={signupSchema} />
      </ContainerInnerExtend>
    </Container>
  );
};

export default login;
