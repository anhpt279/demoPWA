import clsx from "clsx";
import React, { FC, HTMLAttributes } from "react";
import Images from "src/assets/images";
import { Button } from "src/components/Buttons";
import { useStyles } from "./Error.style";
interface IErrorLayout {
  title: string;
  desc: string;
  btn: string;
  handleClick: () => void;
  resetState?: () => void;
}

export const ErrorLayout: FC<IErrorLayout & HTMLAttributes<HTMLDivElement>> = (
  props: any
) => {
  const classes = useStyles();
  const { handleClick, title, desc, btn, ...otherProps } = props;

  return (
    <div {...props} className={clsx(classes.root, otherProps.className)}>
      <div className={classes.error}>
        <div className={classes.content}>
          <img src={Images.NotFound} alt="" />
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
        <div className={classes.btn}>
          <Button
            variant="contained"
            onClick={() => handleClick()}
            type={"submit"}
          >
            {btn}
          </Button>
        </div>
      </div>
    </div>
  );
};
