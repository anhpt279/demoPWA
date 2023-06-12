import { useStyles } from "./SuccessfulNotification.style";
import { Button } from "../../components/Buttons";
import { FC, HTMLAttributes } from "react";
import clsx from "clsx";

interface ISuccessfulNotification {
  title: string;
  desc: string;
  button: string;
  onClickButton: () => void;
  image: any;
}

export const SuccessfulNotification: FC<
  ISuccessfulNotification & HTMLAttributes<HTMLDivElement>
> = (props: any) => {
  const { title, desc, button, onClickButton, image } = props;
  const classes = useStyles();

  return (
    <div {...props} className={clsx(classes.root, props.className)}>
      <div className={classes.successContent}>
        <p className={classes.successTitle}>{title}</p>
        <p className={classes.successDesc}>{desc}</p>
        <div className={classes.successImg}>
          <img src={image} alt="" />
        </div>
      </div>
      <div className={classes.successBtn}>
        <Button variant="contained" onClick={() => onClickButton()}>
          {button}
        </Button>
      </div>
    </div>
  );
};
