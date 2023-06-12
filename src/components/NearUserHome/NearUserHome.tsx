import React, { FC, HTMLAttributes, useEffect } from "react";
import clsx from "clsx";
import { useStyles } from "./NearUserHome.style";
import PageLayout from "../PageLayout/PageLayout";
import { ShopsFactory } from "src/models/ShopsFactory";
import IconStar from "../../assets/icons/star.svg";
import { useNavigate } from "react-router-dom";
import IconClock from "../../assets/icons/clock-yellow.svg";
import LoadingSkeleton from "../common/Skeleton/LoadingSkeleton";

const Skeleton = (props: any) => {
  const classes = useStyles();
  const { data, ...otherProps } = props;
  return (
    <div key={data.id} className={clsx(classes.cardText, otherProps.className)}>
      <LoadingSkeleton className={classes.img}></LoadingSkeleton>

      <LoadingSkeleton className={classes.title}></LoadingSkeleton>

      <div className="negativeMargin4">
        <LoadingSkeleton className={classes.time}></LoadingSkeleton>
      </div>
      <div>
        <LoadingSkeleton className={classes.star}></LoadingSkeleton>
      </div>
    </div>
  );
};

export const NearUserHome: FC<HTMLAttributes<HTMLDivElement>> = (
  props: any
) => {
  const classes = useStyles();
  const [listNearYou, setListNearYou]: any = React.useState([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const NEARYOU = ShopsFactory.getNearYou();
    setListNearYou(NEARYOU);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1 * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div {...props} className={clsx(classes.root, props.className)}>
      <PageLayout>
        <h6 className={clsx("homeTitle", classes.titleNearUser)}>
          Choose a Shop Near You
        </h6>
        <div className={classes.nearContent}>
          <div className={classes.nearContentContext}>
            {listNearYou.map((item: any) =>
              isLoading ? (
                <Skeleton data={item} key={item.id} />
              ) : (
                <div key={item.id} className={classes.cardText}>
                  <img
                    src={item.img}
                    onClick={() => navigate(`/groceries/${item.id}`)}
                  />
                  <p>{item.name}</p>
                  <div className="negativeMargin4">
                    <img src={IconClock} />
                    <p>{item.time} mins</p>
                  </div>
                  <div>
                    <span>{item.ranking}</span>
                    <img
                      src={IconStar}
                      alt="icon star"
                      className={classes.imgStar}
                    />
                    <span>{item.nbVote > 200 ? "1000+" : item.nbVote}</span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default NearUserHome;
