export interface IPermissionCtx {
  isPermit: boolean;
  setIsPermit: (state: boolean) => void;
  address: string;
  setAddress: (state: string) => void;
  renderAddress: string;
  setRenderAddress: (state: string) => void;
  gps: number[];
  setGps: (state: number[]) => void;
  location: { lat: number; lng: number } | null;
  setLocation: Function;
  addressFromLS: string;
}
