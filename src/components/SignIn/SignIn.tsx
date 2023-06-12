import React, { FC, HTMLAttributes, useContext, useState } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Images from "src/assets/images";
import { UserCtx } from "src/contexts/users/UserCtx";
import { Button } from "../Buttons";
import { InputField, PassWordField } from "../Input";
import { useStyles } from "./SignIn.style";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";

export type FormValue = {
  phone?: string;
  password?: string;
};

export const SignIn: FC<HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [phone, setPhone] = useState<any>("");
  const { signins, usersData } = useContext(UserCtx);
  const [validMsg, setValidMsg] = useState<FormValue>({
    phone: "",
    password: "",
  });
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object().shape({
    phone: Yup.string().matches(phoneRegExp, "Please enter your phone number"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });
  const form = useForm({
    defaultValues: {
      phone: "",
      password: "",
    },
    reValidateMode: "onSubmit",
    resolver: yupResolver(validationSchema),
  });
  React.useEffect(() => {
    const subscription = form.watch((value) => {
      setPhone(value.phone);
    });
    return () => subscription.unsubscribe();
  }, [form.watch]);
  const onSubmit = (data: any) => {
    const { phone, password } = data;
    const haveWarning: string = signins(phone, password, navigate);
    if (haveWarning === "phone is incorrect") {
      setValidMsg({
        phone: haveWarning,
        password: "",
      });
    } else if (haveWarning === "password is incorrect") {
      setValidMsg({
        phone: "",
        password: haveWarning,
      });
    }
    if (haveWarning === "") {
      form.reset();
    }
  };

  return (
    <div {...props} className={clsx(classes.root, props.className)}>
      <div className={classes.header}>
        <img
          src={Images.arrowBack}
          alt=""
          className=""
          onClick={() => navigate("/onboarding")}
        />
        <p>
          New users?<span onClick={() => navigate("/signup")}>Sign up</span>
        </p>
      </div>
      <form
        action="POST"
        onSubmit={form.handleSubmit(onSubmit)}
        className={classes.form}
      >
        <div>
          <div className={classes.title}>Sign In</div>
          <div className={classes.inputs}>
            <div className={clsx(validMsg.phone && classes.inputform)}>
              <InputField
                label="Phone number"
                name="phone"
                placeholder="Type your phone number here"
                type="tel"
                form={form as UseFormReturn<FormValue> & string}
              />
              <div className={classes.validate}>
                {form.formState.errors.phone?.message || validMsg.phone}
              </div>
            </div>
            <div className={clsx(validMsg.password && classes.inputform)}>
              <PassWordField
                name="password"
                label="Password"
                placeholder="Type your password here"
                form={form as UseFormReturn<FormValue> & string}
              />
              <div className={classes.validate}>
                {form.formState.errors.password?.message || validMsg.password}
              </div>
            </div>
          </div>
          <div
            className={classes.forgot}
            onClick={() => {
              if (usersData.length === 0) {
                alert(" please sign up first!");
                return;
              }
              if (!usersData.some((item) => item.username === phone)) {
                alert(
                  "This phone havent signup yet (If you already sign up please fill in the phone input"
                );
              } else {
                navigate("/signin/otp", { state: phone });
              }
            }}
          >
            Forgot your password?
          </div>
        </div>
        <div className={classes.btn}>
          <Button variant="contained">Continue</Button>
        </div>
      </form>
    </div>
  );
};
export default SignIn;
