import { ComponentProps, ForwardedRef } from "react";
import { FieldError } from "react-hook-form";

export interface InputProps extends ComponentProps<"input"> {
  error?: FieldError;
  wrapperClassName?: string;
}

export type InputRefType = ForwardedRef<HTMLInputElement>;
