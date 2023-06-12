import clsx from "clsx";
import React, { FC, HTMLAttributes } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Images from "src/assets/images";
import { Button } from "../Buttons";
import { RenderOTP } from "../OTPRender/OTPRender";
import { OTPresend } from "../OTPresend";
import { useStyles } from "./Opt.style";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export const OtpSignup: FC<HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const [valueOTP, setValueOTP] = React.useState<any>("");
  const [renderText, setRenderText] = React.useState<string>(
    "Didn't receive code? "
  );
  const classes = useStyles();
  const navigate = useNavigate();
  const { state }: any = useLocation();
  const validationSchema = Yup.object().shape({
    otp: Yup.array().min(4, "Verification code invalid"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(formOptions);

  const onSubmit = () => {
    if (state) {
      const { username } = state;
      navigate("/set/pass", { state: { username } });
    }
    reset();
    return false;
  };

  const handleOnchange = (otp: string) => {
    setValueOTP(otp);
    if (otp) {
      setRenderText("");
    } else {
      setRenderText("Didn't receive code?");
    }
    errors.otp = false;
  };
  const phone = state.username.slice(5).padStart(10, "x");

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

      <form
        action="POST"
        onSubmit={handleSubmit(onSubmit)}
        className={classes.form}
      >
        <div>
          <div className={classes.title}>Waiting for OTP</div>
          <div className={classes.desc}>
            Please enter the verification code we sent to your phone number +84{" "}
            {phone}
          </div>
          <RenderOTP
            name="otp"
            length={4}
            isNumberInput={true}
            autoFocus
            onChangeOTP={(otp) => handleOnchange(otp)}
            onChange={() => (errors.otp = false)}
            className={classes.inputs}
            inputClassName={clsx(
              classes.input,
              valueOTP && classes.active,
              errors.otp && classes.inputValidate
            )}
            type="number"
          />

          <OTPresend textRender={renderText} />
        </div>
        {valueOTP ? (
          <div className={classes.btn}>
            <Button variant="contained" type={"submit"}>
              Continue
            </Button>
          </div>
        ) : (
          <div className={classes.btn}>
            <Button variant="outlined" disabled>
              Continue
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default OtpSignup;
