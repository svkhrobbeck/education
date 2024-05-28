import { ComponentProps } from "react";
import { FieldError } from "react-hook-form";

export type RatingProps = ComponentProps<"div"> & {
  rating: number;
  error?: FieldError;
  editable?: boolean;
  setRating?: (rating: number) => void;
};
