import clsx from "clsx";
import { useState, useRef, FC, HTMLAttributes } from "react";
import { IFaq } from "../../../models/Faq";
import { useStyles } from "./RenderFAQ.style";
import arrowUp from "../../../assets/icons/arrow-up-1.png";
import arrowDown from "../../../assets/icons/arrow-down-gray.png";
interface IRenderFAQ {
  faqData: IFaq;
}

const RenderFAQ: FC<IRenderFAQ & HTMLAttributes<HTMLDivElement>> = (props) => {
  const { faqData, ...otherProps } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const classes = useStyles();
  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  const height = `${isOpen ? contentRef.current?.scrollHeight : 0}px`;

  return (
    <div
      {...otherProps}
      key={faqData.id}
      className={clsx(props.className, classes.root)}
    >
      <div
        className={classes.questionTitle}
        defaultChecked={isOpen}
        onClick={handleOpenMenu}
      >
        <p>{faqData.title}</p>
        {isOpen ? (
          <img className={classes.iconUpDown} src={arrowUp} />
        ) : (
          <img className={classes.iconUpDown} src={arrowDown} />
        )}
      </div>
      <div className={classes.questionLine}></div>
      <div
        className={classes.questionDetail}
        ref={contentRef}
        style={{
          maxHeight: height,
        }}
      >
        {faqData.detail}
      </div>
    </div>
  );
};

export default RenderFAQ;
