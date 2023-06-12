import { useStyles } from "./ConfirmDelete.style";

interface IConfirmDelete {
  phone: string;
  setPhone: (state: string) => void;
}
const ConfirmDelete = ({ phone, setPhone }: IConfirmDelete) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.warningText}>
        By deleting your account, the following categories of information (among
        other information) will be permanently deleted from GoMarket per our
        Privacy Policy:
        <ul>
          <li>• Profile info and photos</li>
          <li>• Wishlist</li>
          <li>• Activity history</li>
        </ul>
      </div>
      <div className={classes.verifyText}>
        Please verify your account to proceed
      </div>
      <input
        placeholder="Type your phone number here"
        className={classes.customInput}
        type="number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
    </>
  );
};

export default ConfirmDelete;
