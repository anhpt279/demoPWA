export interface ISearch {
  id: string;
  value: string;
}

export class Search {
  id = "";
  value = "";

  constructor(search: ISearch) {
    this.id = search.id;
    this.value = search.value;
  }
}
