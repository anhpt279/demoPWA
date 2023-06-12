import clsx from "clsx";
import React from "react";
import { useStyles } from "./LoadingSkeleton.style";

const LoadingSkeleton = (props: any) => {
  const classes = useStyles();
  return <div className={clsx(classes.root, props.className)}></div>;
};

export default LoadingSkeleton;
