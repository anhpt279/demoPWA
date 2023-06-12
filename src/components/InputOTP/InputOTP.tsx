import React, { FC, InputHTMLAttributes } from "react";
import usePrevious from "src/hooks/usePrevious";
interface IInputOTP {
  focus?: boolean;
}

const InputOTP: FC<IInputOTP & InputHTMLAttributes<HTMLInputElement>> = (
  props
) => {
  const { focus, autoFocus, ...otherProps } = props;
  const inputRef = React.useRef<HTMLInputElement>(null);
  const prevFocus = usePrevious<boolean>(!!focus);

  React.useLayoutEffect(() => {
    if (inputRef.current) {
      if (focus && autoFocus) {
        inputRef.current.focus();
      }
      if (focus && autoFocus && focus !== prevFocus) {
        inputRef.current.focus();
      }
    }
  }, [focus, autoFocus, prevFocus]);

  return <input {...otherProps} ref={inputRef} maxLength={1} />;
};

export const OTPInput = React.memo(InputOTP);
