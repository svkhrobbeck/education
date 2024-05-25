import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IChildren } from "@/helpers/interfaces";

type HTagProps = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

export type HeadingProps = IChildren & HTagProps & { tag: "h1" | "h2" | "h3" };
