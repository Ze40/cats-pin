import { ReactNode } from "react";

import { clsx } from "clsx";

import classes from "./style.module.scss";

interface ContainerProps {
  className?: string;
  children: ReactNode | ReactNode[];
}

export const Container = ({ className, children }: ContainerProps) => {
  return <div className={clsx(classes.container, "m-auto relative", className)}>{children}</div>;
};
