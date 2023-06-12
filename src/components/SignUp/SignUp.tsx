import React, { FC, HTMLAttributes } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Images from "src/assets/images";
import { Button } from "../Buttons";
import { InputField } from "../Input";
import { useStyles } from "./SignUp.style";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormValue } from "../SignIn/SignIn";
import { UserCtx } from "../../contexts/users/UserCtx";
import clsx from "clsx";

export const SignUp: FC<HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [errorMes, setErrorMes] = React.useState("");
  const handleClick = () => {
    return navigate("/signin");
  };
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validationSchema = Yup.object().shape({
    phone: Yup.string().matches(phoneRegExp, "Please enter your phone number"),
  });
  const form = useForm({
    defaultValues: {
      phone: "",
    },
    reValidateMode: "onSubmit",
    resolver: yupResolver(validationSchema),
  });
  const { usersData }: any = React.useContext(UserCtx);
  const onSubmit = (data: any, e: any) => {
    e.preventDefault();
    if (usersData.some((item: any) => item.username === data.phone)) {
      return setErrorMes("The phone was available.");
    }
    navigate("/signup/otp", { state: { username: data.phone } });

    form.reset();
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
        <p>
          Already have an account?
          <span onClick={handleClick}>Sign in</span>
        </p>
      </div>
      <form
        action="POST"
        onSubmit={form.handleSubmit(onSubmit)}
        className={classes.form}
      >
        <div>
          <div className={classes.title}>Sign Up</div>
          <div>
            <div className="">
              <InputField
                name="phone"
                label="Phone number"
                placeholder="Type your phone number here"
                type="tel"
                form={form as UseFormReturn<FormValue> & string}
              />
            </div>
            <div className={classes.validate}>
              {form.formState.errors.phone?.message || errorMes}
            </div>
          </div>

          <div className={classes.desc}>
            By signing up, you agree to the{" "}
            <span onClick={() => navigate("/terms-conditions")}>
              Terms of Use
            </span>
            , Privacy Policy, and our default Notification Settings.
          </div>
        </div>
        <div className={classes.btn}>
          <Button variant="contained">CONTINUE</Button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
