import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles(() => ({
  root: {},
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "black",
    opacity: 0.8,
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    zIndex: 1001,
  },
  closeButton: {
    zIndex: 1100,
  },
  zoomSlide: {
    width: "100%",
    overflowY: "hidden",
    backgroundColor: "white",
    position: "fixed",
    zIndex: 2000,
    top: "50%",
    left: "50%",
    transform: "translate(-50% , -50%)",
  },
  zoomSlideWarper: {
    display: "flex",
    overflow: "hidden",
  },
  detailSlideImage: {
    display: "flex",
  },
  sliderImage: {
    display: "flex",
    width: "100%",
    height: "375px",
  },
  rbtZoom: {
    position: "fixed",
    top: "45%",
    zIndex: 2000,
    image: {
      width: "100%",
      height: "100%",
    },
  },
  zommSlideImage: {
    display: "flex",
  },
  next: {
    position: "fixed",
    top: "50%",
    right: 24,
  },
  prev: {
    position: "fixed",
    top: "50%",
    left: "24px",
  },
}));
