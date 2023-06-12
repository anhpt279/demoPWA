import { FC, HTMLAttributes, useState } from "react";
import { useStyles } from "./ClipboardCopyDetails.style";
import { ReactComponent as Copy } from "../../assets/images/YourOrder/document-copy.svg";
import clsx from "clsx";

interface IClipboardCopyDetails {
  copyText: any;
}

export const ClipboardCopyDetails: FC<
  IClipboardCopyDetails & HTMLAttributes<HTMLDivElement>
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
      <textarea value={copyText} readOnly className={classes.inputClipboard} />
      <div className={classes.copyButton}>
        <Copy />
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
