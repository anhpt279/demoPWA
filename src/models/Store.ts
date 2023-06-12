interface IStore {
  id: string;
  name: string;
  address: string;
}
export class Store {
  id = "";
  name = "";
  address = "";
  constructor(store: IStore) {
    this.id = store.id;
    this.name = store.name;
    this.address = store.address;
  }
}
