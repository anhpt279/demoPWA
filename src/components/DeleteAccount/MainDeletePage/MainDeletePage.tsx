import { useStyles } from "./MainDeletePage.style";
import { ICheck } from "../types";
import React from "react";
interface IMainDeletePage {
  checked: ICheck;
  onChangeRadio(prop: string): (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MainDeletePage = ({ checked, onChangeRadio }: IMainDeletePage) => {
  const classes = useStyles();

  const { reason1, reason2, reason3, reason4, reason5, reason6 } = checked;
  const renderTextArea = () => {
    return (
      reason6 && (
        <div className={classes.textAreaContainer}>
          <textarea
            placeholder="Leave us a reason"
            className={classes.customTextArea}
          ></textarea>
        </div>
      )
    );
  };
  return (
    <>
      <div className={classes.deleteQuestion}>
        Why do you want to delete your account?
      </div>
      <div className={classes.deleteQuestionDetail}>
        Why do you want to delete your account?
      </div>
      <div className={classes.listInput}>
        <label>
          <input
            type="radio"
            checked={reason1}
            onChange={onChangeRadio("reason1")}
          />
          <span>The app is not functioning properly</span>
        </label>
        <label>
          <input
            type="radio"
            checked={reason2}
            onChange={onChangeRadio("reason2")}
          />
          <span>I am unhappy with my exerience on the app</span>
        </label>
        <label>
          <input
            type="radio"
            checked={reason3}
            onChange={onChangeRadio("reason3")}
          />
          <span>I want to start over with a new account</span>
        </label>
        <label>
          <input
            type="radio"
            checked={reason4}
            onChange={onChangeRadio("reason4")}
          />
          <span>My account was hacked</span>
        </label>
        <label>
          <input
            type="radio"
            checked={reason5}
            onChange={onChangeRadio("reason5")}
          />
          <span>I want more privacy</span>
        </label>
        <label>
          <input
            type="radio"
            checked={reason6}
            onChange={onChangeRadio("reason6")}
          />
          <span>Other</span>
        </label>
      </div>
      {renderTextArea()}
    </>
  );
};

export default MainDeletePage;
