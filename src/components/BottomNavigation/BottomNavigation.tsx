import clsx from "clsx";
import React, { FC, HTMLAttributes, useEffect, useState } from "react";
import { useStyles } from "./BottomNavigation.style";
import IconHome from "../../assets/icons/bottom_navigation/home.svg";
import IconActivities from "../../assets/icons/bottom_navigation/notification-bing.svg";
import IconAccount from "../../assets/icons/bottom_navigation/frame.svg";
import { BottomNavigationFactory } from "src/models/BottomNavigationFactory";

interface IBottomNavigation {
  tabIndex: number;
  onChangeTab: Function;
}

export const BottomNavigation: FC<
  IBottomNavigation & HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { tabIndex, onChangeTab, ...otherProps } = props;
  const classes = useStyles();
  const [buttonNavigationList, SetButtonNavigationList]: any = useState([]);

  const renderIconActive = (index: number) => {
    switch (index) {
      case 1:
        return <img src={IconHome} alt="icon bottom navigation" />;
      case 2:
        return <img src={IconActivities} alt="icon bottom navigation" />;
      case 3:
        return <img src={IconAccount} alt="icon bottom navigation" />;
      default:
        return <img src={IconHome} alt="icon bottom navigation" />;
    }
  };

  useEffect(() => {
    const fetData = BottomNavigationFactory.getData();
    SetButtonNavigationList(fetData);
  }, []);

  return (
    <div {...otherProps} className={clsx(props.className, classes.root)}>
      <ul className={classes.navList}>
        {buttonNavigationList.map((item: any) => (
          <li key={item.id} className={clsx(classes.navItem)}>
            <button
              className={clsx(classes.navButton)}
              onClick={() => onChangeTab(item.id)}
            >
              {item.id === tabIndex ? (
                renderIconActive(item.id)
              ) : (
                <img src={item.icon} alt="icon bottom navigation" />
              )}
              <p className={item.id === tabIndex ? classes.active : ""}>
                {item.name}
              </p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
