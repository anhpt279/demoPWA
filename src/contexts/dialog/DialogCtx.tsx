import React, { createContext, useReducer } from "react";
import { IDialog, IData, IDialogCtx } from "./types";
import { dialogReducer } from "./dialogReducer";
import { openDialog, openAlterButtonDialog, closeDialog } from "./dialogAction";
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const DialogContext = createContext<IDialogCtx>(null!);

const init: IDialog = {
  bool: false,
  data: {
    title: "",
    content: "",
    buttonText: "",
    onClick: null,
  },
};

const DialogProvider = ({ children }: { children: React.ReactNode }) => {
  const [dialog, dialogDispatch] = useReducer(dialogReducer, init);
  const openDialogAction = (data: IData) => {
    openDialog(dialogDispatch, data);
  };

  const openAlterButtonDialogAction = (data: IData) => {
    openAlterButtonDialog(dialogDispatch, data);
  };
  const closeDialogAction = () => {
    closeDialog(dialogDispatch);
  };
  const data: IDialogCtx = {
    dialog,
    openDialogAction,
    openAlterButtonDialogAction,
    closeDialogAction,
  };

  return (
    <DialogContext.Provider value={data}>{children}</DialogContext.Provider>
  );
};

export default DialogProvider;
