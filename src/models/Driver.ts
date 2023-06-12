export interface IDriver {
  id: any;
  avatar: any;
  name: string;
  carMaker: string;
  star: any;
  starNumber: number;
  code: string;
}

export class Driver {
  id = 0;
  avatar = null;
  name = "";
  carMaker = "";
  star = null;
  starNumber = 0;
  code = "";

  constructor(driver: IDriver) {
    this.id = driver.id;
    this.avatar = driver.avatar;
    this.name = driver.name;
    this.carMaker = driver.carMaker;
    this.star = driver.star;
    this.starNumber = driver.starNumber;
    this.code = driver.code;
  }
}
