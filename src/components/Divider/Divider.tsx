import React, { FC, HTMLAttributes } from "react";
import clsx from "clsx";
import { useStyles } from "./Divider.style";

export const Divider: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const classes = useStyles();

  return <div {...props} className={clsx(classes.root, props.className)}></div>;
};
