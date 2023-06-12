import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "src/themes/theme";

export const useStyles = createUseStyles({
  root: {
    marginTop: 16,
    position: "relative",
  },
  searchContent: {
    display: "flex",
    alignItems: "center",
    marginBottom: 32,
  },
  btnArrowLeft: {
    display: "flex",
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  searchInput: {
    width: "100%",
    display: "flex",
    marginLeft: 32,
    borderBottom: `1px solid ${DEFAULT_THEME.theme.palette.text.secondary}`,
    padding: 8,
    "&>div": {
      marginRight: 8,
    },
    "&>input": {
      width: "100%",
      outline: "none",
      caretColor: DEFAULT_THEME.theme.palette.text.primary,
      "&::-webkit-autofill": {
        transition: "background-color",
      },
    },
  },
  popularSearch: {
    "&>p": {
      fontSize: 14,
      fontWeight: 600,
      color: DEFAULT_THEME.theme.palette.text.dark,
      lineHeight: "24px",
    },
  },
  listPopularSearch: {
    width: "100%",
    height: "max-content",
    color: "#374151",
    fontSize: 12,
    lineHeight: "16px",
    fontWeight: 400,
    marginTop: 16,
    "&>div": {
      display: "inline-block",
      width: "fit-content",
      border: `1px solid ${DEFAULT_THEME.theme.palette.text.disabled}`,
      borderRadius: 6,
      padding: "4px 10px",
      marginRight: 8,
      marginBottom: 16,
    },
  },
  active: {
    borderBottom: `1px solid ${DEFAULT_THEME.theme.palette.text.primary} !important`,
  },
  searchList: {
    width: "87%",
    position: "absolute",
    top: 64,
    "&>p": {
      color: DEFAULT_THEME.theme.palette.text.secondary,
      fontSize: 12,
      fontWeight: 500,
      lineHeight: "16px",
    },
  },
  searchItem: {
    borderBottom: `1px solid ${DEFAULT_THEME.theme.palette.text.disabled}`,
    padding: "12px 0",
    marginBottom: 24,
    "&:hover": {
      backgroundColor: "#E5F5EE",
    },
    "&>div": {
      display: "flex",
      alignItems: "center",
      "&>img": {
        marginRight: 8,
        width: "fit-content",
        height: "fit-content",
      },
    },
  },
  historySearch: {
    "&>div:first-child": {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      height: 24,
      "&>p": {
        fontSize: 14,
        fontWeight: 600,
        color: DEFAULT_THEME.theme.palette.text.dark,
        lineHeight: "24px",
      },
    },
  },
  historySearchIconTrash: {
    "&>img:nth-child(2)": { display: "none" },
    "&:hover": {
      "&>img:nth-child(2)": { display: "block" },
      "&>img:first-child": { display: "none" },
    },
    "&:focus": {
      "&>img:nth-child(2)": { display: "block" },
      "&>img:first-child": { display: "none" },
    },
  },
  listHistorySearch: {
    width: "100%",
    height: "max-content",
    color: "#374151",
    marginTop: 16,
    "&>div": {
      display: "inline-block",
      width: "fit-content",
      border: `1px solid ${DEFAULT_THEME.theme.palette.text.disabled}`,
      borderRadius: 6,
      marginRight: 8,
      marginBottom: 16,
    },
  },
  btnHistorySearch: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#374151",
    fontSize: 12,
    lineHeight: "16px",
    fontWeight: 400,
    "&>p": {
      padding: "4px 0px 4px 10px",
    },
    "&>img": {
      marginRight: 4,
      width: 16,
      height: 16,
    },
  },
  searchNotFound: {
    display: "grid",
    lineHeight: "24px",
    // fontWeight: 700,
    // fontSize: 18,
    textAlign: "center",
    marginTop: 32,
    "&>img": {
      margin: "0 auto",
      marginBottom: 42,
    },
    "&>p": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      wordBreak: "break-word",
      marginTop: 8,
      marginBottom: 48,
      fontSize: 18,
      fontWeight: 700,
      // lineHeight: 24,
      color: DEFAULT_THEME.theme.palette.text.cardText,
    },
  },
  searchNotFoundBtn: {
    "&>p": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: DEFAULT_THEME.theme.palette.text.primary,
      marginTop: 16,
    },
  },
  cardDescriptionProduct: {
    width: "100%",
    height: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridAutoRows: "minmax(280px, auto)",
    gridGap: 8,
    marginBottom: 40,
  },
  cardImage: {
    borderRadius: 8,
    boxShadow: "0px 4px 14px -3px rgba(16, 24, 40, 0.06)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "&>img": {
      width: "100%",
      height: "auto",
      padding: 8,
    },
    "&>div": {
      alignItems: "center",
      backgroundColor: DEFAULT_THEME.theme.palette.background.onBoarding,
      borderRadius: " 0 0 8px 8px",
      width: "100%",
      "&>img": {
        display: "flex",
        margin: "0 auto",
      },
    },
  },
  cardText: {
    color: DEFAULT_THEME.theme.palette.text.cardText,
    fontSize: 14,
    lineHeight: "24px",
    alignItems: "center",
    "&>p": {
      marginTop: 8,
      fontWeight: 600,
      color: DEFAULT_THEME.theme.palette.text.titleText,
    },
    "&>div": {
      display: "flex",
      lineHeight: "24px",
      alignItems: "center",
    },
    "&>div>img": {
      padding: 4,
    },
  },
  recommendSearch: {
    "&>p": {
      color: DEFAULT_THEME.theme.palette.text.secondary,
      fontSize: 12,
      lineHeight: "16px",
      fontWeight: 400,
      marginBottom: 24,
    },
  },
  backgroundGreen: {
    backgroundColor: DEFAULT_THEME.theme.palette.background.onBoarding,
  },
  button: {
    width: "100%",
    marginBottom: 16,
    position: "relative",
    marginTop: 16,
  },
  btnCheckout: {
    height: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 14px",
    "&>span:first-child": {
      fontSize: 14,
      fontWeight: 400,
      textTransform: "lowercase",
    },
    "&>span:last-child": {
      fontSize: 14,
      fontWeight: 400,
      textTransform: "lowercase",
    },
  },
  checkout: {
    position: "absolute",
    top: 10,
    transform: "translate(-50%)",
  },
});
