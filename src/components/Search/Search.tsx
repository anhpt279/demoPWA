import React, { FC, HTMLAttributes, useContext } from "react";
import clsx from "clsx";
import PageLayout from "../PageLayout/PageLayout";
import { useStyles } from "./Search.style";
import { FilterSearch } from "../../models/FilterSearch";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../Buttons/Button";
import { SearchFactory } from "src/models/SearchFactory";
import IconStar from "../../assets/icons/star.svg";
import IconSearch from "../../assets/icons/search-normal.svg";
import IconClock from "../../assets/icons/clock-yellow.svg";
import IconLeftBlack from "../../assets/icons/arrow-left.png";
import IconFind from "../../assets/icons/icon-find.png";
import IconClose from "../../assets/icons/icon-close.png";
import IconTrashWhite from "../../assets/icons/trash-white.png";
import IconTrashBlack from "../../assets/icons/trash-black.png";
import { DialogContext } from "../../contexts/dialog/DialogCtx";
import { ShopsFactory } from "src/models/ShopsFactory";
import { GroceriesFactory } from "src/models/GroceriesFactory";
import { CardDescriptionItem } from "../CardDescriptionItem";
import NumberFormat from "react-number-format";
import { BuyingStatusCtx } from "../../contexts/buyingStatus/buyingStatusCtx";
import { IBuyingStatusCtx } from "../../contexts/buyingStatus/types";
import { getCurrentProducts } from "../../utils/getCurrentProducts";
import { IAuthCtx } from "../../contexts/users/types";
import { UserCtx } from "../../contexts/users/UserCtx";

export const Search: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const classes = useStyles();
  const [onActive, setOnActive] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [popularSearch, setPopularSearch]: any = React.useState([]);
  const [data, setData]: any = React.useState([]);
  const [listRecommend, setListRecommend]: any = React.useState([]);
  const [groceryName, setGroceryName]: any = React.useState("");

  const { userSpecificData, updateCurrentUser } = useContext<IAuthCtx>(UserCtx);
  const { additionalObj, setAdditionalObj, priceCheckout, totalItem } =
    useContext<IBuyingStatusCtx>(BuyingStatusCtx);

  const { openDialogAction } = useContext(DialogContext);
  const navigate = useNavigate();
  const param = useLocation();

  const realHistorySearch = userSpecificData.historySearch || [];
  const historySearchGrocery = userSpecificData.historySearchGrocery || [];

  const onSearchAgain = () => {
    setSearchValue("");
  };

  const onClickDelAll = () => {
    if (param.pathname.includes("home")) {
      updateCurrentUser({ historySearch: [] });
    } else {
      updateCurrentUser({ historySearchGrocery: [] });
    }
  };

  const onDeleteAllHistory = () => {
    openDialogAction({
      title: "Hmm...",
      content: "Are you sure want to delete all History Search?",
      onClick: () => onClickDelAll(),
    });
  };

  const onDeleteHistorySearch = (name: string) => {
    const newHistorySearch = realHistorySearch.filter(
      (item: any) => item !== name
    );
    if (param.pathname.includes("home")) {
      updateCurrentUser({ historySearch: newHistorySearch });
    } else {
      updateCurrentUser({ historySearchGrocery: newHistorySearch });
    }
  };

  const onChangeValueSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onChangeValue = (value: string) => {
    setSearchValue(value);
  };

  const onClickProductItem = (item: any) => {
    if (!realHistorySearch.includes(searchValue)) {
      updateCurrentUser({
        historySearch: [...realHistorySearch, searchValue],
      });
    }
    if (param.pathname.includes("home"))
      navigate(`/groceries/${item?.grocery}?search=${item?.category}`);
  };

  const renderSearchNoValue = () => {
    return (
      <div className={classes.searchList}>
        <div className={classes.searchNotFound}>
          <img
            src={IconFind}
            srcSet={`${IconFind} 2x`}
            style={{ width: 172, height: 151, objectFit: "contain" }}
          />
          <p>
            Sorry, we don’t see any items that match &quot;{searchValue}&quot;
          </p>
        </div>
        <div className={classes.searchNotFoundBtn}>
          <Button variant="outlined" onClick={onSearchAgain}>
            Search again
          </Button>
          <p onClick={() => navigate(-1)}>Back to Home</p>
        </div>
      </div>
    );
  };

  const realHistory = param.pathname.includes("home")
    ? realHistorySearch
    : historySearchGrocery;
  const renderSearchHistory = () => {
    return (
      <div className={classes.historySearch}>
        <div>
          <p>History Search</p>
          <div
            className={classes.historySearchIconTrash}
            onClick={onDeleteAllHistory}
          >
            <img src={IconTrashWhite} />
            <img src={IconTrashBlack} />
          </div>
        </div>
        <div className={classes.listHistorySearch}>
          {realHistory.map((item: any, index: number) => (
            <div key={index}>
              <div className={classes.btnHistorySearch}>
                <p onClick={() => onChangeValue(item)}>{item}</p>
                <img
                  src={IconClose}
                  onClick={() => onDeleteHistorySearch(item)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  const onCheckOut = () => {
    navigate("/mycart");
    updateCurrentUser({
      historySearchGrocery: [...historySearchGrocery, searchValue],
    });
  };
  const onSelectProduct = (product: any, type: string) => {
    const result = GroceriesFactory.onChangeQuantity(product, type);
    setAdditionalObj({ ...additionalObj, [product.id]: result.quantity });
  };
  const renderSearchRecommend = () => {
    return (
      <div className={classes.recommendSearch}>
        <p>{`Products related to "${searchValue}" available in ${groceryName}`}</p>
        {param.pathname.includes("home") ? (
          <div className={classes.cardDescriptionProduct}>
            {listRecommend.map((item: any) => (
              <div key={item.id} onClick={() => onClickProductItem(item)}>
                <div className={classes.cardImage}>
                  <img src={item?.img} />
                  <div>
                    <img src={item?.logoBrand} />
                  </div>
                </div>
                <div className={classes.cardText}>
                  <p>{item.name}</p>
                  <div className="negativeMargin4">
                    <img src={IconClock} />
                    <p>{item.time} mins</p>
                  </div>
                  <div>
                    <span>{item.ranking}</span>
                    <img src={IconStar} />
                    <span>{item.nbVote > 200 ? "200+" : item.nbVote}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <CardDescriptionItem
              list={listRecommend}
              onChangeProduct={onSelectProduct}
            />
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
              <span className={classes.checkout}>Check out</span>
            </Button>
          </>
        )}
      </div>
    );
  };

  React.useEffect(() => {
    const searchPopular = SearchFactory.getPopularSearch();
    setPopularSearch(searchPopular);
    const data = ShopsFactory.getAllProductRecommend();
    setData(data);
    if (param.pathname.includes("1")) setGroceryName("Lotte Mart");
    else if (param.pathname.includes("2")) setGroceryName("VinMart");
    else if (param.pathname.includes("3")) setGroceryName("Teekiu Mart");
  }, []);

  React.useEffect(() => {
    if (param.pathname.includes("home")) {
      const listCategoryProduct = FilterSearch.filterRecommend(
        searchValue,
        data
      );
      const listHome = getCurrentProducts(listCategoryProduct, additionalObj);
      setListRecommend(listHome);
    } else if (param.pathname.includes("groceries")) {
      const listCategoryProduct = FilterSearch.filterRecommendItems(
        searchValue,
        data
      );
      const listGroceries = getCurrentProducts(
        listCategoryProduct,
        additionalObj
      );
      setListRecommend(listGroceries);
    }

    if (searchValue === "") setListRecommend([]);
  }, [searchValue]);

  return (
    <div {...props} className={clsx(classes.root, props.className)}>
      <PageLayout>
        <div className={classes.searchContent}>
          <div className={classes.btnArrowLeft} onClick={() => navigate(-1)}>
            <img
              src={IconLeftBlack}
              srcSet={`${IconLeftBlack} 2x`}
              style={{ height: 24, width: 24, objectFit: "contain" }}
            />
          </div>
          <div
            className={clsx(classes.searchInput, onActive && classes.active)}
          >
            <div>
              <img src={IconSearch} />
            </div>
            <input
              id="input-search"
              type="text"
              placeholder="What are you looking for ?"
              onClick={() => setOnActive(true)}
              onBlur={() => setOnActive(false)}
              value={searchValue}
              onChange={onChangeValueSearch}
              autoComplete="off"
            />
          </div>
        </div>

        {realHistory.length > 0 &&
          searchValue.length === 0 &&
          renderSearchHistory()}
        {searchValue.length === 0 && (
          <div className={classes.popularSearch}>
            <p>Popular Search</p>
            <div className={classes.listPopularSearch}>
              {popularSearch.map((item: any) => (
                <div key={item.id} onClick={() => onChangeValue(item?.value)}>
                  {item.value}
                </div>
              ))}
            </div>
          </div>
        )}
        {searchValue.length > 0 &&
          listRecommend.length === 0 &&
          renderSearchNoValue()}
        {listRecommend.length > 0 && renderSearchRecommend()}
      </PageLayout>
    </div>
  );
};

export default Search;
