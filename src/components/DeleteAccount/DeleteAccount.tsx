import { FC, HTMLAttributes, useState, useContext } from "react";
import IconLeftBlack from "../../assets/icons/arrow-left.png";
import { useStyles } from "./DeleteAccount.style";
import { useNavigate } from "react-router-dom";
import { Button } from "../Buttons";
import ConfirmDelete from "./ConfirmDelete/ConfirmDelete";
import { UserCtx } from "../../contexts/users/UserCtx";
import { IAuthCtx } from "../../contexts/users/types";
import MainDeletePage from "./MainDeletePage/MainDeletePage";
import { ICheck } from "./types";
import clsx from "clsx";
import { ProfileFactory } from "../../models/ProfileFactory";

const DeleteAccount: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const [checked, setChecked] = useState<ICheck>({
    reason1: false,
    reason2: false,
    reason3: false,
    reason4: false,
    reason5: false,
    reason6: false,
  });

  const [isConfirm, setIsConfirm] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>("");
  const { usersData, deleteAccount } = useContext<IAuthCtx>(UserCtx);
  const navigate = useNavigate();
  const classes = useStyles();

  const checkReason = (): boolean => {
    const { reason1, reason2, reason3, reason4, reason5, reason6 } = checked;
    return reason1 || reason2 || reason3 || reason4 || reason5 || reason6;
  };
  const onConfirmSubmit = () =>
    checkReason() ? setIsConfirm(true) : alert("Please select a reason");

  const onConfirmDelete = () => {
    const findUser = ProfileFactory.findUserData(usersData, phone);
    if (findUser) {
      deleteAccount(phone, navigate);
    } else {
      alert("The phone number not true");
    }
  };
  const onBack = () => (!isConfirm ? navigate(-1) : setIsConfirm(false));
  const onChangeRadio = (prop: string) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const originalCheck: ICheck = {
        reason1: false,
        reason2: false,
        reason3: false,
        reason4: false,
        reason5: false,
        reason6: false,
      };
      setChecked({
        ...originalCheck,
        [prop]: e.target.checked,
      });
    };
  };

  return (
    <div {...props} className={clsx(classes.root, props.className)}>
      <div className={classes.btnArrowLeft} onClick={onBack}>
        <img
          src={IconLeftBlack}
          srcSet={`${IconLeftBlack} 2x`}
          style={{ width: 24, height: 24, objectFit: "contain" }}
        />
      </div>
      <div className={classes.deleteAccountHeader}>
        {isConfirm ? "Confirm Delete" : "Delete Account"}
      </div>
      {!isConfirm ? (
        <MainDeletePage checked={checked} onChangeRadio={onChangeRadio} />
      ) : (
        <ConfirmDelete phone={phone} setPhone={setPhone} />
      )}
      <Button
        variant="outlined"
        className={classes.buttonTextColor}
        onClick={isConfirm ? onConfirmDelete : onConfirmSubmit}
      >
        {isConfirm ? "Delete Account " : "Confirm"}
      </Button>
    </div>
  );
};

export default DeleteAccount;
