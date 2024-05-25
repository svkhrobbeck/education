import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { IChildren } from "@/helpers/interfaces";

type BtnTagProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & IChildren;

export type ButtonProps = BtnTagProps & {
  appearance: "primary" | "ghost" | "failure" | "success";
  arrow?: "right" | "down" | "none";
  size?: "s" | "m" | "l";
};
