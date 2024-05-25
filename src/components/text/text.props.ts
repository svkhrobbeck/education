import { IChildren } from "@/helpers/interfaces";
import { DetailedHTMLProps, ParamHTMLAttributes } from "react";

type ParagraphProps = DetailedHTMLProps<ParamHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

export type TextProps = IChildren & ParagraphProps & { size?: "s" | "m" | "l" };
