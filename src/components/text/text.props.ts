import { DetailedHTMLProps, ParamHTMLAttributes } from "react";
import { IChildren } from "@/helpers/interfaces";

type ParagraphProps = DetailedHTMLProps<ParamHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

export type TextProps = IChildren & ParagraphProps & { size?: "s" | "m" | "l" };
