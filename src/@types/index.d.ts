declare module "lodash";
declare module "*.svg" {
  const content: any;
  export default content;
}
declare module "*.jpg";
declare module "*.png";
declare module "*.SVG";
declare module "*.PNG";
declare module "*.pdf";

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;

export {};
