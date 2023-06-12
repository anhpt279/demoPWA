import clsx from "clsx";
import React, { FC, HTMLAttributes } from "react";
import { useResendOTP } from "src/hooks/useResendOTP";
import { useStyles } from "./OTPresend.style";
export interface IOTPresend {
  onTimerComplete?: () => void;
  onResendClick?: () => void;
  maxTime?: number;
  timeInterval?: number;
  textRender: string;
}
export const OTPresend: FC<IOTPresend & HTMLAttributes<HTMLDivElement>> = (
  props: any
) => {
  const {
    textRender,
    onTimerComplete,
    onResendClick,
    maxTime = 60,
    timeInterval = 1000,
    ...otherProps
  } = props;

  const { handleResendClick, remainingTime } = useResendOTP({
    maxTime,
    onTimerComplete,
    timeInterval,
    onResendClick,
  });

  const classes = useStyles();

  return (
    <div className={clsx(props.className, otherProps.className)}>
      <div className={classes.time}>
        Code expires in
        <span>
          00:
          {remainingTime.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
        </span>
      </div>

      <div className={classes.check}>
        <p>
          <span>{textRender}</span>
          <span onClick={handleResendClick}> Resend again</span>{" "}
        </p>
      </div>
    </div>
  );
};
