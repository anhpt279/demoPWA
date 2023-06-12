import { IData } from "./types";
import { dialogConstants } from "./constant";
export const openDialog = (dispatch: Function, data: IData) => {
  dispatch({
    type: dialogConstants.OPEN_DIALOG,
    data,
  });
};

export const openAlterButtonDialog = (dispatch: Function, data: IData) => {
  dispatch({
    type: dialogConstants.OPEN_ALTER_DIALOG,
    data,
  });
};

export const closeDialog = (dispatch: Function) => {
  dispatch({
    type: dialogConstants.CLOSE_DIALOG,
  });
};
