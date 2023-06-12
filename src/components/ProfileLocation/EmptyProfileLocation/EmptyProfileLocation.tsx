import React, { FC, HTMLAttributes } from "react";
import { useStyles } from "./EmptyProfileLocation.style";
import { Button } from "../../Buttons";
import EmptyLocation from "src/assets/images/profile/emtyLoction.png";
import clsx from "clsx";
interface IEmptyProfileLocation {
  setIsOpen: (state: boolean) => void;
}

export const EmptyProfileLocation: FC<
  IEmptyProfileLocation & HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { setIsOpen, ...otherProps } = props;
  const classes = useStyles();

  return (
    <div {...otherProps} className={clsx(classes.root, otherProps.className)}>
      <div className={classes.content}>
        <div className={classes.title}>
          <h1>No Address Yet</h1>
          <p>{`Please set your location now for better experience`}</p>
        </div>
        <img src={EmptyLocation} srcSet={`${EmptyLocation} 2x`} alt="" />
        <div className={classes.btn}>
          <Button variant="contained" onClick={() => setIsOpen(true)}>
            Set Location
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmptyProfileLocation;
