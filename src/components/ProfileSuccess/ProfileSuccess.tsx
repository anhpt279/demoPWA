import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import { useStyles } from "./ProfileSuccess.style";
import { Button } from "../Buttons";
import PageLayout from "../PageLayout/PageLayout";
import Successfully from "../../assets/images/YourOrder/SuccessChange.png";
import { useNavigate } from "react-router-dom";

export const ProfileSuccess: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <PageLayout {...props} className={clsx(classes.root, props.className)}>
      <div className={classes.content}>
        <h3>Successfully!</h3>
        <p>Your information has been updated</p>
      </div>
      <img
        src={Successfully}
        srcSet={`${Successfully} 2x`}
        alt="successChange"
        className={classes.image}
      />
      <div>
        <Button variant="contained" onClick={() => navigate("/")}>
          Ok
        </Button>
      </div>
    </PageLayout>
  );
};

export default ProfileSuccess;
