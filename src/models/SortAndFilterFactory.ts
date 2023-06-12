export class SortAndFilterFactory {
  static getSortBy() {
    return [
      {
        id: 1,
        value: "Featured (default)",
        checked: true,
      },
      {
        id: 2,
        value: "Best Selling",
        checked: false,
      },
      {
        id: 3,
        value: "Price: Low to High",
        checked: false,
      },
      {
        id: 4,
        value: "Price: High to Low",
        checked: false,
      },
    ];
  }

  static getFilter() {
    return [
      {
        id: 1,
        value: "New Arrivals",
        checked: false,
      },
      {
        id: 2,
        value: "Limited",
        checked: false,
      },
      {
        id: 3,
        value: "Discount",
        checked: false,
      },
    ];
  }

  static getDietaryNeeds() {
    return [
      {
        id: 1,
        value: "Gluten free and coeliac",
        checked: false,
      },
      {
        id: 2,
        value: "Dairy free and lactose free",
        checked: false,
      },
      {
        id: 3,
        value: "Vegetarian",
        checked: false,
      },
      {
        id: 4,
        value: "Vegan",
        checked: false,
      },
      {
        id: 5,
        value: "Paleo",
        checked: false,
      },
      {
        id: 6,
        value: "FODMAP",
        checked: false,
      },
      {
        id: 7,
        value: "Tree nut and peanut allergies",
        checked: false,
      },
      {
        id: 8,
        value: "Fish and shellfish allergies",
        checked: false,
      },
    ];
  }

  static getAllergenFree() {
    return [
      {
        id: 1,
        value: "Guten-free",
        checked: false,
      },
      {
        id: 2,
        value: "Sulfites-free",
        checked: false,
      },
      {
        id: 3,
        value: "Potato-free",
        checked: false,
      },
      {
        id: 4,
        value: "Casein-free",
        checked: false,
      },
      {
        id: 5,
        value: "GMOs",
        checked: false,
      },
      {
        id: 6,
        value: "Fish-free",
        checked: false,
      },
      {
        id: 7,
        value: "Egg-free",
        checked: false,
      },
      {
        id: 8,
        value: "Preservative-free",
        checked: false,
      },
      {
        id: 9,
        value: "Tree nuts-free",
        checked: false,
      },
      {
        id: 10,
        value: "Penuts-free",
        checked: false,
      },
      {
        id: 11,
        value: "Milk-free",
        checked: false,
      },
    ];
  }

  static findIndexListSelect(listSelected: any, value: string) {
    return listSelected.findIndex((item: any) => item === value);
  }

  static filterListSelect(listSelected: any, value: string) {
    return listSelected.filter((item: any) => item !== value);
  }
}
