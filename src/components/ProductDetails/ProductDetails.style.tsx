import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "../../themes/theme";

export const useStyles = createUseStyles(() => ({
  root: {
    width: "100%",
    height: "auto",
    scrollBehavior: "smooth !important",
  },
  headerDetails: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    paddingTop: "16px",
  },
  titleHeaderDetails: {
    width: "100%",
    textAlign: "center",
    fontWeight: 700,
    fontSize: 18,
    color: DEFAULT_THEME.theme.palette.text.title,
  },
  detailsSlide: {
    width: "100%",
    margin: "auto",
    overflowY: "hidden",
  },

  contentSlider: {
    width: "100%",
    textAlign: "center",
    fontSize: "12px",
    fontWeight: "16px",
    color: "#9CA3AF",
    marginTop: "21px",
  },

  ProductDescription: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "16px",
    alignItems: "center",
    "& p": {
      fontSize: "14px",
      lineHeight: "24px",
      fontWeight: "600",
      color: "#9CA3AF",
    },
  },
  productcontainericon: {
    display: "flex",
    columnGap: "8px",

    "& img": {
      marginLeft: "10px",
    },
  },
  condition: {
    display: "flex",
    marginTop: "8px",
    alignItems: "center",
    columnGap: "8px",
  },
  status: {
    padding: "2px 8px",
    borderRadius: "4px",
    backgroundColor: "#00B342",
    color: "white",
    fontSize: "12px",
    lineHeight: "16px",
    textAlign: "center",
  },
  priBefore: {
    fontSize: "18px",
    lineHeight: "26px",
    color: "red",
    fontWeight: "700",
  },
  priNow: {
    fontSize: "14px",
    lineHeight: "22px",
    color: "#9CA3AF",
    textDecoration: "line-through",
  },
  contentProduct: {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "600",
  },
  rvCmt: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "8px",
    marginBottom: "10px",
  },
  rating: {
    display: "flex",
    flexDirection: "row",
    columnGap: "4px",
    alignItems: "center",
    "& p": {
      fontSize: "14px",
      lineHeight: "24px",
      color: "#6B7280",
      fontWeight: "400",
    },
  },
  rv: {
    display: "flex",
    flexDirection: "row",
    columnGap: "4px",
    alignItems: "center",
    "& span": {
      fontSize: "14px",
      lineHeight: "24px",
      color: "#9CA3AF",
      fontWeight: "400",
      textDecoration: "underline",
    },
  },

  hrproduct: {
    width: "100%",
    height: "8px",
    backgroundColor: "#E5E5E5",
  },
  ticket: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 0",
  },
  contentTiket: {
    display: "flex",
    alignItems: "center",
    columnGap: "8px",
  },
  styleProduct: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "16px",
    alignItems: "center",
    "& p": {
      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: "700",
      color: "#374151",
    },
  },
  required: {
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: "400",
    padding: "4px 10px",
    backgroundColor: "#96D4BA",
    width: "fit-content",
    borderRadius: "4px",
    alignItems: "center",
    color: "#FFFFFF",
  },
  checkmark: {},
  amountProduct: {
    display: "flex",
    alignItems: "center",
    columnGap: "16px",
    marginBottom: "8px",
    paddingBottom: "16px",
    "& input": {
      width: "24px",
      height: "24px",
    },
    "& label": {
      display: "flex",
      alignItems: "center",
    },
  },
  radioInput: {
    marginTop: "8px",
    "& input": {
      accentColor: "#199d74",
      opacity: "0.7",
    },
  },
  details: {
    marginTop: "16px",
    paddingBottom: "16px",
  },
  headerProductDetails: {
    fontSize: "18px",
    lineHeight: "26px",
    fontWeight: "700",
  },
  contentProductDetails: {
    fontSize: "14px",
    lineHeight: "24px",
    fontWeight: "400",
    color: "#374151",
    marginTop: "16px",
  },
  feedbackItem: {
    display: "flex",
    columnGap: "10px",
    marginTop: "24px",
  },
  imguser: {
    height: "100%",
  },
  headerFeedback: {
    fontSize: "18px",
    lineHeight: "24px",
    fontWeight: "700",
    color: "#374151",
    marginTop: "16px",
  },
  nameUser: {
    marginTop: "8px",
    fontSize: "14px",
    lineHeight: "24px",
    fontWeight: "600",
    color: "#374151",
  },
  feedback: {
    fontSize: "14px",
    lineHeight: "24px",
    fontWeight: "400",
    color: "#6B7280",
    width: "10px",
    whiteSpace: "nowrap",
  },
  timeFeedback: {
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: "400",
    color: "#6B7280",
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    columnGap: "8px",
    marginTop: "16px",
    paddingBottom: "96px",
    "& p": {
      fontSize: "14px",
      lineHeight: "24px",
      fontWeight: "600",
      color: "#374151",
      textAlign: "center",
    },
  },

  "@keyframes up": {
    "0%": {
      opacity: 0,
      transform: "translateY(200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  btnUp: {
    display: "flex",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#00AC77",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    bottom: "120px",
    animation: "$up .5s ease",

    "& img": {
      height: "10px",
    },
  },
  containedCart: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "fixed",
    bottom: "40px",
    width: "100%",
    "& button": {
      borderRadius: "8px",
      backgroundColor: "#00AC77",
      transform: "translateX(-48px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "calc((100% - 40px)*5/6)",
      height: "44px",
      "& p": {
        fontSize: "16px",
        lineHeight: "26px",
        color: "white",
        margin: "auto",
      },
      "& image": {
        padding: "0 10px",
      },
    },
  },
  cart: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#00AC77",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  containedBtnUp: {
    display: "flex",
    justifyContent: "flex-end",
  },
  ulinfodetails: {
    marginTop: "8px",
    paddingBottom: "16px",
    "& li:nth-child(1)": {
      backgroundColor: "#F3F4F6",
    },
    "& li:nth-child(3)": {
      backgroundColor: "#F3F4F6",
    },
    "& li:nth-child(5)": {
      backgroundColor: "#F3F4F6",
    },
    "& li:nth-child(7)": {
      backgroundColor: "#F3F4F6",
    },
  },
  liinfodetails: {
    display: "flex",
    "& p": {
      width: "50%",
      padding: "8px 0",
      fontSize: "14px",
      lineHeight: "16px",
      fontWeight: "400",
      color: "#374151",
    },
  },
  pNewtral: {
    backgroundColor: "#F3F4F6",
  },
  containerDescriptionTitle: {
    marginTop: "16px",
  },
  amountCart: {
    position: "fixed",
    zIndex: "1000",
    bottom: "63px",
    left: "50px",
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    backgroundColor: "red",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "12px",
    lineHeight: "16px",
  },
  btnCart: {
    display: "flex",
  },
  imgdata: {
    margin: "20px 15px",
    width: "calc(100% - 30px)",
    overflow: "hidden",
    maxWidth: "100%",
    height: "323px",
    borderRadius: "10px",
  },
  nameData: {
    height: "20px",
    width: "calc(100% - 20%)",
    borderRadius: "5px",
  },
  newData: {
    height: "18px",
    width: "calc(100% - 85%)",
    borderRadius: "5px",
  },
  priceData: {
    height: "18px",
    width: "calc(100% - 75%)",
    borderRadius: "5px",
  },
  nameDetailData: {
    height: "18px",
    width: "calc(100% - 10%)",
    borderRadius: "5px",
    margin: "5px 0",
  },
  productSoldData: {
    height: "18px",
    width: "calc(100% - 70%)",
    borderRadius: "5px",
  },
  valueData: {
    height: "18px",
    width: "126px",
    borderRadius: "5px",
  },
}));
