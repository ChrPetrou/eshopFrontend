import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { styled } from "styled-components";
import FTextInput from "../common/formik/FTextInput";
import FPasswordInput from "../common/formik/FPasswordInput";
import SubmitButton from "../common/form/SubmitButton";
import Container from "./Container";
import { UserApiAgent } from "@/utils/hooks/agents/userApiagent";
import Lottie from "../common/Lottie";
import loader from "../../public/animation/loader.json";

const FormSc = styled(Form)`
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  width: 100%;
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
  justify-content: center;
  /* position: absolute; */
  top: 100%;
  width: 100%;
  p {
    font-size: 14px;
  }
`;

interface Props {
  setResponse: React.Dispatch<React.SetStateAction<any>>;
}

const Login = ({ setResponse }: Props) => {
  const signInSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Required"),
    password: yup
      .string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const [isLodaing, setIsLoading] = useState(false);
  // const [response, setResponse] = useState<token>();
  const [error, setError] = useState<string>();
  return (
    <Container>
      <>
        <h1>Login</h1>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={signInSchema}
          onSubmit={async (values) => {
            setIsLoading(true);
            const token = await UserApiAgent.login(
              values.email,
              values.password
            ).catch((err) => {
              console.log(err);
              if (err.response.status == 400)
                setError("invalid password or/and email");
            });
            if (token) setResponse({ ...token, email: values.email });
            setIsLoading(false);
            console.log(token);
          }}
        >
          {(pros) => (
            <FormSc>
              {!isLodaing ? (
                <>
                  {" "}
                  <FTextInput label="Email" name="email" />
                  <FPasswordInput label="Password" name="password" />
                  {error && (
                    <ErrorMsg>
                      <p>{error}</p>
                    </ErrorMsg>
                  )}
                  <SubmitButton name="Submit" />
                </>
              ) : (
                <>
                  <Lottie
                    mHeigth="200px"
                    mWidth="150px"
                    isLoader={true}
                    path={loader}
                  />
                </>
              )}
            </FormSc>
          )}
        </Formik>
      </>
    </Container>
  );
};

export default Login;
