import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { styled } from "styled-components";
import FTextInput from "../common/formik/FTextInput";
import FPasswordInput from "../common/formik/FPasswordInput";
import SubmitButton from "../common/form/SubmitButton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  flex: 1;
  padding: 10px;
  min-width: 250px;
  & h1 {
    text-align: center;
    margin-bottom: 10px;
  }
`;

const FormSc = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

const PlaceHolder = styled.div`
  display: flex;
  left: 5px;
  top: 0;
  bottom: 0;
  margin: auto;
  height: fit-content;

  z-index: 1;
  padding: 0 5px;
  position: absolute;
  pointer-events: none;
  user-select: none;
  transition: 0.15s all linear;
  font-size: 14px;
`;

interface ErrorMsg {
  hasError: boolean | "" | undefined;
}

const Input = styled.input<ErrorMsg>`
  width: 100%;
  padding: 8px;
  border-radius: 8px;

  outline: none;
  position: relative;
  background-color: transparent;
  border: ${({ hasError }) =>
    hasError ? " 1px solid red" : "1px solid black"};

  &:focus {
    + ${PlaceHolder} {
      bottom: 100%;
      background-color: white;
    }
  }

  &.hasTxt {
    + ${PlaceHolder} {
      bottom: 100%;
      background-color: white;
    }
  }
`;
const ErrorMsg = styled.div`
  display: flex;
  position: absolute;
  top: 100%;
  width: 100%;
  p {
    font-size: 14px;
  }
`;

const Register = () => {
  const signupSchema = yup.object().shape({
    firstName: yup.string().min(2, "Too Short!").max(50, "Too Long!"),
    lastName: yup.string().min(2, "Too Short!").max(50, "Too Long!"),
    email: yup.string().email("Invalid email").required("Required"),
    password: yup
      .string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Required"),
  });

  return (
    <Container>
      <h1>Register</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={signupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {(pros) => (
          <FormSc>
            <FTextInput label="First Name" name="firstName" />
            <FTextInput label="Last Name" name="lastName" />
            <FTextInput label="Email" name="email" />
            <FPasswordInput label="Password" name="password" />
            <FPasswordInput label="Confirm Password" name="confirmPassword" />
            <SubmitButton name="submit" />
          </FormSc>
        )}
      </Formik>
    </Container>
  );
};

export default Register;
