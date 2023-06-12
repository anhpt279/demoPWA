import React, { FC, HTMLAttributes, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import Images from "src/assets/images";
import { Button } from "../Buttons";
import { useStyles } from "./ResetPassword.style";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import clsx from "clsx";
import { UserCtx } from "../../contexts/users/UserCtx";

export const ResetPassword: FC<HTMLAttributes<HTMLDivElement>> = (
  props: any
) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { state }: any = useLocation();

  const { resetPass } = useContext(UserCtx);

  const [type, setType] = useState<string>("password");
  const [typeConfim, setTypeConfim] = useState<string>("password");
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isActiveConfim, setIsActiveConfim] = useState<any>(false);
  const [value, setValue] = useState<string>("");
  const [valueConfim, setValueConfim] = useState<string>("");
  const [isFocus, setIsForcus] = useState<boolean>(false);
  const [isFocusConfim, setIsForcusConfim] = useState<boolean>(false);

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    password_repeat: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Password must match"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(formOptions);

  const onSubmit = () => {
    resetPass({ username: state, password: valueConfim }, navigate);
    reset();
    navigate("/reset/pass/successful");
    return false;
  };

  const handleIconClick = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
    setIsActive(!isActive);
  };
  const handleIconConfimClick = () => {
    setIsActiveConfim(!isActiveConfim);
    if (typeConfim === "password") {
      setTypeConfim("text");
    } else {
      setTypeConfim("password");
    }
  };
  const handeleInputChange = (e: any) => {
    e.preventDefault();
    setValue(e.target.value);
    errors.password = false;
    errors.password_repeat = false;
  };
  const handeleInputConfimChange = (e: any) => {
    e.preventDefault();
    setValueConfim(e.target.value);
    errors.password = false;
    errors.password_repeat = false;
  };

  return (
    <div {...props} className={clsx(classes.root, props.className)}>
      <div className={classes.header}>
        <img
          src={Images.arrowBack}
          alt=""
          className=""
          onClick={() => navigate(-1)}
        />
      </div>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className={classes.title}>Reset password</div>
          <div>
            <label htmlFor="">New Password</label>
            <div className="">
              <input
                {...register("password")}
                name="password"
                type={type}
                value={value}
                placeholder="Type your password here"
                onChange={handeleInputChange}
                className={clsx(
                  isFocus && classes.input,
                  errors.password && classes.error
                )}
                onClick={() => setIsForcus(true)}
              />
              {!errors.password ? (
                <img
                  src={isActive === true ? Images.eyeT : Images.eyeF}
                  alt=""
                  onClick={handleIconClick}
                />
              ) : (
                <img src={Images.error} alt="" />
              )}
            </div>

            <div className={classes.validate}>{errors.password?.message}</div>
          </div>
          <div>
            <label htmlFor="">Confirm new Password</label>
            <div>
              <input
                {...register("password_repeat")}
                type={typeConfim}
                value={valueConfim}
                name="password_repeat"
                placeholder="Type your confirm password here"
                onChange={handeleInputConfimChange}
                className={clsx(
                  isFocusConfim && classes.input,
                  errors.password_repeat && classes.error
                )}
                onClick={() => setIsForcusConfim(true)}
              />
              {errors.password_repeat ? (
                <img src={Images.error} alt="" />
              ) : (
                <img
                  src={isActiveConfim === true ? Images.eyeT : Images.eyeF}
                  alt=""
                  onClick={handleIconConfimClick}
                />
              )}
            </div>

            <div className={classes.validate}>
              {errors.password_repeat?.message}
            </div>
          </div>
        </div>
        <div className={classes.btn1}>
          {value && valueConfim ? (
            <Button variant="contained" type={"submit"}>
              CONTINUE
            </Button>
          ) : (
            <Button variant="outlined">CONTINUE</Button>
          )}
        </div>
      </form>
    </div>
  );
};
export default ResetPassword;
