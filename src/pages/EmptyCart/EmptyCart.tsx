import { EmptyPage } from "../../components/EmptyPage";
import emptyCart from "../../assets/images/checkout/empty-cart.png";
import { FC, HTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";

export const EmptyCart: FC<HTMLAttributes<HTMLDivElement>> = () => {
  const navigate = useNavigate();
  return (
    <EmptyPage
      image={emptyCart}
      emptyTitle="I Am Empty :("
      emptyDesc="Looks like you haven't added
  anything to your cart yet"
      emptyButton="Go ShopPing"
      onClickButton={() => navigate("/groceries")}
    />
  );
};
export default EmptyCart;
