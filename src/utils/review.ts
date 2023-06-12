import { IReview } from "../models/Review";

export const ratingStar = (review: any[] | IReview[]) => {
  return [...review].reduce((p: number, c: IReview) => p + c.stars, 0);
};

export const ratingPercentageArrGeneratorStar = (
  review: any[] | IReview[]
): Array<[string, number]> => {
  const ratingObj: { [key: number]: number } = [...review].reduce(
    (obj, current) => {
      const { stars }: { stars: number } = current;
      return { ...obj, [stars]: obj[stars] + 1 };
    },
    {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    }
  );

  return Object.entries(ratingObj)
    .reverse()
    .map((item: [string, number | any]) => [
      item[0],
      Math.ceil((item[1] / review.length) * 100),
    ]);
};

export const averageRatingStar = (
  review: any[] | IReview[],
  rating: number
) => {
  return review.length ? (rating / review.length).toFixed(1) : "0.0";
};

export const getDecimalPartStar = (num: number) => {
  if (Number.isInteger(num)) {
    return 0;
  }
  const decimalStr = num.toString().split(".")[1];
  return Number(decimalStr);
};
