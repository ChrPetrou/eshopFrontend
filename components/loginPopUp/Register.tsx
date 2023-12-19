import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { styled } from "styled-components";
import FTextInput from "../common/formik/FTextInput";
import FPasswordInput from "../common/formik/FPasswordInput";
import SubmitButton from "../common/form/SubmitButton";
import Container from "./Container";

const FormSc = styled(Form)`
  display: flex;
  min-width: 250px;
  flex-direction: column;
  gap: 20px;
`;

interface Props {
  setResponse: React.Dispatch<React.SetStateAction<any>>;
}
const Register = ({ setResponse }: Props) => {
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
      <>
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
              <SubmitButton name="Submit" />
            </FormSc>
          )}
        </Formik>
      </>
    </Container>
  );
};

export default Register;
