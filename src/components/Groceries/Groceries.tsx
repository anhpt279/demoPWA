import clsx from "clsx";
import React, {
  FC,
  HTMLAttributes,
  useEffect,
  useState,
  useContext,
} from "react";
import { useStyles } from "./Groceries.style";
import IconArrowLeft from "../../assets/icons/arrow-left.svg";
import { ReactComponent as Heart } from "src/assets/icons/heart-green.svg";
import IconSearch from "../../assets/icons/search-normal-white.svg";
import PageLayout from "../PageLayout/PageLayout";
import { useNavigate, useParams } from "react-router-dom";
import { CardDescriptionItem } from "../CardDescriptionItem";
import {
  GroceriesFactory,
  IProduct,
  ISaleProduct,
} from "../../models/GroceriesFactory";
import { Divider } from "../Divider";
import IconFlashSale from "../../assets/icons/flash.svg";
import { Button } from "../Buttons";
import IconFilter from "../../assets/icons/Small.svg";
import { SortAndFilter } from "../SortAndFilter";
import IconStar from "../../assets/icons/star.svg";
import Countdown from "../Countdown/Countdown";
import { FilterSearch } from "src/models/FilterSearch";
import { ShopsFactory, IRecommendProduct } from "src/models/ShopsFactory";
import NumberFormat from "react-number-format";
import { getCurrentProducts } from "../../utils/getCurrentProducts";
import { BuyingStatusCtx } from "../../contexts/buyingStatus/buyingStatusCtx";
import { IBuyingStatusCtx } from "../../contexts/buyingStatus/types";
import IconLocation from "src/assets/icons/location-groceries.svg";
import IconTime from "src/assets/icons/clock.svg";
import downIcon from "src/assets/icons/iconDown.png";
import upIcon from "src/assets/icons/IconUp.png";
import { IAuthCtx } from "../../contexts/users/types";
import { UserCtx } from "../../contexts/users/UserCtx";

export const Groceries: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const param = useParams();

  const { additionalObj, setAdditionalObj, priceCheckout, totalItem } =
    useContext<IBuyingStatusCtx>(BuyingStatusCtx);
  const { userSpecificData, updateCurrentUser } = useContext<IAuthCtx>(UserCtx);

  const [allProduct, setAllProduct] = useState<Array<IProduct>>([]);
  const [listFilter, setListFilter] = useState<Array<any>>([]);
  const [itemFilter, setItemFilter] = useState<string>("All");
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);

  const [listSearchProduct, setListSearchProduct] = useState<Array<any>>([]);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [products, setProducts] = useState<Array<IProduct>>([]);
  const [saleProducts, setSaleProducts] = useState<Array<ISaleProduct>>([]);
  const [recommendProduct, setRecommendProduct] = useState<
    Array<IRecommendProduct>
  >([]);

  const [dataShop, setDataShop]: any = useState({});
  const [showMore, setShowMore] = useState(true);
  const URLParam = new URLSearchParams(window.location.search);
  const search = URLParam.get("search");
  const recommend = URLParam.get("recommend");

  const { wishlist } = userSpecificData;
  const realWishlist = wishlist || [];

  const checkWishlist = realWishlist.some(
    (item: string | void) => item === param.id
  );

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const getAllShop = GroceriesFactory.getShopData();
    const dataShop = getAllShop.find((item: any) => item.id === param.id);
    setDataShop(dataShop);
  }, []);

  useEffect(() => {
    const fetchListMeatSeafoot = ShopsFactory.getRecommendMeatSeafood();
    const fetchListBakeryBread = ShopsFactory.getRecommendBakeryBread();
    const fetchListMeatFruitFood = ShopsFactory.getRecommendFreshFruitFood();

    const allRecommend = [
      ...fetchListBakeryBread,
      ...fetchListMeatFruitFood,
      ...fetchListMeatSeafoot,
    ];

    const allGroceriesProducts = GroceriesFactory.getGroceriesAllProduct();
    const fetchFilter = GroceriesFactory.getListFilter();
    setListFilter(fetchFilter);
    if (recommend !== null) {
      const result = FilterSearch.filterRecommendItems(recommend, allRecommend);
      const currentRecommend = getCurrentProducts(result, additionalObj);
      setRecommendProduct(currentRecommend);
    }

    if (search !== null) {
      const result = FilterSearch.filterRecommendItems(
        search,
        allGroceriesProducts
      );
      const currentSearchProducts = getCurrentProducts(result, additionalObj);
      setListSearchProduct(currentSearchProducts);
    }

    const allProducts = [...allGroceriesProducts];
    const currentAllProducts = getCurrentProducts(allProducts, additionalObj);
    setAllProduct(currentAllProducts);
    setProducts(currentAllProducts);
    const allSales = GroceriesFactory.getGroceriesSale();
    const currentSaleProducts = getCurrentProducts(allSales, additionalObj);
    setSaleProducts(currentSaleProducts);
  }, [search]);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const onCloseDialog = () => {
    setIsOpenDialog(false);
    document.body.style.overflow = "unset";
  };

  const onClickFilter = (e: React.MouseEvent<HTMLDivElement>) => {
    const { textContent } = e.currentTarget;
    if (typeof textContent === "string") {
      setItemFilter(textContent);
    }
    if (e.currentTarget.textContent === "All") {
      setProducts(allProduct);
    } else {
      const listFilter = GroceriesFactory.onClickFilter(
        allProduct,
        textContent
      );

      setProducts(listFilter);
    }
  };

  const onClickOpenDialog = () => {
    setIsOpenDialog(true);
    setScrollPosition(0);
    document.body.style.overflow = "hidden";
  };

  const onSelectProduct = (product: any, type: string) => {
    const result = GroceriesFactory.onChangeQuantity(product, type);
    setAdditionalObj({ ...additionalObj, [product.id]: result.quantity });
  };

  const onCheckOut = () => {
    if (totalItem > 0) navigate("/mycart");
  };

  const handleClick = () => {
    if (checkWishlist) {
      const filtered = GroceriesFactory.filterWishlist(realWishlist, param);
      updateCurrentUser({ wishlist: filtered });
    } else {
      updateCurrentUser({ wishlist: realWishlist.concat(param.id) });
    }
  };

  console.log("groceries: ", isOpenDialog);

  const renderFilter = () => {
    return (
      <div className={classes.filter} id="filter">
        <div className={classes.iconFIlter} onClick={onClickOpenDialog}>
          <img src={IconFilter} alt="filter icon" />
        </div>
        <SortAndFilter isOpen={isOpenDialog} onClose={onCloseDialog} />
        <div className={classes.filterList}>
          {listFilter.map((item: any) => (
            <div
              className={clsx(
                classes.filterItem,
                itemFilter === item.name && classes.active
              )}
              key={item.id}
              onClick={(e) => onClickFilter(e)}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div {...props} className={clsx(classes.root, props.className)}>
      <div className={classes.wrapperHeader}>
        <div className={clsx(classes.preHeader)}>
          <img src={dataShop.imgBanner} alt="img slide groceries" />
          <div className={classes.btnHeader}>
            <button onClick={() => navigate(-1)}>
              <img src={IconArrowLeft} alt="arrow left" />
            </button>
            <button onClick={() => navigate(`/groceries/${param.id}/search`)}>
              <img src={IconSearch} alt="search icon" />
            </button>
          </div>
        </div>
        <PageLayout className={classes.header}>
          <div className={clsx(classes.martHeader, "mt16")}>
            <img
              src={dataShop.imgShop}
              srcSet={`${dataShop.imgShop} 2x`}
              alt="logo mart"
            />
            <div className={classes.martName}>
              <p>{dataShop.nameShop}</p>
              <button onClick={() => handleClick()}>
                <Heart className={checkWishlist ? classes.isActive : ""} />
              </button>
            </div>
            <div className={classes.rateMart}>
              <p>{dataShop.numberStar}</p>
              <img src={IconStar} alt="icon star" />
              <p>(1000+) Ratings and Reviews</p>
            </div>
            <div
              className={clsx(
                classes.descreptionShop,
                showMore ? classes.notShow : classes.show
              )}
            >
              <div className={classes.featureMartItem}>
                <div className={classes.featureMartDetail}>
                  <img src={IconLocation} />
                  <div>
                    <p>{`Address`}</p>
                    <p>{dataShop.address}</p>
                  </div>
                </div>
              </div>

              <div className={classes.featureMartItem}>
                <div className={classes.featureMartDetail}>
                  <img src={IconTime} />
                  <div>
                    <p>{`Estimated Delivery`}</p>
                    <p>{dataShop.delivery}</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={classes.information}
              onClick={() => setShowMore(!showMore)}
            >
              <p>Show {showMore ? "More" : "Less"}</p>
              <img
                src={showMore ? downIcon : upIcon}
                srcSet={`${showMore ? downIcon : upIcon} 2x`}
                alt=""
              />
            </div>
          </div>
        </PageLayout>
      </div>
      <Divider />
      {listSearchProduct.length > 0 && (
        <>
          <PageLayout>
            <div className={classes.searchCategory}>
              <h6>Searched Products Available</h6>
              <p>{`Products related to "Cake" available in “Lotte Mart”`}</p>
            </div>
            <div className={clsx(classes.contentWrapper)}>
              <CardDescriptionItem
                list={listSearchProduct}
                onChangeProduct={onSelectProduct}
              />
            </div>
          </PageLayout>
          <Divider />
        </>
      )}
      {recommendProduct.length > 0 && (
        <>
          <PageLayout>
            <div className={classes.searchCategory}>
              <h6>Recommend for you</h6>
            </div>
            <div className={clsx(classes.contentWrapper)}>
              <CardDescriptionItem
                list={recommendProduct}
                onChangeProduct={onSelectProduct}
              />
            </div>
          </PageLayout>
          <Divider />
        </>
      )}
      {!(recommend || search) && (
        <>
          <PageLayout>
            <div className={clsx(classes.body)}>
              <div className={classes.category}>
                <h6>Flash Sale</h6>
                <img src={IconFlashSale} alt="icon flash" />
                <Countdown />
              </div>
              <div className={clsx(classes.contentWrapper)}>
                <CardDescriptionItem
                  list={saleProducts}
                  onChangeProduct={onSelectProduct}
                />
              </div>
            </div>
          </PageLayout>
          <Divider />
        </>
      )}
      <PageLayout>
        <div className={classes.category}>
          <h6>All Products</h6>
        </div>
      </PageLayout>
      {renderFilter()}
      <PageLayout>
        <div className={clsx(classes.contentWrapper, classes.negativeMargin12)}>
          <CardDescriptionItem
            list={products}
            onChangeProduct={onSelectProduct}
          />
        </div>
        <div className={classes.button}></div>
      </PageLayout>
      <div className={scrollPosition > 560 ? classes.sticky : ""}>
        <Button
          variant="contained"
          className={clsx(classes.button)}
          onClick={onCheckOut}
        >
          <div className={classes.btnCheckout}>
            <span>
              {totalItem} {totalItem > 1 ? "items" : "item"}
            </span>
            <span>
              {
                <NumberFormat
                  value={priceCheckout}
                  displayType={"text"}
                  thousandSeparator={true}
                  suffix="d"
                />
              }
            </span>
          </div>
          <span
            className={clsx(
              scrollPosition > 560 ? classes.checkout : "",
              totalItem > 0
                ? classes.checkoutAvailable
                : classes.checkoutNotAvailable
            )}
          >
            Check out
          </span>
        </Button>
      </div>

      <Divider className={classes.footer} />
    </div>
  );
};

export default Groceries;
