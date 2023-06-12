import { Button } from "../../Buttons";
import { useStyles } from "./Dialog.style";
import { FC, HTMLAttributes, useContext } from "react";
import { DialogContext } from "../../../contexts/dialog/DialogCtx";

const Dialog: FC<HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const classes = useStyles();
  const { dialog, closeDialogAction } = useContext(DialogContext);
  const { data } = dialog;
  const { title, content, buttonText, onClick } = data;

  return (
    <div {...props} className={props.className}>
      <div className={classes.overlayPopup}></div>
      <div className={classes.popup}>
        <p>{title}</p>
        <p>{content}</p>
        <div className={classes.containedbtn}>
          <Button variant="contained" onClick={() => closeDialogAction()}>
            cancel
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              closeDialogAction();
              if (!onClick) return;
              onClick();
            }}
          >
            {buttonText === "" ? "Confirm" : buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
