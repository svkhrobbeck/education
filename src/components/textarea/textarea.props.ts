import { ComponentProps } from "react";
import { FieldError } from "react-hook-form";

export type TextareaProps = ComponentProps<"textarea"> & {
  error?: FieldError;
};
