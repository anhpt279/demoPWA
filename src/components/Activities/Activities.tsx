import React, { FC, HTMLAttributes, useContext } from "react";
import { BottomNavigation } from "../BottomNavigation";
import PageLayout from "../PageLayout/PageLayout";
import { useStyles } from "./Activities.style";
import clsx from "clsx";
import { UserCtx } from "../../contexts/users/UserCtx";
import Images from "../../assets/images";
import { groupBy } from "lodash-es";
import ActivitiesInfo from "./ActivitiesInfo/ActivitiesInfo";
import downIcon from "../../assets/icons/DownIcon.png";
import { Divider } from "src/components/Divider";

interface ITabIndex {
  tabIndex: number;
  setTabIndex: (state: number) => void;
}
export const Activities: FC<ITabIndex & HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const classes = useStyles();
  const [listDataActivities, setListDataActivies] = React.useState<any>([]);
  const { tabIndex, setTabIndex, ...otherProps } = props;

  const { userSpecificData } = useContext(UserCtx);
  const listActivity = userSpecificData.activity || [];

  const onChangeTabs = (id: number) => {
    setTabIndex(id);
  };
  // render activity
  const [productList, setProductList]: any = React.useState([]);
  const [listActivityRender, setListActivityRender]: any = React.useState([]);

  const closeMenuHandle = (id: string) => {
    const productId = productList.filter((item: any) => item !== id);
    setProductList(productId);
  };

  const openMenuHandle = (id: string) => {
    setProductList([...productList, id]);
  };

  React.useEffect(() => {
    const groupDate = groupBy(listDataActivities, "date");
    setListActivityRender(Object.entries(groupDate));
  }, [listDataActivities]);

  React.useEffect(() => {
    setListDataActivies(listActivity);
  }, []);

  if (listActivity.length !== 0) {
    return (
      <div {...otherProps} className={clsx(classes.root, otherProps.className)}>
        <PageLayout>
          <h6 className={classes.title}>Activity</h6>
        </PageLayout>
        <div className={classes.rootActivityRender}>
          {listActivityRender.map((data: any, i: number) => (
            <div key={i} className={classes.info}>
              <PageLayout>
                <h6 className={classes.titleActivity}>{data[0]}</h6>
                {data[1].map((dt: any, i: any) => (
                  <div key={i}>
                    <div className={classes.product}>
                      <img src={dt?.product?.image} alt="" />
                      <div className={classes.infoProduct}>
                        <div className={classes.head}>
                          <div className={classes.time}>
                            <img
                              src={Images.timer}
                              srcSet={`${Images.timer} 2x`}
                              alt=""
                              className={classes.imgTime}
                            />
                            <span className={classes.status}>
                              {dt?.product?.status}
                            </span>
                          </div>
                          <span>{dt?.product?.title}</span>
                        </div>
                        <div className={classes.footer}>
                          <span>{dt?.product?.code}</span>
                          <span>{dt?.product?.price}</span>
                        </div>
                      </div>
                    </div>
                    <div className={classes.line}></div>
                    <div
                      id={dt?.product?.id}
                      className={classes.activityInfo}
                      style={{
                        maxHeight: `${
                          productList.includes(dt?.product?.id) ? "520px" : 0
                        }`,
                      }}
                    >
                      {
                        <ActivitiesInfo
                          productList={listDataActivities.filter(
                            (item: any) => item.product.id === dt?.product?.id
                          )}
                        />
                      }
                    </div>
                    <div className={classes.arrowDownCustom}>
                      <div>
                        {productList.includes(dt?.product?.id) ? (
                          <div onClick={() => closeMenuHandle(dt?.product?.id)}>
                            <p>See Less</p>
                            <img
                              src={Images.InconUp}
                              srcSet={`${Images.InconUp} 2x`}
                              className={classes.imgArrowUp}
                            />
                          </div>
                        ) : (
                          <div onClick={() => openMenuHandle(dt?.product?.id)}>
                            <p>Show More</p>
                            <img
                              src={downIcon}
                              srcSet={`${downIcon} 2x`}
                              className={classes.imgArrowDown}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </PageLayout>
              <Divider />
            </div>
          ))}
        </div>
        <BottomNavigation tabIndex={tabIndex} onChangeTab={onChangeTabs} />
      </div>
    );
  } else {
    return (
      <div className={clsx(classes.rootEmptyActivity)}>
        <div className={classes.content}>
          <h1 className={classes.header}>Activity</h1>
          <div className={classes.titleEmptyActivity}>
            <img
              src={Images.emptyActivities}
              srcSet={`${Images.emptyActivities} 2x`}
              alt=""
            />
            <h1>No Activity Found!</h1>
            <p>
              {`It seems no activitiy happended yet "Let's start some activities now"`}
            </p>
          </div>
        </div>
        <BottomNavigation tabIndex={tabIndex} onChangeTab={onChangeTabs} />
      </div>
    );
  }
};

export default Activities;
