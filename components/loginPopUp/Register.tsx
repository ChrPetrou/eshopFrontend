import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { styled } from "styled-components";
import FTextInput from "../common/formik/FTextInput";
import FPasswordInput from "../common/formik/FPasswordInput";
import SubmitButton from "../common/form/SubmitButton";
import Container from "./Container";
import { UserApiAgent } from "@/utils/hooks/agents/userApiAgent";
import ErrorMsg from "../common/form/ErrorMsg";
import Lottie from "../common/Lottie";
import loader from "../../public/animation/loader.json";
import { setCookie } from "cookies-next";
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
    username: yup
      .string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  return (
    <Container>
      <>
        <h1>Register</h1>
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={signupSchema}
          onSubmit={async (values) => {
            setIsLoading(true);
            const token = await UserApiAgent.register(
              values.email,
              values.password,
              values.username
            ).catch((err) => {
              console.log("error:", err);
              if (err.response.status == 400)
                setError("invalid password or/and email");
            });
            if (token) {
              setResponse({
                twoFaToken: token?.validateToken,
                type: "validation",
                email: values.email,
              });
            }
            setIsLoading(false);
          }}
        >
          {(pros) => (
            <FormSc>
              {isLoading ? (
                <>
                  <Lottie
                    mHeigth="200px"
                    mWidth="150px"
                    isLoader={true}
                    path={loader}
                  />{" "}
                </>
              ) : (
                <>
                  <FTextInput label="Username" name="username" />

                  <FTextInput label="Email" name="email" />
                  <FPasswordInput label="Password" name="password" />
                  <FPasswordInput
                    label="Confirm Password"
                    name="confirmPassword"
                  />
                  {error && <ErrorMsg text={error} />}
                  <SubmitButton name="Submit" />
                </>
              )}
            </FormSc>
          )}
        </Formik>
      </>
    </Container>
  );
};

export default Register;
