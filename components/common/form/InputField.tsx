import { colors } from "@/configs/colors";
import { FormikErrors, FormikTouched, FormikValues } from "formik";
import React from "react";
import { styled } from "styled-components";

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
  hasError: boolean | "" | undefined;
}

const Input = styled.input<ErrorMsg>`
  width: 100%;
  padding: 10px;
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
  justify-content: flex-end;
  p {
    font-size: 14px;
  }
`;

interface MyFormValues {
  firstName: string;
  lastName: string;
  email: string;
}

interface FormikComputedProps<Values> {
  name: string;
  values: FormikValues;
  errors: FormikErrors<Values>;
  touched: FormikTouched<Values>;
  handleChange: {
    /** Classic React change handler, keyed by input name */
    (e: React.ChangeEvent<any>): void;
    /** Preact-like linkState. Will return a handleChange function.  */
    <T = string | React.ChangeEvent<any>>(
      field: T
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  }; // Adjust the event type based on your needs
  handleBlur: {
    /** Classic React blur handler, keyed by input name */
    (e: React.FocusEvent<any>): void;
    /** Preact-like linkState. Will return a handleBlur function. */
    <T = string | any>(fieldOrEvent: T): T extends string
      ? (e: any) => void
      : void;
  };
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean
  ) => Promise<void | FormikErrors<Values>>;
}

const InputField: React.FC<FormikComputedProps<MyFormValues>> = ({
  errors,
  touched,
  handleChange,
  handleBlur,
  values,
  name,
  setFieldValue,
}) => {
  return (
    <FieldContainer>
      <Input
        hasError={
          errors[name as keyof MyFormValues] &&
          touched[name as keyof MyFormValues]
        }
        type={"text"}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[name]}
        className={values[name]?.length > 0 ? "hasTxt" : ""}
      />
      <PlaceHolder>
        <p>
          {name.charAt(0).toUpperCase() +
            name
              .slice(1)
              .replace(/([A-Z])/g, " $1")
              .trim()}
        </p>
      </PlaceHolder>
      {errors[name as keyof MyFormValues] &&
      touched[name as keyof MyFormValues] ? (
        <ErrorMsg>
          <p>{errors[name as keyof MyFormValues]}</p>
        </ErrorMsg>
      ) : null}
    </FieldContainer>
  );
};

export default InputField;
