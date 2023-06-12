export class Manufacturer {
  private id: number;
  private name: string;
  private logo: string;

  constructor(id: number, name: string, logo: string) {
    this.id = id;
    this.name = name;
    this.logo = logo;
  }

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getLogo(): string {
    return this.logo;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setLogo(logo: string): void {
    this.logo = logo;
  }
}
