import clsx from "clsx";
import React, { FC, HTMLAttributes, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Buttons";
import PageLayout from "../PageLayout/PageLayout";
import { useStyles } from "./ProfileInformation.style";
import IconLeftBlack from "../../assets/icons/arrow-left.png";
import { IAuthCtx } from "../../contexts/users/types";
import { UserCtx } from "../../contexts/users/UserCtx";
import { formatPhone } from "../../utils/formatPhone";

export const ProfileInformation: FC<HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("YourEmail@gmail.com");
  const [isInputed, setIsInputed] = React.useState(false);
  const [name, setName] = React.useState<any>("");
  const { updateCurrentUser, userSpecificData } = useContext<IAuthCtx>(UserCtx);

  const nameUser = userSpecificData.name;
  const username: any = userSpecificData.username;
  const phone = formatPhone(username);

  React.useEffect(() => {
    setName(nameUser as string);
  }, []);
  const handleOnchange = (e: any) => {
    setName(e.target.value);
  };
  const handleClick = () => {
    updateCurrentUser({ name });
    navigate(-1);
  };

  const renderCardInformation = (disable: boolean, title: string) => {
    return (
      <div
        className={clsx(classes.cardInformation, disable && classes.discard)}
      >
        <p>{title}</p>
      </div>
    );
  };

  return (
    <div {...props} className={clsx(classes.root, props.className)}>
      <PageLayout className={classes.headerContent}>
        <div className={classes.header}>
          <div className={classes.btnArrowLeft} onClick={() => navigate(-1)}>
            <img
              src={IconLeftBlack}
              srcSet={`${IconLeftBlack} 2x`}
              style={{ width: 24, height: 24, objectFit: "contain" }}
            />
          </div>
          <h6>Profile Information</h6>
        </div>
      </PageLayout>
      <PageLayout className={classes.content}>
        <div>
          {renderCardInformation(true, "Phone number")}
          <input
            className={clsx(classes.discard, classes.input)}
            type="text"
            value={`+84 ${phone}`}
            disabled
          />
          <p className={classes.titleInforCanEdit}>You can edit here</p>
          {renderCardInformation(false, "Full Name")}
          <input
            className={clsx(classes.input, isInputed && classes.isActive)}
            type="text"
            value={name}
            onClick={() => setIsInputed(true)}
            onBlur={() => setIsInputed(false)}
            onChange={(e) => handleOnchange(e)}
          />
          {renderCardInformation(false, "Email Address")}
          <input
            className={clsx(classes.input, isInputed && classes.isActive)}
            type="text"
            value={email}
            onClick={() => setIsInputed(true)}
            onBlur={() => setIsInputed(false)}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <div className={classes.passwordChange}>
            {renderCardInformation(false, "Password")}
            <p onClick={() => navigate("/profile/changePassword")}>Change</p>
            <input
              className={clsx(classes.discard, classes.input)}
              type="password"
              disabled
              defaultValue={"123123123"}
            />
          </div>
        </div>
        <div className={classes.btnProfileInfo}>
          <Button className="mr8" onClick={() => navigate(-1)}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleClick}>
            Save
          </Button>
        </div>
      </PageLayout>
    </div>
  );
};
export default ProfileInformation;
