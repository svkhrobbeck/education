import { ComponentProps, ForwardedRef } from "react";
import { FieldError } from "react-hook-form";

export type TextareaProps = ComponentProps<"textarea"> & {
  error?: FieldError;
  wrapperClassName?: string;
};

export type TextareaRefType = ForwardedRef<HTMLTextAreaElement>;
