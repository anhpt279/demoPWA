import clsx from "clsx";
import { FC, HTMLAttributes, useState } from "react";
import { useStyles } from "./Dropdown.style";

interface IDropdown {
  selected: any;
  setSelected: any;
  items: any;
}

export const Dropdown: FC<IDropdown & HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const { selected, setSelected, items, ...otherProps } = props;
  const classes = useStyles();
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div {...otherProps} className={clsx(props.className, classes.root)}>
      <div
        className={classes.dropdownBtn}
        onClick={() => setIsActive(!isActive)}
      >
        <p>{selected}</p>
        <i className="fa-solid fa-chevron-down"></i>
      </div>
      {isActive && (
        <div className={classes.dropdownContent}>
          {items.map((item: any) => (
            <div
              onClick={() => {
                setSelected(item.name);
                setIsActive(false);
              }}
              className={classes.dropdownItem}
              key={item.id}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
