export class FilterSearch {
  static filterSearchLocation = (query: string, list: any) => {
    return list.filter((item: any) =>
      item.detailLocation
        .toLocaleLowerCase()
        .includes(query.toLocaleLowerCase())
    );
  };

  static filterRecommendItems = (query: string, list: any) => {
    return list.filter((item: any) => {
      return item.category
        .toLocaleLowerCase()
        .includes(query.toLocaleLowerCase());
    });
  };

  static filterSearchGroceries = (query: string, list: any) => {
    return list.filter((item: any) => {
      return item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase());
    });
  };

  static filterRecommend = (query: string, list: any) => {
    return list.filter((item: any) =>
      item?.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );
  };
}
