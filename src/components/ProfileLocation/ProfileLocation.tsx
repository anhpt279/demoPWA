import clsx from "clsx";
import React, { FC, HTMLAttributes, useEffect, useContext } from "react";
import PageLayout from "../PageLayout/PageLayout";
import { useStyles } from "./ProfileLocation.style";
import { useNavigate, Navigate, useLocation } from "react-router-dom";
import iconFind from "../../assets/icons/Icon-find.svg";
import { LocationProfile } from "src/models/LocationProfile";
import IconLocation from "../../assets/icons/location.svg";
import { FilterSearch } from "src/models/FilterSearch";
import { Button } from "../Buttons";
import IconLeftBlack from "../../assets/icons/arrow-left.png";
import EmptyProfileLocation from "./EmptyProfileLocation/EmptyProfileLocation";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { PermissionContext } from "../../contexts/location/permissionCtx";
import { IAuthCtx } from "../../contexts/users/types";
import { UserCtx } from "../../contexts/users/UserCtx";

// eslint-disable-next-line
const specialCharRegex = /[`!@#$%^&*()_\-=\[\]{};':"\\|,.<>\/?~]/;

export const ProfileLocation: FC<HTMLAttributes<HTMLDivElement>> = (
  props: any
) => {
  const classes = useStyles();
  const { location } = useContext(PermissionContext);
  const [parsedAddressLS, setAddressLS] = useLocalStorage("address", []);
  const { userSpecificData } = useContext<IAuthCtx>(UserCtx);
  const { state }: any = useLocation();
  const navigate = useNavigate();
  const addressHistory = userSpecificData.addressHistory || [];
  const [listDefaulSearch, setListDefaulSearch]: any = React.useState([]);
  const [listRecentSearch, setListRecentSearch]: any = React.useState([]);
  const [listData, setListData]: any = React.useState([]);
  const [listLocationMatchSearch, setListLocationMatchSearch]: any =
    React.useState([]);
  const [valueSearch, setValueSearch] = React.useState<string>("");
  const [active, setActive] = React.useState<boolean>(false);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  useEffect(() => {
    if (state) {
      setIsOpen(state.open);
    }
    const listDefaul = LocationProfile.getDefaultLocationProfile();
    setListDefaulSearch(listDefaul);
    setListLocationMatchSearch(listData);
    if (addressHistory.length > 0) {
      setListData([...addressHistory]);
      setListRecentSearch(addressHistory);
    }
  }, []);

  const renderLocation = (
    list: any,
    title: string,
    clearAll: boolean,
    onClick: Function
  ) => {
    const recentSearch = (item: string) => {
      return () => {
        setValueSearch(item);
        const listMatch = FilterSearch.filterSearchLocation(item, listData);
        setListLocationMatchSearch(listMatch);
      };
    };

    return (
      <div className={classes.item}>
        <div className={classes.headerItem}>
          <p className={classes.titleSearch}>{title}</p>
          {clearAll && (
            <p className={classes.clearAll} onClick={() => onClick()}>
              Clear all
            </p>
          )}
        </div>
        <div>
          {list.map((item: any) => {
            const location = item?.detailLocation
              .split(specialCharRegex)
              .map((str: string) => str.trim())
              .slice(0, 2)
              .join(", ");
            return (
              <div
                key={item?.id}
                className={classes.itemSearch}
                onClick={recentSearch(location)}
              >
                <img src={IconLocation} alt="icon-location" />
                <div className={classes.itemSearchContent}>
                  <p>{location}</p>
                  <p>{item?.detailLocation}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueSearch(e.target.value);
    const listMatch = FilterSearch.filterSearchLocation(
      e.target.value,
      listData
    );
    setListLocationMatchSearch(listMatch);
  };

  const handleClear = () => {
    setAddressLS([]);
    setListRecentSearch([]);
  };

  if (location) {
    return (
      <Navigate
        to="/profile/map"
        replace={true}
        state={{ open: state?.open }}
      />
    );
  }

  if (!isOpen) {
    return <EmptyProfileLocation setIsOpen={setIsOpen} />;
  }

  return (
    <div {...props} className={clsx(classes.root, props.className)}>
      <PageLayout className={classes.headerContent}>
        <div className={classes.header}>
          <div className={classes.btnArrowLeft} onClick={() => navigate(-1)}>
            <img
              src={IconLeftBlack}
              srcSet={`${IconLeftBlack} 2x`}
              style={{ width: 24, height: 24, objectFit: "contain" }}
            />
          </div>
          <h6>Location</h6>
        </div>
        <p className={classes.title}>Search location</p>
        <div className={clsx(classes.search, active && classes.active)}>
          <img src={iconFind} alt="icon-find" />
          <input
            type="text"
            placeholder="Enter a new address"
            onClick={() => setActive(true)}
            onBlur={() => setActive(false)}
            value={valueSearch}
            onChange={(e) => onChangeValue(e)}
          />
        </div>
        {valueSearch.length === 0 &&
          renderLocation(listDefaulSearch, "Default location", false, () => {})}
        {valueSearch.length === 0 &&
          renderLocation(listRecentSearch, "Recent Search", true, () =>
            handleClear()
          )}

        {valueSearch.length > 0 &&
          renderLocation(listLocationMatchSearch, "", false, () => {})}
      </PageLayout>
      <PageLayout className={classes.btn}>
        <Button
          variant="contained"
          onClick={() =>
            navigate("/profile/map", {
              state: { valueSearch, open: state?.open || null },
            })
          }
        >
          Submit
        </Button>
      </PageLayout>
    </div>
  );
};

export default ProfileLocation;
