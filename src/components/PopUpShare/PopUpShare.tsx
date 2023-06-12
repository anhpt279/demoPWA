import React, { FC, HTMLAttributes } from "react";
import { useStyles } from "./PopUpShare.style";
import PageLayout from "../PageLayout/PageLayout";
import { ReactComponent as Exit } from "../../assets/images/YourOrder/Exit.svg";
import { ClipboardCopyDetails } from "../ClipboardCopyDetails";
import clsx from "clsx";

interface IPopUpShare {
  togglePopup: (state: boolean) => void;
}

export const PopUpShare: FC<IPopUpShare & HTMLAttributes<HTMLDivElement>> = (
  props: any
) => {
  const { togglePopup, ...otherProps } = props;
  const classes = useStyles();

  return (
    <PageLayout {...otherProps} className={clsx(props.className, classes.root)}>
      <div className={classes.overlay} onClick={() => togglePopup(false)}></div>
      <div className={classes.popup}>
        <Exit onClick={() => togglePopup(false)} className={classes.exit} />
        <p>Share this product</p>
        <p>If you like this article share it with your friends.</p>
        <div className={classes.referLink}>
          <ClipboardCopyDetails copyText="https://gomarket.vn/product/lemon-pound-cake" />
        </div>
      </div>
    </PageLayout>
  );
};

export default PopUpShare;
