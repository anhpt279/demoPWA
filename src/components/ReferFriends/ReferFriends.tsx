import PageLayout from "../PageLayout/PageLayout";
import { useStyles } from "./ReferFriends.style";
import referImg from "../../assets/images/refer/refer.png";
import { ClipboardCopy } from "../ClipboardCopy";
import { useNavigate } from "react-router-dom";
import { FC, HTMLAttributes } from "react";
import IconLeftBlack from "../../assets/icons/arrow-left.png";
import clsx from "clsx";

export const ReferFriends: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <PageLayout {...props} className={clsx(props.className, classes.root)}>
      <div className={classes.refer}>
        <div onClick={() => navigate(-1)} className={classes.referBack}>
          <img src={IconLeftBlack} srcSet={`${IconLeftBlack} 2x`} />
        </div>
        <h1 className={classes.referHeader}>Refer to Friends</h1>
      </div>
      <div className={classes.referContent}>
        <img
          src={referImg}
          srcSet={`${referImg} 2x`}
          alt="referImg"
          className={classes.referImg}
        />
        <p className={classes.referTitle}>Get 50.000d for referring friends</p>
        <p className={classes.referDesc}>
          You’ll get 50.000d in credits when someone sign up using your refer
          link
        </p>
      </div>
      <div className={classes.referLink}>
        <ClipboardCopy copyText={process.env.REACT_APP_REFER_LINK} />
      </div>
    </PageLayout>
  );
};
export default ReferFriends;
