import { FC, HtmlHTMLAttributes, useState } from "react";
import { useStyles } from "./ClipboardCopy.style";
import copyImg from "../../assets/images/refer/copy.svg";
import clsx from "clsx";

interface IClipboardCopy {
  copyText: any;
}

export const ClipboardCopy: FC<
  IClipboardCopy & HtmlHTMLAttributes<HTMLDivElement>
> = (props) => {
  const { copyText, ...otherProps } = props;
  const [isCopied, setIsCopied] = useState(false);
  const classes = useStyles();

  const copyTextToClipboard = async (text: any) => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  };

  const handleCopyClick = () => {
    copyTextToClipboard(copyText)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <div
      {...otherProps}
      className={clsx(props.className, classes.root)}
      onClick={handleCopyClick}
    >
      <input type="text" value={copyText} readOnly />
      <div className={classes.copyButton}>
        <img src={copyImg} alt="copyImg" />
      </div>
      {isCopied && (
        <div className={classes.copied}>
          Copied
          <div className={classes.arrowDown}></div>
        </div>
      )}
    </div>
  );
};
