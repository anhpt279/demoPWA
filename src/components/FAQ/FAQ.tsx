import { useStyles } from "./FAQ.style";
import PageLayout from "../PageLayout/PageLayout";
import RenderFAQ from "./RenderFAQ/RenderFAQ";
import { FaqFactory } from "../../models/FaqFactory";
import { useNavigate } from "react-router-dom";
import { IFaq } from "../../models/Faq";
import { FC, HTMLAttributes } from "react";
import clsx from "clsx";
import IconLeftBlack from "../../assets/icons/arrow-left.png";

export const FAQ: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div {...props} className={clsx(props.className, classes.root)}>
      <PageLayout>
        <div {...props} className={clsx(classes.faq, props.className)}>
          <div onClick={() => navigate(-1)}>
            <img
              src={IconLeftBlack}
              srcSet={`${IconLeftBlack} 2x`}
              style={{ width: 24, height: 24, objectFit: "contain" }}
            />
          </div>
          <h1 className={classes.faqHeader}>FAQ/Help</h1>
        </div>
        <div className={classes.faqContent}>
          <p>
            FAQ stands for “frequently asked questions,” and is a standard
            document in nearly every customer service organization today.
            Typically, FAQs can be found on company or brand websites, but are
            often used for other purposes as well — for instance, as part of the
            knowledge base that drives self-service efforts in customer service.{" "}
          </p>
          <p>Why Do FAQs Matter to Customer Service?</p>
          <p>
            FAQs are generally considered a “first line of defense” in customer
            service. They cover the basic questions customers tend to ask about
            your particular products, services, company, brand, and policies.
            For instance, for a retail company, an FAQ would answer common
            questions about shipping and return policies.
          </p>
          <p>
            FAQs are a good place for “extra information” you’re trying to keep
            off your main site or app screens so that the customer’s purchasing
            experience is streamlined, without distractions. At the same time,
            the FAQ serves as a perfect catch-all for all types of customer
            questions.
          </p>
          <p>
            A well-written FAQ can also serve a supplemental purpose of
            improving search engine optimization (SEO) ranking. By using the
            right keywords within your FAQ copy, you can push your pageLayouts
            closer to the top of search-results ranking....
          </p>
        </div>
      </PageLayout>
      <hr className={classes.line} />
      <PageLayout>
        <div className={classes.question}>
          <p className={classes.questionHeader}>Frequently questions</p>
          {FaqFactory.getFaq().map((faqData: IFaq) => (
            <RenderFAQ key={faqData.id} faqData={faqData} />
          ))}
        </div>
      </PageLayout>
    </div>
  );
};

export default FAQ;
