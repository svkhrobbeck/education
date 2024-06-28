import { ComponentProps, PropsWithChildren } from "react";

type ParagraphProps = PropsWithChildren<ComponentProps<"p">>;

export type TextProps = ParagraphProps & { size?: "s" | "m" | "l" };
