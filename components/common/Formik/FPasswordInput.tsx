import { useField } from "formik";
import React from "react";
import PasswordInput from "../form/PasswordInput";
import TextInput from "../form/TextInput";

const FPasswordInput: React.FC<{
  label: string;
  name: string;

  props?: { [key in string]: any };
}> = ({ label, name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <PasswordInput
      label={label}
      name={name}
      value={field.value}
      onChange={field.onChange}
      onBlur={field.onBlur}
      isError={!!meta.error && meta.touched}
      error={meta.error}
    />
  );
};

export default FPasswordInput;
