import React from "react";
import { colors } from "@/configs/colors";
import { styled } from "styled-components";
import FErrorMsg from "../formik/FErrorMsg";

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding: 5px 0;
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
  $hasError: boolean | "" | undefined;
}

const Input = styled.input<ErrorMsg>`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  outline: none;
  position: relative;
  border: ${({ $hasError }) =>
    $hasError ? " 1px solid red" : "1px solid black"};

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
  -webkit-autofill {
    box-shadow: 0 0 0 1000px white inset !important; /* Override default blue color with white */
  }
`;

const TextInput: React.FC<{
  label: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler;
  onBlur: React.FocusEventHandler;
  isError: boolean;
  error?: string;
}> = (props) => {
  return (
    <FieldContainer>
      <Input
        $hasError={props.isError}
        type={"text"}
        name={props.name}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        className={!!props.value ? "hasTxt" : ""}
      />
      <PlaceHolder>
        <p>{props.label}</p>
      </PlaceHolder>
      {props.isError ? <FErrorMsg error={props.error} /> : null}
    </FieldContainer>
  );
};

export default TextInput;
