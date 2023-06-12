import clsx from "clsx";
import React, { FC, HTMLAttributes } from "react";
import { useStyles } from "./ListRecommendFood.style";
import IconStar from "../../assets/icons/star.svg";
import { useNavigate } from "react-router-dom";
import IconClock from "../../assets/icons/clock-yellow.svg";
import ListRecommendFoodSkeleton from "./ListRecommendFoodSkeleton";

interface IListRecommendFoodProps {
  title: string;
  listRecommend: any;
}

export const ListRecommendFood: FC<
  IListRecommendFoodProps & HTMLAttributes<HTMLDivElement>
> = React.memo((props) => {
  const classes = useStyles();
  const { title, listRecommend, ...otherProps } = props;
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1 * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  const navigate = useNavigate();
  const handleClick = (item: any) => {
    navigate(
      `/groceries/${Math.floor(Math.random() * 3) + 1}?recommend=${
        item.category
      }`
    );
    document.documentElement.scrollTop = 0;
  };

  return (
    <div {...otherProps} className={clsx(classes.root, props.className)}>
      <div className={classes.cardHeader}>
        <div>
          <p>{title}</p>
        </div>
      </div>
      <div className={classes.recommendFoodWrapper}>
        <div className={classes.recommendFood}>
          {listRecommend.map((item: any) =>
            isLoading ? (
              <ListRecommendFoodSkeleton data={item} key={item.id} />
            ) : (
              <div key={item.id} onClick={() => handleClick(item)}>
                <div className={classes.cardImage}>
                  <img src={item?.img} />
                  <div>
                    <img src={item?.logoBrand} />
                  </div>
                </div>
                <div className={classes.cardText}>
                  <p>{item.name}</p>
                  <div className="">
                    <div className="negativeMargin4">
                      <img src={IconClock} />
                      <p>{item.time} mins</p>
                    </div>
                    <div>
                      <span>{item.ranking}</span>
                      <img src={IconStar} className={classes.imgStar} />
                      <span>
                        {item.nbVote > 200 ? "200+" : `${item.nbVote}`}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
});
