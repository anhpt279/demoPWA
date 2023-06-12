import React, { FC, HTMLAttributes, useEffect } from "react";
import clsx from "clsx";
import { useStyles } from "./OnBoarding.style";
import imgArrowRight from "../../assets/icons/arrow-right.svg";
import imgOuterOnBoarding from "../../assets/icons/5.svg";
import imgInnerOnBoarding from "../../assets/icons/Rectangle-660.svg";
import { BoardingFacrtory } from "../../models/BoardingFactory";
import { useNavigate } from "react-router-dom";
import ImgOnBoard1 from "src/assets/images/on-boarding/on-boarding1.png";
import ImgOnBoard2 from "src/assets/images/on-boarding/on-boarding2.png";
import ImgOnBoard3 from "src/assets/images/on-boarding/on-boarding3.png";

export const OnBoarding: FC<HTMLAttributes<HTMLButtonElement>> = (
  props: any
) => {
  const classes = useStyles();
  const [currentStep, setCurrentStep] = React.useState(0);
  const [currentBoarding, setCurrentBoarding]: any = React.useState(null);
  const [indexImage, setIndexImage] = React.useState(0);
  const navigate = useNavigate();

  const onChangeStep = () => {
    setCurrentStep(currentStep + 1);
    setIndexImage(indexImage + 1);
  };

  useEffect(() => {
    const LS_BOARDING = BoardingFacrtory.getListBoarding();
    const finded = BoardingFacrtory.getStep(currentStep, LS_BOARDING);
    setCurrentBoarding(finded);
    if (currentStep > 2) return navigate("/welcome");
  }, [currentStep]);

  return (
    <div {...props} className={clsx(props.className, classes.root)}>
      <div
        className={clsx(
          classes.content,
          currentStep === 0 && classes.borderRadiusLeft,
          currentStep === 2 && classes.borderRadiusRight
        )}
      >
        {indexImage === 0 && (
          <img
            src={ImgOnBoard1}
            srcSet={`${ImgOnBoard1} 2x`}
            className={classes.image}
          />
        )}
        {indexImage === 1 && (
          <img
            src={ImgOnBoard2}
            srcSet={`${ImgOnBoard2} 2x`}
            className={classes.image}
          />
        )}
        {indexImage === 2 && (
          <img
            src={ImgOnBoard3}
            srcSet={`${ImgOnBoard3} 2x`}
            className={classes.image}
          />
        )}
        <div className={classes.bodyContent}>
          <h3>{currentBoarding?.title}</h3>
          <p>{currentBoarding?.describe}</p>
        </div>
      </div>

      <div className={classes.footer}>
        <ul>
          <li>
            <img
              src={currentStep === 0 ? imgInnerOnBoarding : imgOuterOnBoarding}
            />
          </li>
          <li>
            <img
              src={currentStep === 1 ? imgInnerOnBoarding : imgOuterOnBoarding}
            />
          </li>
          <li>
            <img
              src={currentStep === 2 ? imgInnerOnBoarding : imgOuterOnBoarding}
            />
          </li>
        </ul>
        <div
          className={classes.btnSkip}
          defaultValue={currentStep}
          onClick={onChangeStep}
        >
          <p>{currentStep === 2 ? "Get started" : "Skip"}</p>
          <img src={imgArrowRight} alt="img_arrowRight" />
        </div>
      </div>
    </div>
  );
};
export default OnBoarding as React.ComponentType<any>;
