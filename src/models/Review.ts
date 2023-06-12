export interface IReview {
  id: number;
  image: string;
  name: string;
  commentContent: string;
  date: string;
  time: string;
  stars: number;
}
export class Review {
  id = 0;
  name = "";
  image = "";
  commentContent = "";
  date = "";
  time = "";
  stars = 1;
  constructor(review: IReview) {
    this.id = review.id;
    this.name = review.name;
    this.image = review.image;
    this.commentContent = review.commentContent;
    this.date = review.date;
    this.time = review.time;
    this.stars = review.stars;
  }
}
