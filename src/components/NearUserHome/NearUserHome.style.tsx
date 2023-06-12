import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "src/themes/theme";
import HomeStore from "../../assets/images/home/store.png";
export const useStyles = createUseStyles({
  root: {
    width: "100%",
    marginBottom: 16,
  },
  titleNearUser: {
    marginTop: 24,
  },
  nearContent: {
    marginTop: 16,
    backgroundImage: `url(${HomeStore})`,
    backgroundRepeat: "round",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
  },
  nearContentContext: {
    alignItems: "center",
    justifyContent: "space-evenly",
    display: "flex",
    paddingTop: 48,
    "&>div": {
      justifyContent: "space-around",
      width: "30%",
      paddingBottom: 16,
      "&>img": {
        width: "91px",
        height: "91px",
        objectFit: "cover",
      },
    },
  },
  cardText: {
    color: DEFAULT_THEME.theme.palette.text.cardText,
    fontSize: 14,
    alignItems: "center",
    "&>p": {
      marginTop: 8,
      fontWeight: 600,
      color: DEFAULT_THEME.theme.palette.text.titleText,
      lineHeight: "24px",
    },
    "&>div": {
      display: "flex",
      lineHeight: "24px",
      alignItems: "center",
    },
    "&>div>img": {
      padding: "4px 4px 4px 0",
    },
  },
  iconClock: {
    fill: "red",
  },
  img: {
    height: "91px",
    width: "91px",
    borderRadius: "10px",
  },
  title: {
    marginTop: "10px",
    width: "100%",
    height: "24px",
    borderRadius: "10px",
  },
  time: {
    width: "100%",
    height: "27px",
    margin: "3px 0 3px 0",
    borderRadius: "10px",
  },
  star: {
    width: "100%",
    height: "24px",
    borderRadius: "10px",
  },
  imgStar: {
    marginLeft: 4,
  },
});
