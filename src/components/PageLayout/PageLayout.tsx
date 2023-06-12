import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import { useStyles } from "./PageLayout.style";

const PageLayout: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => {
  const classes = useStyles();

  return (
    <div {...props} className={clsx(classes.root, props.className)}>
      {children}
    </div>
  );
};

export default PageLayout;
