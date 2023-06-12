import { useState, useEffect, useContext, FC, HTMLAttributes } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Images from "src/assets/images";
import { useStyles } from "./ProductDetails.style";
import PageLayout from "../PageLayout/PageLayout";
import { CardDescriptionItem } from "../CardDescriptionItem";
import { ReactComponent as Star } from "../../assets/images/YourOrder/starRatting.svg";
import IconShopping from "../../assets/icons/shopping-cart.svg";
import IconLeftBlack from "../../assets/icons/arrow-left.png";
import IconMore from "../../assets/icons/more.jpg";
import { PopUpShare } from "../PopUpShare";
import { GroceriesFactory, IProduct } from "src/models/GroceriesFactory";
import clsx from "clsx";
import Swiper from "../Swiper/Swiper";
import { ProductDetailFactory } from "src/models/ProductDetailFactory";
import NumberFormat from "react-number-format";
import LoadingSkeleton from "../common/Skeleton/LoadingSkeleton";
import { BuyingStatusCtx } from "../../contexts/buyingStatus/buyingStatusCtx";
import { IBuyingStatusCtx } from "../../contexts/buyingStatus/types";
import { getCurrentProducts } from "../../utils/getCurrentProducts";

export const ProductDetails: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const params = useParams();
  const { state }: any = useLocation();

  const { additionalObj, setAdditionalObj, totalItem } =
    useContext<IBuyingStatusCtx>(BuyingStatusCtx);

  const [togglePopup, setTogglePopup] = useState<boolean>(false);
  const [products, setProducts] = useState<Array<IProduct>>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [scroll, setScroll] = useState<number>(0);

  const [data, setData] = useState<any>({});

  useEffect(() => {
    const scrollEvent = () => {
      const scrollDown = window.scrollY;
      setScroll(scrollDown);
    };
    window.addEventListener("scroll", scrollEvent);
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, [scroll]);

  useEffect(() => {
    const listProduct = GroceriesFactory.getGroceriesAllProduct();
    setProducts(listProduct);
    const dataProductDetail = async () => {
      const dataItem = await ProductDetailFactory.getDataAllProductDetails();
      const item = dataItem.find((dt: any) => dt.name === state.name);
      setData(item);
    };
    dataProductDetail();

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [params.id]);

  useEffect(() => {
    const allGroceriesProducts = GroceriesFactory.getGroceriesAllProduct();
    const allProducts = [...allGroceriesProducts];
    const currentProducts = getCurrentProducts(allProducts, additionalObj);

    setProducts(currentProducts);
  }, [params.id]);

  const sum = totalItem;

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAddtoCart = () => {
    if (params.id === undefined) return;
    setAdditionalObj({
      ...additionalObj,
      [params.id]: additionalObj[params?.id] + 1 || 1,
    });
  };
  const handleMinusCart = () => {
    if (params.id === undefined) return;
    setAdditionalObj({
      ...additionalObj,
      [params.id]: additionalObj[params?.id] - 1,
    });
  };
  const handleEmptyCart = () => {
    if (params.id === undefined) {
      return;
    }
    setAdditionalObj({
      ...additionalObj,
      [params.id]: 0,
    });
  };

  const moveCheckout = () => {
    navigate("/mycart");
  };

  const onSelectProduct = (product: any, type: string) => {
    const result = GroceriesFactory.onChangeQuantity(product, type);
    setAdditionalObj({ ...additionalObj, [product.id]: result.quantity });
  };

  return (
    <div {...props} className={clsx(classes.root, props.className)}>
      <PageLayout>
        <div className={classes.headerDetails}>
          <img
            onClick={() => navigate(-1)}
            src={IconLeftBlack}
            alt="img_icon_back"
            style={{ height: 24, width: 24, objectFit: "contain" }}
          />
          <p className={classes.titleHeaderDetails}>Product Details</p>
        </div>
        <div className={classes.detailsSlide}>
          {isLoading ? (
            <LoadingSkeleton className={classes.imgdata}></LoadingSkeleton>
          ) : (
            <Swiper items={data?.slide} />
          )}
        </div>
      </PageLayout>
      <PageLayout>
        <div className={classes.ProductDescription}>
          {isLoading ? (
            <LoadingSkeleton className={classes.nameData}></LoadingSkeleton>
          ) : (
            <p>{data?.name}</p>
          )}

          <div className={classes.productcontainericon}>
            <img src={IconMore} alt="" onClick={() => setTogglePopup(true)} />
          </div>
        </div>
        <div className={classes.condition}>
          {isLoading ? (
            <LoadingSkeleton className={classes.newData}></LoadingSkeleton>
          ) : (
            <>
              {data?.type !== "" && (
                <div className={classes.status}>{data?.type}</div>
              )}
            </>
          )}
          {isLoading ? (
            <LoadingSkeleton className={classes.priceData}></LoadingSkeleton>
          ) : (
            <>
              <p className={classes.priBefore}>
                <NumberFormat
                  value={data?.price}
                  displayType={"text"}
                  thousandSeparator={true}
                  suffix="d"
                />
              </p>
              {data?.priceOrigin !== 0 && (
                <p className={classes.priNow}>
                  <NumberFormat
                    value={data?.priceOrigin}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix="d"
                  />
                </p>
              )}
            </>
          )}
        </div>
        {isLoading ? (
          <LoadingSkeleton className={classes.nameDetailData}></LoadingSkeleton>
        ) : (
          <p className={classes.contentProduct}>{data?.nameDetail}</p>
        )}

        <div className={classes.rvCmt}>
          {isLoading ? (
            <LoadingSkeleton
              className={classes.productSoldData}
            ></LoadingSkeleton>
          ) : (
            <div
              className={classes.rating}
              onClick={() => navigate("/reviews")}
            >
              <span>{data?.nbProductSold} products sold</span>
            </div>
          )}
          <div className={classes.rv} onClick={() => navigate("/reviews")}>
            <Star />
            <span>Rating & review</span>
          </div>
        </div>
      </PageLayout>
      <hr className={classes.hrproduct}></hr>
      <PageLayout>
        <div className={classes.styleProduct}>
          <p>Style</p>
          <div className={classes.required}>Required</div>
        </div>
        <div className={classes.radioInput}>
          {data?.style?.map((item: any) => (
            <label key={item?.id} className={classes.amountProduct}>
              <input type="radio" name="radio" id="1" />
              {isLoading ? (
                <LoadingSkeleton
                  className={classes.valueData}
                ></LoadingSkeleton>
              ) : (
                <>{item?.value}</>
              )}

              <br />
            </label>
          ))}
        </div>
      </PageLayout>
      <hr className={classes.hrproduct}></hr>
      <PageLayout>
        <div className={classes.details}>
          <p className={classes.headerProductDetails}>Product Description</p>
          <div
            className={classes.contentProductDetails}
            id="productDescription"
          >
            {data?.productDescription
              ?.split("<br/>")
              .map((itemText: any, i: number) => (
                <div key={i}>
                  {itemText}
                  <br />
                  <br />
                </div>
              ))}
          </div>
        </div>
        <ul className={classes.ulinfodetails}>
          {data?.productDetail?.manufacturer && (
            <li className={classes.liinfodetails}>
              <p>Manufacturer</p>
              <p>{data?.productDetail?.manufacturer}</p>
            </li>
          )}
          {data?.productDetail?.flavor && (
            <li className={classes.liinfodetails}>
              <p>Flavor</p>
              <p>{data?.productDetail?.flavor}</p>
            </li>
          )}
          {data?.productDetail?.type && (
            <li className={classes.liinfodetails}>
              <p>Type</p>
              <p>{data?.productDetail?.type}</p>
            </li>
          )}
          {data?.productDetail?.brand && (
            <li className={classes.liinfodetails}>
              <p>Brand</p>
              <p>{data?.productDetail?.brand}</p>
            </li>
          )}
          {data?.productDetail?.packageInformation && (
            <li className={classes.liinfodetails}>
              <p>Package Information</p>
              <p>{data?.productDetail?.packageInformation}</p>
            </li>
          )}
          {data?.productDetail?.dateFirstAvailable && (
            <li className={classes.liinfodetails}>
              <p>Date First Available</p>
              <p>{data?.productDetail?.dateFirstAvailable}</p>
            </li>
          )}
          {data?.productDetail?.allergens && (
            <li className={classes.liinfodetails}>
              <p>Allergens </p>
              <p>{data?.productDetail?.allergens}</p>
            </li>
          )}
        </ul>
      </PageLayout>
      <hr className={classes.hrproduct}></hr>
      <br />
      <PageLayout className="mb16">
        <CardDescriptionItem
          list={products}
          onChangeProduct={onSelectProduct}
          currentItem={params?.id}
        />
      </PageLayout>
      <hr className={classes.hrproduct}></hr>
      <PageLayout>
        <p className={classes.headerFeedback}>Customer Feedbacks</p>
        <div className={classes.feedbackItem}>
          <img
            src={Images.ImgUser}
            alt="imageUser"
            className={classes.imguser}
            height="40px"
          />
          <div>
            <img src={Images.ImgRating} alt="imgRating" />
            <p className={classes.nameUser}>Wad***en</p>
            <p className={classes.feedback}>
              Highly addictive and tasty beware
            </p>
          </div>
          <p className={classes.timeFeedback}>2022-05-29 | 15:30</p>
        </div>
        <div className={classes.feedbackItem}>
          <img
            src={Images.ImgUser1}
            alt="imageUser"
            className={classes.imguser}
            height="40px"
          />
          <div>
            <img src={Images.ImgRating1} alt="imgRating" />
            <p className={classes.nameUser}>Kat***en</p>
            <p className={classes.feedback}>
              We have always enjoyed Krusteaz
              <br /> products, but this is the first time we’ve
              <br /> tried this one. It’s a great mix that
              <br /> produces a tender, flavorful cake.
            </p>
          </div>
          <p className={classes.timeFeedback}>2022-05-18 | 15:30</p>
        </div>
        <div className={classes.containedBtnUp}>
          <div
            className={scroll > 0 ? classes.btnUp : ""}
            onClick={() => handleScroll()}
          >
            <img src={Images.arrowDownBlack} alt="arrowDownBlack" />
          </div>
        </div>
        <div className={classes.footer} onClick={() => navigate("/reviews")}>
          <p>See More</p>
          <img src={Images.nextBlack} alt="IconArrowRight" />
        </div>
        <div className={classes.containedCart}>
          <div className={classes.cart}>
            <img src={IconShopping} alt="IconCart" onClick={moveCheckout} />
          </div>
          <button className={classes.btnCart}>
            {params.id !== undefined && additionalObj[params.id] === 1 && (
              <img
                src={Images.trash}
                alt="trash"
                onClick={handleEmptyCart}
                style={{ padding: "0 16px" }}
              />
            )}
            {params.id !== undefined && additionalObj[params.id] > 1 && (
              <img
                src={Images.minusCart}
                alt="minusCart"
                onClick={handleMinusCart}
                style={{ padding: "0 16px" }}
              />
            )}
            {params.id !== undefined &&
              (!Object.prototype.hasOwnProperty.call(
                additionalObj,
                params.id
              ) ||
                additionalObj[params.id] === 0) && (
                <p onClick={handleAddtoCart}>ADD TO CART</p>
              )}
            {params.id !== undefined && additionalObj[params.id] > 0 && (
              <p>
                {params.id !== undefined && additionalObj[params.id]} IN CART
              </p>
            )}
            {params.id !== undefined &&
              additionalObj[params.id] !== 0 &&
              additionalObj[params.id] !== undefined && (
                <img
                  src={Images.plusCart}
                  alt="plusCart"
                  onClick={handleAddtoCart}
                  style={{ padding: "0 16px" }}
                />
              )}
          </button>
          {sum !== 0 && <div className={classes.amountCart}>{sum}</div>}
        </div>
      </PageLayout>
      {togglePopup && <PopUpShare togglePopup={setTogglePopup} />}
    </div>
  );
};

export default ProductDetails;
