import { FC, HTMLAttributes } from "react";
import { useStyles } from "./WishlistEmpty.style";
import PageLayout from "../PageLayout/PageLayout";
import emptyImg from "../../assets/images/wishlist/empty.png";
import { Button } from "../Buttons";
import { useNavigate } from "react-router-dom";
import IconLeftBlack from "../../assets/icons/arrow-left.png";

export const WishlistEmpty: FC<HTMLAttributes<HTMLDivElement>> = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <PageLayout>
      <div className={classes.empty}>
        <div className={classes.emptyBack} onClick={() => navigate(-1)}>
          <img
            src={IconLeftBlack}
            srcSet={`${IconLeftBlack} 2x`}
            style={{ width: 24, height: 24, objectFit: "contain" }}
          />
        </div>
        <h1 className={classes.emptyHeader}>Wishlist</h1>
      </div>
      <div className={classes.emptyContent}>
        <p className={classes.emptyTitle}>Wishlist Not Found</p>
        <p className={classes.emptyDesc}>Start saving you favorite items</p>
        <div className={classes.emptyImg}>
          <img src={emptyImg} alt="referImg" />
        </div>
      </div>
      <div className={classes.emptyButton}>
        <Button variant="contained" onClick={() => navigate(-1)}>
          ok
        </Button>
      </div>
    </PageLayout>
  );
};
export default WishlistEmpty;
