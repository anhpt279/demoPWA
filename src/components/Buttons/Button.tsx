import clsx from "clsx";
import React, { FC, HTMLAttributes } from "react";
import { useStyles } from "./Button.style";

interface IButtonProps {
  fullWidth?: boolean;
  variant?: "contained" | "outlined" | "text";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  disabled?: boolean;
  color?: "primary" | "secondary" | "inherit" | "paper" | "light";
  size?: "large" | "medium" | "small" | "extralarge";
  type?: any;
}

export const Button: FC<IButtonProps & HTMLAttributes<HTMLButtonElement>> =
  React.memo(({ children, variant, type, ...props }) => {
    const classes = useStyles();

    return (
      <button
        {...props}
        type={type}
        className={clsx(
          props.className,
          classes.root,
          variant === "contained" && classes.btnContainer,
          variant === "outlined" && classes.btnOutlined
        )}
      >
        {children}
      </button>
    );
  });
export default Button;
