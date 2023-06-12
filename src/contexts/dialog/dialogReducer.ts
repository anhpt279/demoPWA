import { IData, IDialog } from "./types";
import { dialogConstants } from "./constant";

export const dialogReducer = (
  state: IDialog,
  action: { type: string; data: IData }
) => {
  const { data } = action;
  switch (action.type) {
    case dialogConstants.CLOSE_DIALOG:
      return {
        bool: false,
        data: {
          title: "",
          content: "",
          buttonText: "",
          onClick: null,
        },
      };
    case dialogConstants.OPEN_DIALOG:
      return {
        bool: true,
        data: {
          ...data,
          buttonText: "",
        },
      };
    case dialogConstants.OPEN_ALTER_DIALOG:
      return {
        bool: true,
        data,
      };
    default:
      return state;
  }
};
