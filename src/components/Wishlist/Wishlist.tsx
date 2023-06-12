import { useState, useEffect, useContext, FC, HTMLAttributes } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useStyles } from "./Wishlist.style";
import PageLayout from "../PageLayout/PageLayout";
import starImg from "../../assets/images/wishlist/star.svg";
import { Button } from "../Buttons";
import { IWishlist } from "../../models/Wishlist";
import WishlistEmpty from "../WishlistEmpty/WishlistEmpty";
import IconClock from "../../assets/icons/clock-yellow.svg";
import { DialogContext } from "../../contexts/dialog/DialogCtx";
import clsx from "clsx";
import IconLeftBlack from "../../assets/icons/arrow-left.png";
import LoadingSkeleton from "../common/Skeleton/LoadingSkeleton";
import { IAuthCtx } from "../../contexts/users/types";
import { UserCtx } from "../../contexts/users/UserCtx";
import { WishlistFactory } from "../../models/WishlistFactory";
import { IDialogCtx } from "../../contexts/dialog/types";

export const Wishlist: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const classes = useStyles();
  const navigate: NavigateFunction = useNavigate();
  const { openDialogAction } = useContext<IDialogCtx>(DialogContext);

  const { userSpecificData, updateCurrentUser } = useContext<IAuthCtx>(UserCtx);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [listWishList, setListWishList] = useState<Array<IWishlist>>([]);

  const { wishlist } = userSpecificData;
  const realWishlist = wishlist || [];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1 * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const wishlistItems = WishlistFactory.getWishlist();
    const wishlistSaved = WishlistFactory.getWishListSaved(
      wishlistItems,
      realWishlist
    );
    setListWishList(wishlistSaved);
  }, [userSpecificData]);

  const handleClick = (id: string) => {
    return () => {
      openDialogAction({
        title: "Hmm...",
        content: "Are you sure want to delete shop from Wishlist?",
        onClick: handleRemove(id),
      });
    };
  };

  const handleRemove = (idWish: string) => {
    return () => {
      const newWishlist = WishlistFactory.removeWishList(wishlist, idWish);
      updateCurrentUser({ wishlist: newWishlist });
    };
  };

  return (
    <>
      {!wishlist || wishlist?.length === 0 ? (
        <WishlistEmpty />
      ) : (
        <PageLayout>
          <div {...props} className={clsx(classes.wishlist, props.className)}>
            <div onClick={() => navigate(-1)} className={classes.wishlistBack}>
              <img
                src={IconLeftBlack}
                srcSet={`${IconLeftBlack} 2x`}
                style={{ width: 24, height: 24, objectFit: "contain" }}
              />
            </div>
            <h1 className={classes.wishlistHeader}>Wishlist</h1>
          </div>
          <div className={classes.wishlistContent}>
            {isLoading ? (
              <LoadingSkeleton className={classes.loadTitle}></LoadingSkeleton>
            ) : (
              <p className={classes.wishlistItem}>
                {wishlist?.length} <span>favorite</span>
                {wishlist?.length <= 1 ? " supermarket" : " supermarkets"}
              </p>
            )}

            <div className={classes.root}>
              {listWishList.map((wishItem: any) => (
                <div key={wishItem.id} className={classes.cardText}>
                  {isLoading ? (
                    <>
                      <LoadingSkeleton
                        className={classes.loadImg}
                      ></LoadingSkeleton>
                      <LoadingSkeleton
                        className={classes.loadName}
                      ></LoadingSkeleton>
                      <LoadingSkeleton
                        className={classes.loadTime}
                      ></LoadingSkeleton>
                      <LoadingSkeleton
                        className={classes.loadStar}
                      ></LoadingSkeleton>
                      <LoadingSkeleton
                        className={classes.loadButton}
                      ></LoadingSkeleton>
                    </>
                  ) : (
                    <>
                      <div
                        className={classes.itemImg}
                        onClick={() => navigate(`/groceries/${wishItem.id}`)}
                      >
                        <img src={wishItem.image} />
                      </div>
                      <p>{wishItem.name}</p>
                      <div className={classes.itemTime}>
                        <img src={IconClock} />
                        <p>{wishItem.time} mins</p>
                      </div>
                      <div className={classes.itemEnd}>
                        <span>{wishItem.rating}</span>
                        <img src={starImg} />
                        <span>
                          ({wishItem.review > 1000 ? "1000+" : wishItem.review})
                        </span>
                      </div>
                      <Button
                        variant="outlined"
                        onClick={handleClick(wishItem.id)}
                        className={classes.btnDelete}
                      >
                        delete
                      </Button>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </PageLayout>
      )}
    </>
  );
};
export default Wishlist;
