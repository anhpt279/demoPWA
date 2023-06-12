export const totalPrice = (
  total: number,
  discount: number,
  deliveryFee: number,
  totalDiscount: number
) => {
  return (
    total + 20000 - Number(discount || 0) * 1000 + deliveryFee - totalDiscount
  );
};
