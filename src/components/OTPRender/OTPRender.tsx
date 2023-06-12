import React, { CSSProperties, FC, HTMLAttributes, useCallback } from "react";
import { OTPInput } from "../InputOTP";

interface IOTPRender {
  length: number;
  onChangeOTP: (otp: string) => any;
  onChange: () => void;
  autoFocus?: boolean;
  isNumberInput?: boolean;
  disabled?: boolean;

  style?: CSSProperties;
  className?: string;

  inputStyle?: CSSProperties;
  inputClassName?: string;

  type?: any;
  name?: string;
}

const OTPRender: FC<IOTPRender & HTMLAttributes<HTMLDivElement>> = (
  props: any
) => {
  const {
    length,
    onChangeOTP,
    autoFocus,
    isNumberInput,
    disabled,
    inputStyle,
    inputClassName,
    type,
    name,
    ...otherProps
  } = props;
  const [activeInput, setActiveInput] = React.useState<number>(0);
  const [otpValues, setOTPValues] = React.useState(
    Array<string>(length).fill("")
  );

  const handleOtpChange = useCallback(
    (otp: string[]) => {
      const otpValue = otp.join("");
      onChangeOTP(otpValue);
    },
    [onChangeOTP]
  );

  const getRightValue = useCallback(
    (str: string) => {
      // eslint-disable-next-line prefer-const
      let changedValue = str;

      if (!isNumberInput || !changedValue) {
        return changedValue;
      }

      return Number(changedValue) >= 0 ? changedValue : "";
    },
    [isNumberInput]
  );
  const focusInput = React.useCallback(
    (inputIndex: number) => {
      const selectedIndex = Math.max(Math.min(length - 1, inputIndex), 0);
      setActiveInput(selectedIndex);
    },
    [length]
  );
  const handleOnFocus = React.useCallback(
    (index: number) => () => {
      focusInput(index);
    },
    [focusInput]
  );

  const changeCodeAtFocus = React.useCallback(
    (str: string) => {
      const updatedOTPValues = [...otpValues];
      updatedOTPValues[activeInput] = str[0] || "";
      setOTPValues(updatedOTPValues);
      handleOtpChange(updatedOTPValues);
    },
    [activeInput, handleOtpChange, otpValues]
  );

  const focusNextInput = React.useCallback(() => {
    focusInput(activeInput + 1);
  }, [activeInput, focusInput]);

  const handleOnChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = getRightValue(e.currentTarget.value);
      if (!val) {
        e.preventDefault();
        return;
      }
      changeCodeAtFocus(val);
      focusNextInput();
    },
    [changeCodeAtFocus, focusNextInput, getRightValue]
  );

  const focusPrevInput = React.useCallback(() => {
    focusInput(activeInput - 1);
  }, [activeInput, focusInput]);

  const handleOnKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const pressedKey = e.key;

      switch (pressedKey) {
        case "Backspace":
        case "Delete": {
          e.preventDefault();
          if (otpValues[activeInput]) {
            changeCodeAtFocus("");
          } else {
            focusPrevInput();
          }
          break;
        }
        case "ArrowLeft": {
          e.preventDefault();
          focusPrevInput();
          break;
        }
        case "ArrowRight": {
          e.preventDefault();
          focusNextInput();
          break;
        }
        default: {
          if (pressedKey.match(/^[^a-zA-Z0-9]$/)) {
            e.preventDefault();
          }
          break;
        }
      }
    },
    [activeInput, changeCodeAtFocus, focusNextInput, focusPrevInput, otpValues]
  );

  const handleOnBlur = React.useCallback(() => {
    setActiveInput(-1);
  }, []);

  const handleOnPaste = React.useCallback(
    (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pastedData = e.clipboardData
        .getData("text/plain")
        .trim()
        .slice(0, length - activeInput)
        .split("");
      if (pastedData) {
        let nextFocusIndex = 0;
        const updatedOTPValues = [...otpValues];
        updatedOTPValues.forEach((val, index) => {
          if (index >= activeInput) {
            const changedValue = getRightValue(pastedData.shift() || val);
            if (changedValue) {
              updatedOTPValues[index] = changedValue;
              nextFocusIndex = index;
            }
          }
        });
        setOTPValues(updatedOTPValues);
        setActiveInput(Math.min(nextFocusIndex + 1, length - 1));
      }
    },
    [activeInput, getRightValue, length, otpValues]
  );

  return (
    <div {...otherProps}>
      {otpValues.map((_, index) => (
        <OTPInput
          key={`input-${index}`}
          focus={activeInput === index}
          value={otpValues && otpValues[index]}
          autoFocus={autoFocus}
          onFocus={handleOnFocus(index)}
          onChange={handleOnChange}
          onKeyDown={handleOnKeyDown}
          onBlur={handleOnBlur}
          onPaste={handleOnPaste}
          style={inputStyle}
          className={inputClassName}
          disabled={disabled}
          type={type}
          name={name}
        />
      ))}
    </div>
  );
};

export const RenderOTP = React.memo(OTPRender);
