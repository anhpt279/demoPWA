import clsx from "clsx";
import React, { FC, HTMLAttributes, useContext } from "react";
import { IAuthCtx } from "../../contexts/users/types";
import { UserCtx } from "../../contexts/users/UserCtx";
import PageLayout from "../PageLayout/PageLayout";
import { useStyles } from "./Promos.style";
interface IListHotPromosProps {
  listHotPromos: any;
  onClickSave: Function;
  promoSaved: any;
}

export const Promos: FC<
  IListHotPromosProps & HTMLAttributes<HTMLDivElement>
> = (props) => {
  const classes = useStyles();
  const { listHotPromos, promoSaved, onClickSave, ...otherProps } = props;
  const { updateCurrentUser } = useContext<IAuthCtx>(UserCtx);
  const buttonSave = (item: any) => {
    updateCurrentUser({ promo: item });
    onClickSave(item);
  };
  return (
    <div {...otherProps} className={clsx(classes.root, otherProps.className)}>
      <PageLayout>
        {listHotPromos.map((item: any) => (
          <div
            key={item.id}
            className={classes.promos}
            onClick={() => buttonSave(item)}
          >
            <div className={classes.topPromos}>
              <img src={item.logoBrand} />
              <div>
                <p>Discount {item.discount}K</p>
                <p>Use for:</p>
                <p>{item.useFor}</p>
              </div>
              <button
                className={clsx(
                  classes.saved,
                  item.codeDiscount === promoSaved && classes.used
                )}
              >
                {item.codeDiscount === promoSaved ? "Selected" : "Use now"}
              </button>
            </div>
            <div className={clsx(classes.bottomPromos)}>
              <p>Expires in: {item.expires} </p>
              <p className={classes.codeDiscount}>{item.codeDiscount}</p>
            </div>
          </div>
        ))}
      </PageLayout>
    </div>
  );
};
