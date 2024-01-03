import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { styled } from "styled-components";
import FTextInput from "../common/formik/FTextInput";
import FPasswordInput from "../common/formik/FPasswordInput";
import SubmitButton from "../common/form/SubmitButton";
import Container from "./Container";
import { UserApiAgent } from "@/utils/hooks/agents/userApiAgent";
import Lottie from "../common/Lottie";
import loader from "../../public/animation/loader.json";
import { Interface } from "node:readline/promises";
import ErrorMsg from "../common/form/ErrorMsg";
import { useModalHook } from "@/utils/hooks/useModalHook";
import { setCookie } from "cookies-next";

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

interface token {
  twoFaToken: string;
  email: string;
}
interface Props {
  response: token;
  CloseModal?: () => void;
}

const TwoFa = ({ response, CloseModal }: Props) => {
  const twoFaSchema = yup.object().shape({
    twofa: yup.string().required("Required"),
  });

  const [isLodaing, setIsLoading] = useState(false);
  const [cusError, setCusError] = useState<string>();
  const [res, setRes] = useState<string>();
  const resendCode = () => {
    console.log(response);
  };

  return (
    <Container>
      <>
        <h1>Two-Factor Authentication</h1>
        <Formik
          initialValues={{
            twofa: "",
          }}
          validationSchema={twoFaSchema}
          onSubmit={async (values) => {
            setIsLoading(true);
            const result = await UserApiAgent.twoFa(
              values.twofa,
              response.twoFaToken
            ).catch((err) => {
              setCusError("Invalid verification code");
              console.log(err);
            });
            setRes(result);
            setIsLoading(false);
            setCookie("token", result?.refreshToken, {
              expires: new Date(result?.expire),
            });
            if (CloseModal) CloseModal();
          }}
        >
          {(pros) => (
            <FormSc>
              {!isLodaing ? (
                <>
                  {res ? (
                    <p>Two Done</p>
                  ) : (
                    <>
                      <p>We sent a verification code to your email address</p>
                      <FTextInput label="Verification Code" name="twofa" />
                      <p onClick={resendCode}>Resend Code to email</p>
                      <SubmitButton name="Submit" />
                      {cusError && <ErrorMsg text={cusError} />}
                    </>
                  )}
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

export default TwoFa;
