import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import { useStyles } from "./ProfileInformationSuccess.style";
import { Button } from "../Buttons";
import PageLayout from "../PageLayout/PageLayout";
import Successfully from "../../assets/images/YourOrder/ChangePass.png";
import { useNavigate } from "react-router-dom";

export const ProfileInformationSuccess: FC<HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <PageLayout {...props} className={clsx(classes.root, props.className)}>
      <div className={classes.content}>
        <h3>Successfully!</h3>
        <p>Your new password has been set.</p>
      </div>
      <img src={Successfully} alt="Successfully Change Password" />
      <div className={classes.btnContent}>
        <Button variant="contained" onClick={() => navigate("/")}>
          Ok
        </Button>
      </div>
    </PageLayout>
  );
};

export default ProfileInformationSuccess;
