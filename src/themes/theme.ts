const DEFAULT_THEME = {
  theme: {
    spacing: [0, 4, 6, 7, 8, 8.5, 9, 12, 15, 32, 64],
    palette: {
      common: {
        black: "#000",
        white: "#fff",
      },
      primary: {
        light: "#45A677",
        main: "#489F85",
        dark: "#33776b",
        contrastText: "#fff",
      },
      secondary: {
        lighter: "#DCDCDD",
        light: "#C5C5C7",
        main: "#8A8A8E",
        dark: "#3C3C43",
        darker: "#606060",
        contrastText: "#fff",
      },
      error: {
        light: "#ef5350",
        main: "#EF4444",
      },
      warning: {
        light: "#ff9800",
        main: "#ED6C02",
        dark: "#e65100",
        contrastText: "#fff",
      },
      info: {
        light: "#03a9f4",
        main: "#0288d1",
        dark: "#01579b",
        contrastText: "#fff",
      },
      success: {
        light: "#4caf50",
        main: "#237d32",
        dark: "#1b5e20",
        contrastText: "#fff",
      },
      text: {
        default: "#FFFFFF",
        primary: "#00AC77",
        secondary: "#9CA3AF",
        disabled: "#D1D5DB",
        dark: "#111827",
        helpText: "#EF4444",
        cardText: "#6B7280",
        titleText: "#374151",
        link: "#00B342",
        title: "#374151",
        lightDark: "#E5E5E5",
        radioText: "#010F07",
      },

      iconStar: {
        default: "#FBBF24",
        disabled: "#D1D5DB",
        link: "#00B342",
        title: "#374151",
      },

      background: {
        default: "#fff",
        onBoarding: "#00AC77",
        review: "#F3F4F6",
        bar: "#D1D5DB",
        input: "#f8f8f8",
        process: "#FEF2F2",
        warning: "#F59E0B",
        green: "#00B342",
        hover: "#E5F5EE",
      },
      boxShadow: {
        default: "0px -4px 4px rgb(0 0 0 / 15%)",
        zoneItem: "0px 0px 4px 4px #8a8a8e73",
      },
      linearGradient: {
        default: "",
        battleItem: "linear-gradient(99.04deg, #3C3B3B 3.26%, #181616 99.95%)",
        challengeItemLocked:
          "linear-gradient(115.51deg, #f1b8b5 25.71%, #f5a198 80.48%)",
        buttonPlay:
          "linear-gradient(103.26deg, #f5a299 23.97%, #f4a59d 61.82%, #f4a59d 91.81%)",
      },
      grey: {
        lighter: "#ebebf599",
        light: "#EEEEEF",
        main: "#C4C4C4",
        dark: "#696969",
      },
    },
    fontFamily: " sans-serif",

    button: {
      primary: {
        background: "linear-gradient(324.29deg, #489F85 10.69%, #63CBAC 95.4%)",
      },
      secondary: {
        background: "linear-gradient(324.29deg, #F0AD00 10.69%, #FFCF53 95.4%)",
      },
      contained: {
        background: "#00AC77",
        color: "#FFFFFF",
      },
      outlined: {
        border: "1px solid #D1D5DB",
        color: "#111827",
      },
      disabled: {
        background: "#F9FAFB",
        color: "#D1D5DB !important",
      },
    },
    input: {
      primary: {
        color: "#111827",
      },
    },
    card: {
      backgroundColor: "#00AC77",
      boxShadow: "0 1px 2px 0 rgb(145 158 171 / 24%)",
    },
    dialog: {
      backgroundColor: {
        primary: "rgba(0, 0, 0, 0.7)",
      },
      boxShadow: {
        primary:
          "0px 11px 15px -7px rgb(0 0 0 / 20%), 0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%)",
      },
      background: {
        primary: "#fff",
      },
    },
    dotSlide: {
      backgroundColor: "#E5E7EB",
    },
    hrLine: {
      color: "#E5E7EB",
    },
  },
};

export default DEFAULT_THEME;
