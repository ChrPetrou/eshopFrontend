import { useField } from "formik";
import React from "react";
import TextInput from "../form/TextInput";

const FTextInput: React.FC<{
  label: string;
  name: string;

  props?: { [key in string]: any };
}> = ({ label, name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <TextInput
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

export default FTextInput;
