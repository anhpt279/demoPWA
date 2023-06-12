import clsx from "clsx";
import React, { FC, HTMLAttributes, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Buttons";
import PageLayout from "../PageLayout/PageLayout";
import { useStyles } from "./ProfileChangePassword.style";
import iconEyeClose from "../../assets/icons/Icon-eye.svg";
import iconEyeOpen from "../../assets/icons/eye.svg";
import IconLeftBlack from "../../assets/icons/arrow-left.png";
import { IAuthCtx, IUser } from "../../contexts/users/types";
import { UserCtx } from "../../contexts/users/UserCtx";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import DEFAULT_THEME from "../../themes/theme";

export const ProfileChangePassword: FC<HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState<string>("");
  const [newConfirmPassword, setNewConfirmPassword] = useState<string>("");
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [parsedUserLS] = useLocalStorage("user", []);
  const [validateMsg, setValidateMsg] = useState<{
    [key: string]: string;
  }>({});
  const checkPassword = () => {
    const currentUser = parsedUserLS.find((item: IUser) => item.loggedIn);
    return currentUser.password === currentPassword;
  };
  const { updateCurrentUser } = useContext<IAuthCtx>(UserCtx);
  const renderCardPassword = (
    value: string,
    title: string,
    placeholder: string,
    isActive: boolean,
    onChange: Function
  ) => {
    const onBlurChange = (e: React.FocusEvent<HTMLInputElement>) => {
      const { name } = e.target;
      if (
        newPassword.length < 6 &&
        newPassword.length > 0 &&
        name === "New password"
      ) {
        setValidateMsg((state) => ({
          ...state,
          [title]: "Password must be more than 5 characters",
        }));
      }
      if (
        newConfirmPassword !== newPassword &&
        newConfirmPassword.length > 0 &&
        name === "Confirm new password"
      ) {
        setValidateMsg((state) => ({
          ...state,
          [title]: "New pass must be the same as confirm password",
        }));
      }
      if (
        !checkPassword() &&
        currentPassword.length > 0 &&
        name === "Current password"
      ) {
        setValidateMsg((state) => ({
          ...state,
          [title]: "Old password is not correct!",
        }));
      }
      setIsInputed(false);
    };

    const onClickInput = () => {
      setValidateMsg({
        ...validateMsg,
        [title]: "",
      });
      setIsInputed(true);
    };

    const [isShow, setIsShow] = useState<boolean>(isActive);
    const [isInputed, setIsInputed] = useState<boolean>(false);

    return (
      <div className={classes.cardInput}>
        <p>{title}</p>
        <input
          name={title}
          type={isShow ? "password" : "text"}
          value={value}
          onChange={(e) => onChange(e)}
          placeholder={placeholder}
          className={clsx(classes.inputPassword, isInputed && classes.active)}
          onClick={onClickInput}
          onBlur={onBlurChange}
        />
        <p
          className={classes.validationText}
          style={{ color: DEFAULT_THEME.theme.palette.error.main }}
        >
          {validateMsg[title]}
        </p>
        {isShow ? (
          <img
            src={iconEyeClose}
            onClick={() => {
              setIsShow(!isShow);
            }}
            className={classes.iconEye}
          />
        ) : (
          <img
            src={iconEyeOpen}
            onClick={() => {
              setIsShow(!isShow);
            }}
            className={classes.iconEye}
          />
        )}
      </div>
    );
  };

  const validateSetting = (field: string, prop: string) => {
    if (field === "") {
      setValidateMsg((state) => ({
        ...state,
        [prop]: "Please fill in this field!",
      }));
    }
  };

  const resetPassSubmit = () => {
    let checkValidation = true;
    for (const i in validateMsg) {
      if (validateMsg[i] !== "") {
        checkValidation = false;
      }
    }
    validateSetting(currentPassword, "Current password");
    validateSetting(newPassword, "New password");
    validateSetting(newConfirmPassword, "Confirm new password");
    if (
      !checkValidation ||
      !newConfirmPassword ||
      !newPassword ||
      !currentPassword
    )
      return;
    updateCurrentUser({ password: newConfirmPassword });
    navigate("/profile/information/success");
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
          <h6>Change Password</h6>
        </div>
      </PageLayout>
      <PageLayout className={classes.content}>
        <form action="POST">
          <div className={classes.newPassword}>
            <div style={{ paddingBottom: 16 }}>
              {renderCardPassword(
                currentPassword,
                "Current password",
                "Type your current password here",
                true,
                (e: React.ChangeEvent<HTMLInputElement>) => {
                  setCurrentPassword(e.target.value);
                }
              )}
            </div>
            {renderCardPassword(
              newPassword,
              "New password",
              "Type your password here",
              true,
              (e: React.ChangeEvent<HTMLInputElement>) => {
                setNewPassword(e.target.value);
              }
            )}

            {renderCardPassword(
              newConfirmPassword,
              "Confirm new password",
              "Type your confirm password here",
              true,
              (e: React.ChangeEvent<HTMLInputElement>) => {
                setNewConfirmPassword(e.target.value);
              }
            )}
          </div>
        </form>
        <Button
          variant="contained"
          className={classes.btnContent}
          onClick={resetPassSubmit}
        >
          Save
        </Button>
      </PageLayout>
    </div>
  );
};

export default ProfileChangePassword;
