import { FC, HtmlHTMLAttributes, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Buttons";
import { useStyles } from "./Ratings.style";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import clsx from "clsx";
import { Divider } from "../Divider";

export const Ratings: FC<HtmlHTMLAttributes<HTMLDivElement>> = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [text, setText] = useState<string>("");
  const [stars, setStars] = useState<number>(0);
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const [variant, setVariant] = useState<
    "outlined" | "text" | "contained" | undefined
  >("outlined");
  const handleHover = () => {
    setVariant("contained");
  };

  const handleOut = () => {
    setVariant("outlined");
  };

  const [parsedReviewLS, setReviewLS] = useLocalStorage("review", []);

  const onTakeStar = (rating: number) => {
    setStars(rating);
  };

  const ratingHandle = (index: number) => {
    return () => {
      onTakeStar(index);
      setRating(index);
    };
  };

  const onSubmitRatingHandle = () => {
    if (!stars) {
      alert("Please rating!");
      return;
    } else {
      setReviewLS([...parsedReviewLS].concat({ text, stars }));
    }
    navigate("/");
  };

  return (
    <>
      <Divider />
      <div className={clsx(classes.orderStatus, classes.root)}>
        <div>Order status</div>
        <div className={classes.orderStatusBold}>Your order has arrived</div>
        <div className={classes.orderCode}>Order #LTM12863</div>
      </div>
      <Divider />
      <div {...props} className={clsx(classes.root, props.className)}>
        <div className={classes.ratingContent}>
          <p className={classes.ratingDesc}>
            Please let us know how you fell about the products and service!{" "}
          </p>
          <hr className={classes.customHr} />
          <p className={classes.ratingTab}>
            Tab to Rate* <span>{"(mandatory)"}</span>
          </p>

          <div className={clsx(classes.starRating)}>
            {[...Array(5)].map((_, index) => {
              index += 1;
              return (
                <button
                  type="button"
                  key={index}
                  className={
                    index <= (hover || rating)
                      ? `${classes.on}`
                      : `${classes.off}`
                  }
                  onClick={ratingHandle(index)}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(rating)}
                >
                  <div className={classes.star}>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </button>
              );
            })}
          </div>
          <div className={classes.textFieldContainer}>
            <textarea
              name="shareReview"
              id="review"
              placeholder="Leave us your feedback"
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{
                paddingTop: text ? "44px" : "16px",
              }}
            ></textarea>
            {text && (
              <div className={classes.fixedTextInTextArea}>
                LEAVE US A FEEDBACK
              </div>
            )}
          </div>
          <div className={classes.ratingBtn}>
            <Button
              variant={variant}
              onMouseOver={handleHover}
              onMouseOut={handleOut}
              onClick={onSubmitRatingHandle}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ratings;
