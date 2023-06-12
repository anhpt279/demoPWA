import React from "react";

interface IResendOTP {
  maxTime?: number;
  onTimerComplete?: () => void;
  timeInterval?: number;
  onResendClick?: (maxTime: any) => void;
}
export const useResendOTP = ({
  maxTime,
  onTimerComplete,
  timeInterval,
  onResendClick,
}: IResendOTP) => {
  const timeOutRef = React.useRef<any>();
  const [remainingTime, setRemainingTime] = React.useState<any>(maxTime);

  React.useEffect(() => {
    if (timeOutRef.current && remainingTime === 0) {
      clearTimeout(timeOutRef.current);
      if (onTimerComplete) {
        onTimerComplete();
      }
    } else {
      timeOutRef.current = setInterval(() => {
        setRemainingTime(remainingTime - 1);
      }, timeInterval);
    }
    return () => {
      clearTimeout(timeOutRef.current);
    };
  }, [remainingTime, timeInterval, onTimerComplete]);

  const handleResendClick = () => {
    if (onResendClick && typeof remainingTime === "number") {
      onResendClick(remainingTime === 0);
    }
    setRemainingTime(maxTime);
  };

  return {
    handleResendClick,
    remainingTime,
  };
};
