import { FC, HTMLAttributes } from "react";
import "src/app.css";

const Spinner: FC<HTMLAttributes<HTMLDivElement>> = (props: any) => {
  return (
    <div {...props} className="row">
      <div className="center">
        <div className="spinner spinner-blink"></div>
      </div>
    </div>
  );
};

export default Spinner;
