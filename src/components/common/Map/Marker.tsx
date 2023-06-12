import { CSSProperties, FC, HTMLAttributes } from "react";
interface IMarker {
  className: string;
  images: string;
  lat: number | null;
  lng: number | null;
  style?: CSSProperties | undefined;
}

const Marker: FC<IMarker & HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div className={props.className}>
      <img src={props.images} style={props.style || undefined} />
    </div>
  );
};

export default Marker;
