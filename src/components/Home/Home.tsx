import clsx from "clsx";
import React, {
  useContext,
  useEffect,
  useState,
  FC,
  HTMLAttributes,
} from "react";
import { BottomNavigation } from "../BottomNavigation";
import PageLayout from "../PageLayout/PageLayout";
import { Promos } from "../Promos";
import { useStyles } from "./Home.style";
import { ShopsFactory } from "src/models/ShopsFactory";
import { NearUserHome } from "../NearUserHome";
import { Activities } from "../Activities";
import { Profile } from "../Profile";
import { NavigationCtx } from "../../contexts/navigation/navigationCtx";
import { useNavigate } from "react-router-dom";
import { ListRecommendFood } from "../ListRecommendFood";
import { HomeFactory } from "src/models/HomeFactory";
import ImagesLogo from "../../assets/images/home/Logo.png";
import { ReactComponent as ImgLike } from "../../assets/icons/heartfullislike.svg";
import IconHeart from "../../assets/icons/heart-white.svg";
import IconShopping from "../../assets/icons/shopping-cart.svg";
import IconSearch from "../../assets/icons/search-normal.svg";
import IconArrowDown from "../../assets/icons/arrow-down.svg";
import { PermissionContext } from "../../contexts/location/permissionCtx";

export const Home: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const classes = useStyles();
  const [listHotPromos, setListHotPromos] = useState<Array<any>>([]);
  const { tabIndex, setTabIndex } = useContext(NavigationCtx);
  const navigate = useNavigate();
  // header

  const [imgLike, setimgLike] = useState(false);
  const { addressFromLS } = useContext(PermissionContext);

  const firstLocation: string =
    addressFromLS === ""
      ? "Please provide your location"
      : addressFromLS?.split(", ")?.slice(0, 3)?.join(", ");

  // list food

  const [listRecommendBakeryFood, setListRecommendBakeryFood]: any =
    React.useState([]);
  const [listRecommendFreshFruisFood, setListRecommendFreshFruisFood]: any =
    React.useState([]);
  const [listRecommendMeatSeafood, setListRecommendMeatSeafood]: any =
    React.useState([]);

  useEffect(() => {
    const RECOMMEND_BAKERY_BREAD = ShopsFactory.getRecommendBakeryBread();
    setListRecommendBakeryFood(RECOMMEND_BAKERY_BREAD);
    const RECOMMEND_FRESH_FRUITS_FOOD =
      ShopsFactory.getRecommendFreshFruitFood();
    setListRecommendFreshFruisFood(RECOMMEND_FRESH_FRUITS_FOOD);
    const RECOMMEND_MEAT_SEAFOOD = ShopsFactory.getRecommendMeatSeafood();
    setListRecommendMeatSeafood(RECOMMEND_MEAT_SEAFOOD);
  }, []);

  const onChangeTabs = (id: number) => {
    setTabIndex(id);
  };

  const onClickSave = (item: any) => {
    navigate(`/groceries/${item.grocery}`);
  };

  // slide home
  const [currentStep, setCurrentStep] = React.useState(1);
  const HOME_SLIDE = HomeFactory.getImageHomeSlide();
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentStep < 6) {
        return setCurrentStep(currentStep + 1);
      }
      return setCurrentStep(1);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentStep]);

  useEffect(() => {
    const HOT_PROMOS = ShopsFactory.getHotPromos();
    setListHotPromos(HOT_PROMOS);
  }, []);

  return (
    <div {...props} className={clsx(props.className, classes.root)}>
      {tabIndex === 1 && (
        <div className={classes.wrapperHome}>
          <div className={classes.header}>
            <PageLayout>
              <div className={clsx(classes.wrapperHeader)}>
                <div className={classes.wrapperMobile}>
                  <div className={classes.wrapperContent}>
                    <div className={classes.content}>
                      <p className={classes.contentTitle}>Delivery to</p>
                      <div
                        className={classes.contentContext}
                        onClick={() => {
                          navigate("/profile/location", {
                            state: { open: true },
                          });
                        }}
                      >
                        <p>{firstLocation}</p>
                        <img src={IconArrowDown} />
                      </div>
                    </div>
                    <div className={classes.headerIcon}>
                      <button onClick={() => navigate("/wishlist")}>
                        {imgLike === false && (
                          <img
                            src={IconHeart}
                            onClick={() => setimgLike(true)}
                          />
                        )}
                        {imgLike && (
                          <ImgLike onClick={() => setimgLike(false)} />
                        )}
                      </button>
                      <button onClick={() => navigate("/mycart")}>
                        <img src={IconShopping} />
                      </button>
                    </div>
                  </div>
                  <div className={classes.search}>
                    <div>
                      <img src={IconSearch} />
                    </div>
                    <input
                      type="text"
                      placeholder="What are you looking for (eg. fish, meat..)"
                      onClick={() => navigate("/home/search")}
                    />
                  </div>
                </div>
                <div className={classes.wrapperContentDesktop}>
                  <div className={classes.logoDesktop}>
                    <img src={ImagesLogo} alt="logo" />
                  </div>
                  <div className={clsx(classes.buttonDesktop, "text_title")}>
                    <div className="mr16">Login</div>
                    <div>Sign up</div>
                  </div>
                </div>
              </div>
              <div className={clsx(classes.slideWrapper)}>
                {HOME_SLIDE.map((item) => (
                  <div
                    key={item.id}
                    className={clsx(
                      classes.slide,
                      currentStep === item?.id ? "" : classes.hide
                    )}
                  >
                    <img src={item.image} />
                  </div>
                ))}
              </div>
            </PageLayout>
          </div>
          <div className={clsx(classes.body)}>
            <NearUserHome />
            <div className={classes.divider}></div>
            <div className={clsx(classes.rootRecommendFood)}>
              <h6 className="homeTitle">Recommend For You</h6>
              <ListRecommendFood
                title="Bakery & Bread"
                listRecommend={listRecommendBakeryFood}
              />
              <ListRecommendFood
                title="Fresh Fruits"
                listRecommend={listRecommendFreshFruisFood}
              />
              <ListRecommendFood
                title="Meat & Seafood"
                listRecommend={listRecommendMeatSeafood}
              />
            </div>
            <div className={classes.divider}></div>
            <PageLayout className="mt16">
              <h6 className="homeTitle">Hot Promos</h6>
            </PageLayout>
            <Promos
              listHotPromos={listHotPromos}
              onClickSave={onClickSave}
              promoSaved=""
            />
          </div>
        </div>
      )}
      {tabIndex === 2 && (
        <Activities setTabIndex={setTabIndex} tabIndex={tabIndex} />
      )}
      {tabIndex === 3 && (
        <Profile setTabIndex={setTabIndex} tabIndex={tabIndex} />
      )}

      <BottomNavigation tabIndex={tabIndex} onChangeTab={onChangeTabs} />
    </div>
  );
};

export default Home;
