import React from "react";
import { Formik, Field } from "formik";
import * as yup from "yup";
import { styled } from "styled-components";
import { colors } from "@/configs/colors";
import InputField from "../common/form/InputField";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  & h1 {
    margin-bottom: 10px;
  }
`;

const Form = styled.form`
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
  /* background-color: ${colors.light}; */
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

interface LoginProps {
  signupSchema: yup.ObjectSchema<any>;
}

const Login = ({ signupSchema }: LoginProps) => {
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
        {({
          errors,
          touched,
          handleChange,
          handleBlur,
          values,
          setFieldValue,
        }) => (
          <Form>
            <InputField
              name={"firstName"}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
              setFieldValue={setFieldValue}
              values={values}
            />
            <InputField
              name={"lastName"}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
              setFieldValue={setFieldValue}
              values={values}
            />
            <InputField
              name={"email"}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
              setFieldValue={setFieldValue}
              values={values}
            />
            <InputField
              name={"password"}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
              setFieldValue={setFieldValue}
              values={values}
            />
            <InputField
              name={"confirmPassword"}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
              setFieldValue={setFieldValue}
              values={values}
            />

            <button>Submit</button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Login;
