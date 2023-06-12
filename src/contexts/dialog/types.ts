export interface IData {
  title: string;
  content: string;
  buttonText?: string;
  onClick: Function | null;
}
export interface IDialog {
  bool: boolean;
  data: IData;
}

export interface IDialogCtx {
  dialog: IDialog;
  openDialogAction: (data: IData) => void;
  openAlterButtonDialogAction: (data: IData) => void;
  closeDialogAction: () => void;
}
