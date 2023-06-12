import clsx from "clsx";
import { FC, HtmlHTMLAttributes, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./Reviews.style";
import { ReviewFactory } from "../../models/ReviewFactory";
import { IReview } from "../../models/Review";
import DEFAULT_THEME from "../../themes/theme";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import IconLeftBlack from "../../assets/icons/arrow-left.png";
import {
  averageRatingStar,
  getDecimalPartStar,
  ratingPercentageArrGeneratorStar,
  ratingStar,
} from "../../utils/review";

export const Reviews: FC<HtmlHTMLAttributes<HTMLDivElement>> = (props) => {
  const [parsedReviewLS] = useLocalStorage("review", []);
  const classes = useStyles();
  const [reviews, setReviews] = useState<Array<IReview> | Array<any>>([]);
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState<boolean>(false);

  const rating: number = ratingStar([...reviews]);

  const ratingPercentageArrGenerator = ratingPercentageArrGeneratorStar([
    ...reviews,
  ]);

  const addData = (commentContent: string, stars: number) => {
    const newReviews = ReviewFactory.addAndRenewReview(
      commentContent,
      stars,
      reviews
    );
    setReviews((state) => [...state, ...newReviews]);
  };

  const starArrayGenerator = (stars: number): Array<boolean> => {
    const starsArray = new Array(stars)
      .fill(true)
      .concat(...new Array(5 - stars).fill(false));

    return starsArray;
  };

  const starAverageArrayGenerator = (averageRating: number): Array<boolean> => {
    const decimal = getDecimalPartStar(averageRating);
    const fullStar =
      decimal >= 8 ? Math.ceil(averageRating) : Math.floor(averageRating);

    const starsArray = new Array(fullStar).fill(1);

    if (decimal >= 2 && decimal < 8) {
      const newArr = starsArray.concat(2);
      return newArr.concat(...new Array(5 - (fullStar + 1)).fill(0));
    }

    return starsArray.concat(...new Array(5 - fullStar).fill(0));
  };

  const realReviews = isShow ? reviews : reviews.slice(0, 3);

  const averageRating: string = averageRatingStar(reviews, rating);

  useEffect(() => {
    setReviews((state) => state.concat(...ReviewFactory.getReview()));
    if (parsedReviewLS.length > 0) {
      parsedReviewLS.forEach(
        ({ text, stars }: { text: string; stars: number }) => {
          addData(text, stars);
        }
      );
    }
  }, []);

  return (
    <div {...props} className={props.className}>
      <div id="#" className={classes.root}>
        <div className={classes.review}>
          <div className={classes.reviewBack} onClick={() => navigate(-1)}>
            <img
              src={IconLeftBlack}
              alt="img_icon_back"
              style={{ height: 24, width: 24, objectFit: "contain" }}
            />
          </div>
          <h1 className={classes.reviewHeader}>Ratings & Reviews</h1>
        </div>
        <div className={classes.customerRateSection}>
          <p>Customer rate</p>
          <div className={classes.customerRate}>
            <div className={classes.rateReview}>
              <div className={classes.starRate}>
                <p>5</p>
                <p>4</p>
                <p>3</p>
                <p>2</p>
                <p>1</p>
              </div>
              <div className={classes.rateBar}>
                {ratingPercentageArrGenerator.map((item) => (
                  <div className={classes.rateContainer} key={item[0]}>
                    <div
                      className={clsx(classes.rate)}
                      style={{ width: `${item[1]}%` }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
            <div className={classes.totalRate}>
              <p className={classes.averageRate}>{averageRating.toString()}</p>
              <p className={classes.sumRate}>out of 5</p>
            </div>
          </div>
        </div>
        <div className={classes.rateBottom}>
          <p>1099 customer ratings</p>
          <div className={classes.rateIcon}>
            {averageRating &&
              starAverageArrayGenerator(parseFloat(averageRating)).map(
                (item: number | any, index: number) => (
                  <i
                    className={`fa-${item === 0 ? "regular" : "solid"} fa-star${
                      item === 2 ? "-half-stroke" : ""
                    }`}
                    style={{
                      color:
                        item === 0
                          ? DEFAULT_THEME.theme.palette.iconStar.default
                          : DEFAULT_THEME.theme.palette.iconStar.default,
                    }}
                    key={index}
                  ></i>
                )
              )}
          </div>
        </div>
        <div className={classes.reviewBtn}>
          <i className="fa fa-star-half-o" aria-hidden="true"></i>
        </div>
        <div className={classes.customerFeedback}>
          <p>Customer Feedbacks</p>
          {realReviews.map((review: IReview) => (
            <div key={review.id} className={classes.commentSection}>
              <div className={classes.customerCommentTop}>
                <div className={classes.customerComment}>
                  <div className={classes.customerAvatar}>
                    <img src={review.image} alt="" />
                  </div>
                  {starArrayGenerator(review.stars).map(
                    (item: boolean, index: number) => {
                      return (
                        <div className={classes.rateStar} key={index}>
                          <i
                            className={`fa-${
                              item ? "solid" : "regular"
                            } fa-star`}
                          ></i>
                        </div>
                      );
                    }
                  )}
                  <div className={classes.customerCommentTime}>
                    <p>
                      {review.date} | {review.time}
                    </p>
                  </div>
                </div>
              </div>
              <div className={classes.customerCommentBot}>
                <p className={classes.customerName}>{review.name}</p>
                <p className={classes.commentContent}>
                  {review.commentContent}
                </p>
              </div>
            </div>
          ))}
          <div className={classes.backTop}>
            <a href="#">
              <i className="fa-solid fa-chevron-up"></i>
            </a>
          </div>
        </div>
      </div>
      <hr className={classes.reviewHr} />
      <div className={classes.moreComment} onClick={() => setIsShow(!isShow)}>
        <p>{isShow ? "See less" : "See more"}</p>
        <i className={`fa-solid fa-chevron-${isShow ? "up" : "down"}`}></i>
      </div>
    </div>
  );
};

export default Reviews;
