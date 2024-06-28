import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";

type HTagProps = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

export type HeadingProps = PropsWithChildren<HTagProps & { tag: "h1" | "h2" | "h3" }>;
