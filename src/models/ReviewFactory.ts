import Images from "../assets/images";
import { map } from "lodash-es";
import { Review, IReview } from "./Review";

const CUSTOMER_REVIEWS: Array<IReview> = [
  {
    id: 1,
    name: "Kevin",
    commentContent: "Highly addictive and tasty beware",
    date: "2022-04-05",
    time: "13:50",
    image: Images.Customer1,
    stars: 5,
  },
  {
    id: 2,
    name: "Kevin",
    commentContent: "Highly addictive and tasty beware",
    date: "2022-04-05",
    time: "13:50",
    image: Images.Customer1,
    stars: 3,
  },
  {
    id: 3,
    name: "Kevin",
    commentContent: "Highly addictive and tasty beware",
    date: "2022-04-05",
    time: "13:50",
    image: Images.Customer1,
    stars: 3,
  },
  {
    id: 4,
    name: "Kevin",
    commentContent: "Highly addictive and tasty beware",
    date: "2022-04-05",
    time: "13:50",
    image: Images.Customer1,
    stars: 5,
  },
  {
    id: 5,
    name: "Kevin",
    commentContent: "Highly addictive and tasty beware",
    date: "2022-04-05",
    time: "13:50",
    image: Images.Customer1,
    stars: 5,
  },
  {
    id: 6,
    name: "Kevin",
    commentContent: "Highly addictive and tasty beware",
    date: "2022-04-05",
    time: "13:50",
    image: Images.Customer1,
    stars: 5,
  },
  {
    id: 7,
    name: "Kevin",
    commentContent: "Highly addictive and tasty beware",
    date: "2022-04-05",
    time: "13:50",
    image: Images.Customer1,
    stars: 5,
  },
  {
    id: 8,
    name: "Kevin",
    commentContent: "Highly addictive and tasty beware",
    date: "2022-04-05",
    time: "13:50",
    image: Images.Customer1,
    stars: 5,
  },
];

export class ReviewFactory {
  static getReview() {
    return map(CUSTOMER_REVIEWS, (review: IReview) => new Review(review));
  }

  static addAndRenewReview(
    commentContent: string,
    stars: number,
    reviews: Array<IReview> | Array<any>
  ) {
    const newComment = {
      id: Math.floor(Math.random() * 1000),
      name: "Kevin",
      commentContent,
      date: "2022-04-05",
      time: "13:50",
      image: Images.Customer1,
      stars,
    };

    return [newComment, ...reviews];
  }
}
