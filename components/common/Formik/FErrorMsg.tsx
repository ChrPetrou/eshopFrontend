import React from "react";
import { styled } from "styled-components";
import ErrorMsg from "../form/ErrorMsg";

const FErrorMsg = ({ error }: { error: string | undefined }) => {
  return <ErrorMsg text={error} position={"absolute"} />;
};

export default FErrorMsg;
