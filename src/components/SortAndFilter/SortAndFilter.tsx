import clsx from "clsx";
import React, { FC, HTMLAttributes, useEffect, useState } from "react";
import { Button } from "../Buttons";
import PageLayout from "../PageLayout/PageLayout";
import { useStyles } from "./SortAndFilter.style";
import IconArrowDownGrey from "../../assets/icons/rectangle_6071.png";
import { SortAndFilterFactory } from "src/models/SortAndFilterFactory";

interface ISortAndFilter {
  isOpen: boolean;
  onClose: Function;
}

export const SortAndFilter: FC<
  ISortAndFilter & HTMLAttributes<HTMLDivElement>
> = (props) => {
  const classes = useStyles();
  const { isOpen, onClose, ...otherProps } = props;
  const [sortBy, setSortBy]: any = useState([]);
  const [filter, setFilter]: any = useState([]);
  const [dietary, setDietary]: any = useState([]);
  const [allergen, setAllergen]: any = useState([]);
  const [listSelected, setListSelected]: any = useState([]);
  const [selectedSort, setSelectedSort] = useState("Featured (default)");

  useEffect(() => {
    const SORT_BY = SortAndFilterFactory.getSortBy();
    setSortBy(SORT_BY);
    const FILTER = SortAndFilterFactory.getFilter();
    setFilter(FILTER);
    const DIETARY = SortAndFilterFactory.getDietaryNeeds();
    setDietary(DIETARY);
    const ALLERGEN_FREE = SortAndFilterFactory.getAllergenFree();
    setAllergen(ALLERGEN_FREE);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      console.log("aaaaa1aaa");

      const time = setTimeout(() => {
        console.log("bbbbb");
        const element = document.getElementById("sortAndFilter");
        if (element) element.style.height = "0vh";
      }, 700);
      console.log("aaaaaaaa");
      return () => {
        clearTimeout(time);
      };
    }
  }, [isOpen]);

  const onSelected = (value: string) => {
    const result = SortAndFilterFactory.findIndexListSelect(
      listSelected,
      value
    );
    if (result === -1) {
      setListSelected([...listSelected, value]);
    } else {
      const newList = SortAndFilterFactory.filterListSelect(
        listSelected,
        value
      );
      setListSelected(newList);
    }
  };

  const onClickReset = () => {
    setListSelected([]);
    setSelectedSort("Featured (default)");
  };

  const renderSortOrFilterCheckbox = (
    title: string,
    isRequired: boolean,
    list: any
  ) => {
    return (
      <>
        <div className={classes.sortOfFilter}>
          <div className={classes.sortOfFilterHeader}>
            <p>{title}</p>
            {isRequired && <div>Required</div>}
          </div>
        </div>
        <div className={classes.listInput}>
          {list.map((item: any) => (
            <label key={item?.id}>
              <input
                type="checkbox"
                name={title}
                value={item?.value}
                onChange={() => onSelected(item?.value)}
                checked={listSelected.some((i: any) => i === item.value)}
              />
              <span>{item.value}</span>
            </label>
          ))}
        </div>
      </>
    );
  };
  const renderSortOrFilterRadio = (
    title: string,
    isRequired: boolean,
    list: any
  ) => {
    return (
      <>
        <div className={classes.sortOfFilter}>
          <div className={classes.sortOfFilterHeader}>
            <p>{title}</p>
            {isRequired && <div>Required</div>}
          </div>
        </div>
        <div className={classes.listInput}>
          {list.map((item: any) => (
            <label key={item?.id}>
              <input
                type="radio"
                name={title}
                value={item?.value}
                onChange={(e) => setSelectedSort(e.currentTarget.value)}
                checked={selectedSort === item?.value}
              />
              <span>{item.value}</span>
            </label>
          ))}
        </div>
      </>
    );
  };

  console.log("sort: ", isOpen);

  return (
    <div
      // open={isOpen}
      // onClose={() => onClose()}
      {...otherProps}
      className={clsx(classes.root, props.className)}
      style={{
        height: `${isOpen && "100vh"}`,
        overflow: `${isOpen ? "scroll" : "hidden"}`,
      }}
      id="sortAndFilter"
    >
      <div
        style={{
          height: `${isOpen ? "112px" : "0px"}`,
        }}
        onClick={() => onClose()}
      ></div>
      <div
        className={clsx(
          classes.content,
          isOpen ? classes.slideUp : classes.slideDown
        )}
      >
        <PageLayout>
          <div className={classes.btnArrowDown} onClick={() => onClose()}>
            <img src={IconArrowDownGrey} alt="arrow-down-grey" />
          </div>
          <div className={classes.headerContent}>
            <p onClick={() => onClose()}>Cancel</p>
            <p>Sort & Filter</p>
            <p onClick={onClickReset}>Reset</p>
          </div>
          {renderSortOrFilterRadio("Sort by", true, sortBy)}
          {renderSortOrFilterCheckbox("Filter", true, filter)}
          {renderSortOrFilterCheckbox("Dietary Needs", true, dietary)}
          {renderSortOrFilterCheckbox("Allergen Free", true, allergen)}

          <div className={classes.btnSave}>
            <Button variant="contained" onClick={() => onClose}>
              Save
            </Button>
          </div>
        </PageLayout>
      </div>
    </div>
  );
};
