import React, { InputHTMLAttributes, DetailedHTMLProps } from "react";
import { FieldProps } from "formik";
import { Box } from "rebass";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const InputField = ({
  field,
  form: { errors, touched },
  ...props
}: FieldProps & InputProps) => {
  const errorMessage = touched[field.name] && errors[field.name];
  return (
    <div>
      <input {...field} {...props} />
      {errorMessage && <Box color="crimson">{errorMessage}</Box>}
    </div>
  );
};
