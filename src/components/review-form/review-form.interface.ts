import { ComponentProps } from "react";

export interface ReviewFormProps extends ComponentProps<"div"> {
  productId: string;
}

export interface ReviewFormValues {
  name: string;
  title: string;
  description: string;
  rating: number;
}

export interface ReviewResponse {
  name: string;
  rating: number;
  description: string;
  title: string;
  id: number;
  productId: string;
}
