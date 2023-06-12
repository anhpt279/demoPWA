import React from "react";
import LoadingSkeleton from "../common/Skeleton/LoadingSkeleton";
import { useStyles } from "./ListRecommendFood.style";

const ListRecommendFoodSkeleton = (props: any) => {
  const { data } = props;
  const classes = useStyles();
  return (
    <div key={data.id}>
      <LoadingSkeleton className={classes.img}></LoadingSkeleton>
      <div>
        <LoadingSkeleton className={classes.title}></LoadingSkeleton>
        <div className="">
          <LoadingSkeleton className={classes.time}></LoadingSkeleton>
          <LoadingSkeleton className={classes.star}></LoadingSkeleton>
        </div>
      </div>
    </div>
  );
};

export default ListRecommendFoodSkeleton;
