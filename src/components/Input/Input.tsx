import React, { FC, InputHTMLAttributes } from "react";
import { useStyles } from "./Input.style";
import clsx from "clsx";
import { Controller, UseFormReturn } from "react-hook-form";
import { FormValue } from "../SignIn/SignIn";
import Images from "src/assets/images";

interface IInputProps {
  name: "phone" | "password";
  label?: string;
  disable?: boolean;
  form: UseFormReturn<FormValue>;
}

export const InputField: FC<
  IInputProps & InputHTMLAttributes<HTMLInputElement>
> = (props) => {
  const { name, form, label, disable, ...otherProps } = props;
  const { control } = form;
  const classes = useStyles();
  const [isActive, setisActive] = React.useState<boolean>(false);

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <div
          className={clsx(classes.root, props.className)}
          onClick={() => setisActive(true)}
          onBlur={() => setisActive(false)}
        >
          <label htmlFor={name} className={classes.lable}>
            {label}
          </label>
          <div>
            <input
              onChange={onChange}
              onBlur={onBlur}
              name={name}
              value={value}
              disabled={disable}
              className={clsx(
                classes.input,
                isActive && classes.inputActive,
                error && classes.error,
                props.className
              )}
              {...otherProps}
            />
            {error && <img src={Images.error} alt="" />}
          </div>
        </div>
      )}
    ></Controller>
  );
};

export const PassWordField: FC<
  IInputProps & InputHTMLAttributes<HTMLInputElement>
> = (props) => {
  const { name, form, label, disable, ...otherProps } = props;
  const { control } = form;
  const classes = useStyles();
  const [isActive, setisActive] = React.useState<boolean>(false);
  const [showPass, setShowPass] = React.useState<boolean>(false);
  const [type, setType] = React.useState<string>("password");

  const handleTogglePass = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
    setShowPass(!showPass);
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <div
          className={clsx(classes.root, props.className)}
          onClick={() => setisActive(true)}
          onBlur={() => setisActive(false)}
        >
          <label htmlFor={name} className={classes.lable}>
            {label}
          </label>
          <div className="">
            <input
              type={type}
              onChange={onChange}
              onBlur={onBlur}
              name={name}
              value={value}
              disabled={disable}
              className={clsx(
                classes.input,
                isActive && classes.inputActive,
                error && classes.error,
                props.className
              )}
              {...otherProps}
            />
            {error ? (
              <img src={Images.error} alt="" />
            ) : (
              <img
                src={showPass === true ? Images.eyeT : Images.eyeF}
                alt=""
                onClick={handleTogglePass}
              />
            )}
          </div>
        </div>
      )}
    ></Controller>
  );
};
