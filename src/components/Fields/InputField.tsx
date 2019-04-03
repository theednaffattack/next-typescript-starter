import React, { InputHTMLAttributes, DetailedHTMLProps } from "react";
import { FieldProps } from "formik";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const InputField = ({ field, ...props }: FieldProps & InputProps) => {
  return <input {...field} {...props} />;
};
