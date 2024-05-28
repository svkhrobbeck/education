import { ComponentProps } from "react";
import { IChildren } from "@/helpers/interfaces";

type ParagraphProps = ComponentProps<"p"> & IChildren;

export type TextProps = ParagraphProps & ParagraphProps & { size?: "s" | "m" | "l" };
