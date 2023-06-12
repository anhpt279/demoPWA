import clsx from "clsx";
import React, { FC, HTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorLayout } from "src/pages/Error";
import { useStyles } from "./NotFound.style";

export const NotFound: FC<HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div {...props} className={clsx(classes.root, props.className)}>
      <ErrorLayout
        title={`Oops!
       `}
        desc={"Page not found."}
        btn={"Back to Home"}
        handleClick={() => navigate("/")}
      />
    </div>
  );
};

export default NotFound;
