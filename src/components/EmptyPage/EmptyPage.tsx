import PageLayout from "../PageLayout/PageLayout";
import { useStyles } from "./EmptyPage.style";
import { Button } from "../Buttons";
import { FC, HTMLAttributes } from "react";
import clsx from "clsx";

interface IEmptyPage {
  image: any;
  emptyTitle: string;
  emptyDesc: string;
  emptyButton: string;
  onClickButton: Function;
}

export const EmptyPage: FC<IEmptyPage & HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const {
    image,
    emptyTitle,
    emptyDesc,
    emptyButton,
    onClickButton,
    ...otherProps
  } = props;
  const classes = useStyles();

  return (
    <PageLayout {...otherProps} className={clsx(props.className, classes.root)}>
      <div className={classes.empty}>
        <div className={classes.emptyImg}>
          <img src={image} alt="cartImg" />
        </div>
        <div className={classes.emptyContent}>
          <p className={classes.emptyTitle}>{emptyTitle}</p>
          <p className={classes.emptyDesc}>{emptyDesc}</p>
        </div>
      </div>
      <div className={classes.emptyButton}>
        <Button variant="outlined" onClick={() => onClickButton()}>
          {emptyButton}
        </Button>
      </div>
    </PageLayout>
  );
};
