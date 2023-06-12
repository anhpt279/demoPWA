import { Dropdown } from "../Dropdown";
import { useStyles } from "./ShippingAddress.style";
import { FC, HTMLAttributes, useState } from "react";
import { DISTRICT, SUB_DISTRICT } from "../../models/Province";
import clsx from "clsx";

export const ShippingAddress: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const classes = useStyles();
  const [selectedDistrict, setSelectedDistrict] = useState<string>("Choose...");
  const [selectedSubDistrict, setSelectedSubDistrict] =
    useState<string>("Choose...");
  const [showBill, setShowBill] = useState(false);

  return (
    <div
      {...props}
      className={clsx(classes.shippingAddressBill, props.className)}
    >
      <p>Billing Address</p>
      {!showBill && (
        <div className={classes.shippingInput}>
          <div className={classes.nameInput}>
            <div className={classes.firstName}>
              <label htmlFor="fname">First Name (*)</label>
              <input
                autoComplete="off"
                type="text"
                id="fname"
                placeholder="First name here"
                required
              />
            </div>
            <div className={classes.lastName}>
              <label htmlFor="lname"> Last Name (*)</label>
              <input
                autoComplete="off"
                type="text"
                id="fname"
                placeholder="Last name here"
                required
              />
            </div>
          </div>
          <div className={classes.emailInput}>
            <label htmlFor="email">Email Address (*)</label>
            <input
              autoComplete="off"
              type="email"
              id="email"
              placeholder="Type your email here"
              required
            />
          </div>
          <div className={classes.addressInput}>
            <label htmlFor="address">Address (*)</label>
            <input
              autoComplete="off"
              type="text"
              id="address"
              placeholder="Type your address here"
              required
            />
          </div>
          <div className={classes.selectInput}>
            <div className={classes.district}>
              <label htmlFor="district">State/ Province (*)</label>
              <Dropdown
                id="district"
                selected={selectedDistrict}
                setSelected={setSelectedDistrict}
                items={DISTRICT}
              />
            </div>
            <div className={classes.subDistrict}>
              <label htmlFor="sub">Sub-district (*)</label>
              <Dropdown
                id="sub"
                selected={selectedSubDistrict}
                setSelected={setSelectedSubDistrict}
                items={SUB_DISTRICT}
              />
            </div>
          </div>
          <div className={classes.zipPhone}>
            <div className={classes.zipInput}>
              <label htmlFor="zip">Zip</label>
              <input
                autoComplete="off"
                type="text"
                id="zip"
                placeholder="Type here"
              />
            </div>
            <div className={classes.phoneInput}>
              <label htmlFor="phone">Phone Number (*)</label>
              <input
                autoComplete="off"
                type="number"
                id="phone"
                placeholder="Type here"
                required
              />
            </div>
          </div>
        </div>
      )}
      <div className={classes.checkBill}>
        <input
          type="checkbox"
          id="bill"
          onClick={() => setShowBill(!showBill)}
        />
        <label htmlFor="bill">Same as billing address</label>
      </div>
    </div>
  );
};
