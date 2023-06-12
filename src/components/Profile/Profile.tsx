import clsx from "clsx";
import { useEffect, useState, useContext, FC, HTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileFactory } from "src/models/ProfileFactory";
import { BottomNavigation } from "../BottomNavigation";
import { Button } from "../Buttons";
import { Divider } from "../Divider";
import PageLayout from "../PageLayout/PageLayout";
import { useStyles } from "./Profile.style";
import IconArrowRight from "../../assets/icons/arrow-right-black.svg";
import IconNotificationOn from "../../assets/icons/notificationOn.png";
import IconNotificationOff from "../../assets/icons/notificationOff.png";
import IconProfileEdit from "../../assets/icons/icon-edit.png";
import AvatarProfile from "../../assets/images/profile/profileAvatar.png";
import { UserCtx } from "../../contexts/users/UserCtx";
import { DialogContext } from "../../contexts/dialog/DialogCtx";
import { PermissionContext } from "../../contexts/location/permissionCtx";
import { IAuthCtx } from "../../contexts/users/types";
import LoadingSkeleton from "../common/Skeleton/LoadingSkeleton";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { formatPhone } from "../../utils/formatPhone";

interface ITabIndex {
  tabIndex: number;
  setTabIndex: (state: number) => void;
}

export const Profile: FC<ITabIndex & HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { logout, updateCurrentUser, userSpecificData } =
    useContext<IAuthCtx>(UserCtx);
  const [imageLS, setImageLS] = useLocalStorage("image", "");
  const { openAlterButtonDialogAction } = useContext(DialogContext);
  const { addressFromLS } = useContext(PermissionContext);
  const { tabIndex, setTabIndex, ...otherProps } = props;
  const name = userSpecificData.name || "Your name";
  const username: any = userSpecificData.username;
  const phone = formatPhone(username);
  const onChangeTabs = (id: number) => {
    setTabIndex(id);
  };

  const logoutHandle = () => {
    const data = {
      title: "Are you leaving? :(",
      content: "Are you sure want to Sign out from GoMart?",
      buttonText: "confirm",
      onClick: () => logout(navigate),
    };
    openAlterButtonDialogAction(data);
  };

  const [lsAccountSettingFeature, setLsAccountSettingFeature]: any = useState(
    []
  );
  const [lsMoreFeature, setLsMoreFeature]: any = useState([]);
  const [isOpenNotificationPromo, setIsOpenNotificationPromo]: any =
    useState(false);
  const [isOpenNotificationPush, setIsOpenNotificationPush] = useLocalStorage(
    "notification",
    false
  );
  const [lsNotification, setLsNotification]: any = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const onNavigate = (path: string) => {
    navigate(path);
  };

  useEffect(() => {
    const listAccountSettingFeature =
      ProfileFactory.getListAccountSettingFeature();
    setLsAccountSettingFeature(listAccountSettingFeature);
    const listMoreFeature = ProfileFactory.getListMoreFeature();
    setLsMoreFeature(listMoreFeature);
    const lsNotification = ProfileFactory.getListNotification();
    setLsNotification(lsNotification);
    if (imageLS) {
      setImageLS(imageLS);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1 * 1000);
    return () => {
      clearTimeout(timer);
    };
  });
  const onToggle = async (id: number) => {
    if (id === 1) {
      function checkNotificationPromise() {
        try {
          Notification.requestPermission().then();
        } catch (e) {
          return false;
        }

        return true;
      }

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      function handlePermission(permission: any) {
        if (window.Notification && permission === "granted") {
          setIsOpenNotificationPush(!isOpenNotificationPush);
        } else if (window.Notification && permission === "denied") {
          alert("Notification reject!");
        }
      }

      if (!("Notification" in window)) {
        alert("This browser does not support notifications.");
      } else {
        if (checkNotificationPromise()) {
          Notification.requestPermission().then((permission) => {
            handlePermission(permission);
          });
        } else {
          Notification.requestPermission(function (permission) {
            handlePermission(permission);
          });
        }
      }
    } else {
      setIsOpenNotificationPromo(!isOpenNotificationPromo);
    }
  };
  const handleScroll = () => {
    document.documentElement.scrollTop = 0;
  };

  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const result = reader.result as string;
      updateCurrentUser({ image: result });
    });
    reader.readAsDataURL(file);
  };

  const renderCardProfile = (title: string, list: any, type: string) => {
    return (
      <PageLayout className={classes.cardProfile}>
        <h6 className={classes.cardTitle}>{title}</h6>
        {list.map((item: any) => {
          return (
            <div className={classes.cardContent} key={item?.id}>
              <div>
                <img
                  className={item?.context === "Version" ? classes.disable : ""}
                  src={item?.icon}
                />
              </div>
              <div
                className={classes.contextContent}
                onClick={
                  type === "toggle" || item.context === "Version"
                    ? () => {}
                    : () => {
                        onNavigate(item.url);
                        handleScroll();
                      }
                }
              >
                <div
                  className={clsx(
                    classes.cardContext,
                    (item?.context === "Rate Us" && classes.titleDisable) ||
                      (item?.context === "Version" && classes.titleDisable) ||
                      (item?.context === "FAQ/Help" && classes.titleDisable) ||
                      (item?.context === "Terms & Conditions" &&
                        classes.titleDisable)
                  )}
                >
                  <p>{item?.context}</p>
                  <p>{item?.helpContext}</p>
                </div>
                {type === "refer" ? (
                  item?.context === "Version" ? (
                    <div>
                      <p className={classes.version}>v1.1</p>
                    </div>
                  ) : (
                    <div>
                      <img src={IconArrowRight} alt="btnArrowRight" />
                    </div>
                  )
                ) : (
                  <div onClick={() => onToggle(item.id)}>
                    {(
                      item.id === 1
                        ? isOpenNotificationPush
                        : isOpenNotificationPromo
                    ) ? (
                      <img src={IconNotificationOn} alt="btnNotificationOn" />
                    ) : (
                      <img src={IconNotificationOff} alt="btnNotificationOff" />
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </PageLayout>
    );
  };

  return (
    <div {...otherProps} className={clsx(classes.root, otherProps.className)}>
      <PageLayout className={classes.header}>
        <h6>Account</h6>
        <div className={classes.headerContent}>
          {isLoading ? (
            <LoadingSkeleton className={classes.imgData}></LoadingSkeleton>
          ) : (
            <div className={classes.avatar}>
              <img src={userSpecificData.image || AvatarProfile} alt="avatar" />
              <label>
                <img src={IconProfileEdit} alt="profile edit" />
                <input
                  type="file"
                  style={{ display: "none" }}
                  accept="image/*"
                  onChange={onChangeImage}
                />
              </label>
            </div>
          )}

          <div className={classes.bio}>
            {isLoading ? (
              <LoadingSkeleton className={classes.nameData}></LoadingSkeleton>
            ) : (
              <p>{name}</p>
            )}
            {isLoading ? (
              <LoadingSkeleton className={classes.phoneData}></LoadingSkeleton>
            ) : (
              <p>+84 {phone}</p>
            )}
            {isLoading ? (
              <LoadingSkeleton
                className={classes.addressData}
              ></LoadingSkeleton>
            ) : (
              <p>{addressFromLS || "Your Address"}</p>
            )}
          </div>
        </div>
      </PageLayout>
      <Divider />
      {renderCardProfile("Account Settings", lsAccountSettingFeature, "refer")}
      <Divider />
      {renderCardProfile("Notifications", lsNotification, "toggle")}
      <Divider />
      {renderCardProfile("More", lsMoreFeature, "refer")}
      <Divider />
      <PageLayout className={classes.btnLogout}>
        <Button variant="outlined" onClick={logoutHandle}>
          Log out
        </Button>
      </PageLayout>
      <PageLayout className={classes.btnDelete}>
        <Button
          variant="outlined"
          onClick={() => navigate("/delete-account")}
          className={classes.textDelete}
        >
          Delete account
        </Button>
      </PageLayout>
      <Divider className={classes.bottom} />

      <BottomNavigation tabIndex={tabIndex} onChangeTab={onChangeTabs} />
    </div>
  );
};

export default Profile;
