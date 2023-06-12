import { FC, HTMLAttributes } from "react";
import { useStyles } from "./MapAutoComplete.style";
import { ReactComponent as LocationSVG } from "../../../../assets/icons/location.svg";
import clsx from "clsx";
type Props = {
  handleSearch2: Function;
  placePredictions: Array<any>;
};

const MapAutoComplete: FC<Props & HTMLAttributes<HTMLDivElement>> = (props) => {
  const { handleSearch2, placePredictions, ...otherProps } = props;
  const classes = useStyles();
  return (
    <div {...otherProps} className={clsx(classes.root, otherProps.className)}>
      {placePredictions.length !== 0 &&
        placePredictions.map((item: any) => {
          const addressArray: Array<string> = item.description.split(",");

          const firstAddress: string = addressArray.slice(0, 2).join(", ");
          return (
            <div
              key={item.description}
              className={classes.searchItem}
              onClick={() => handleSearch2(item.description)}
            >
              <div>
                <LocationSVG />
              </div>
              <div className={classes.searchItemContent}>
                <div>{firstAddress}</div>
                <div>{item.description}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MapAutoComplete;
