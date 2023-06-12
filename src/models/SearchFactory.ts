import { map } from "lodash-es";
import { Search, ISearch } from "./Search";

const POPULAR_SEARCH = [
  {
    id: 1,
    value: "Radish",
  },
  {
    id: 2,
    value: "Banana",
  },
  {
    id: 3,
    value: "Lettuce",
  },
  {
    id: 4,
    value: "Pork side",
  },
  {
    id: 5,
    value: "Cheesecake",
  },
  {
    id: 6,
    value: "Chicken breast",
  },
  {
    id: 7,
    value: "Biscuit",
  },
  {
    id: 8,
    value: "Orange",
  },
  {
    id: 9,
    value: "Mango",
  },
  {
    id: 10,
    value: "Toast",
  },
  {
    id: 11,
    value: "Ham",
  },
  {
    id: 12,
    value: "Pear",
  },
];

export class SearchFactory {
  static getPopularSearch() {
    return map(POPULAR_SEARCH, (search: ISearch) => new Search(search));
  }

  static getHistorySearch(listHistorySearch: any) {
    return map(listHistorySearch, (search: ISearch) => new Search(search));
  }
}
