import React from "react";
import clsx from "clsx";
import LoadingSkeleton from "../common/Skeleton/LoadingSkeleton";
import { useStyles } from "./CardDescriptionItem.style";

const CardDescriptiondataSkeleton = (props: any) => {
  const { data, ...otherProps } = props;
  const classes = useStyles();
  return (
    <div className={clsx(classes.item, otherProps.className)}>
      <LoadingSkeleton className={classes.img}></LoadingSkeleton>
      <LoadingSkeleton className={classes.name}></LoadingSkeleton>
      <LoadingSkeleton className={classes.prices}></LoadingSkeleton>
      {data?.isClaimed && (
        <>
          <LoadingSkeleton className={classes.processs}></LoadingSkeleton>
          <LoadingSkeleton className={classes.claimes}></LoadingSkeleton>
        </>
      )}
    </div>
  );
};

export default CardDescriptiondataSkeleton;
