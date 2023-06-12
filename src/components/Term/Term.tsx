import { FC, HTMLAttributes } from "react";
import { useStyles } from "./Term.style";
import PageLayout from "../PageLayout/PageLayout";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import IconLeftBlack from "../../assets/icons/arrow-left.png";

export const Term: FC<HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <PageLayout>
      <div {...props} className={clsx(classes.term, props.className)}>
        <div onClick={() => navigate(-1)} className={classes.termBack}>
          <img
            src={IconLeftBlack}
            srcSet={`${IconLeftBlack} 2x`}
            style={{ width: 24, height: 24, objectFit: "contain" }}
          />
        </div>
        <h1 className={classes.termHeader}>Terms & Conditions</h1>
      </div>
      <div className={classes.termContent}>
        <div className={classes.termUse}>
          <p className={classes.termTitle}>Terms of Use</p>
          <p className={classes.termDesc}>
            This Terms of Use (the &#34;Terms&#34;) describes the rights and
            responsibilities that apply to your use of GoMarket websites and
            apps. (&#34;GoMarket&#34;, &#34;we&#34;, &#34;service&#34;,
            &#34;our&#34;&#34;or &#34;us&#34;).
          </p>
          <p className={classes.termDesc}>
            Please read the Terms carefully before using the Service. If you
            don’t agree to the Terms, as well as GoMarket Privacy Policy (the
            &#34;Privacy Policy&#34;), you may not use the Service. If you are
            entering into the Terms on behalf of a company or other legal
            entity, you represent that you have the authority to bind such
            entity to the Terms. If you do not have such authority, you must not
            accept the Terms or use the Service on behalf of such entity. The
            Service is only available to you if you have entered the age of
            majority in your jurisdiction of residence and are fully able and
            competent to enter into, abide by and comply with the Terms.
          </p>
        </div>
        <div className={classes.account}>
          <p className={classes.termTitle}>Your Account</p>
          <p className={classes.termDesc}>
            If you create an account on the Service (your &#34;Account&#34;),
            you are responsible for maintaining the security of your Account and
            its Content (as defined below), and you are fully responsible for
            all activities that occur under your Account and any other actions
            taken on the Service. You must not describe or assign Content to
            your Account in a misleading or unlawful manner, including in a
            manner intended to trade on the name or reputation of others, and we
            may change or remove any description or keyword that it considers
            inappropriate or unlawful, or otherwise likely to cause GoMarket
            liability. You must immediately notify GoMarket of any unauthorized
            uses of your Account or any other breaches of security. GoMarket
            will not be liable for any acts or omissions by you, including any
            damages of any kind incurred as a result of such acts or omissions.
          </p>
        </div>
        <div className={classes.intellectual}>
          <p className={classes.termTitle}>Intellectual Property</p>
          <p className={classes.termDesc}>
            All material available on the Service and all material and services
            provided by or through Go Market, its affiliates, subsidiaries,
            employees, agents, licensors or other commercial partners including,
            but not limited to, software, all informational text, software
            documentation, design of and “look and feel”, layout, photographs,
            graphics, audio, video, messages, interactive and instant messaging,
            design and functions, files, documents, images, or other materials,
            whether publicly posted or privately transmitted as well as all
            derivative works thereof (collectively, the &#34;Materials&#34;),
            are owned by us or our licensors or service providers, and are
            protected by copyright, trademark, trade secret and other
            intellectual property laws.
          </p>
          <p className={classes.termDesc}>
            If GoMarket, in its sole discretion and without notice, considers
            that there is an immediate security or operational risk to the
            Service, any of its, your or a third party system, then Go Market
            may immediately suspend access to or use of the Service. The
            suspension of use and access is not a breach of the Terms. You
            acknowledge that the preservation of security, confidentiality and
            data is paramount. Go Market has no liability to you for suspending
            the Service under this provision.
          </p>
        </div>
        <div className={classes.miscellaneous}>
          <p className={classes.termTitle}>Miscellaneous</p>
          <p className={classes.termDesc}>
            You agree that the Terms are specifically enforceable by GoMarket
            through injunctive relief and other equitable remedies without proof
            of monetary damages.
          </p>
          <p className={classes.termDesc}>
            If any portion of the Terms is deemed unlawful, void or
            unenforceable by any arbitrator or court of competent jurisdiction,
            the Terms as a whole will not be deemed unlawful, void or
            unenforceable, but only that portion of the Terms that is unlawful,
            void or unenforceable will be stricken from Terms.
          </p>
          <p className={classes.termDesc}>
            You agree that if GoMarket does not exercise or enforce any legal
            right or remedy which is contained in the Terms (or which Go Market
            has the benefit of under any applicable law), this will not be taken
            to be a formal waiver of Go Market rights and that those rights or
            remedies will still be available to Go Market.
          </p>
          <p className={classes.termDesc}>
            The Terms are the entire agreement between us related to the subject
            matter in the Terms. The Terms replace and supersede any other prior
            or contemporaneous agreement, representation or discussion, oral or
            written, and may not be changed except in writing signed by us,
            regardless of whether or not the parties act under an unsigned
            “electronic” agreement or rely on such an unsigned agreement.
          </p>
        </div>
      </div>
      <div className={classes.termContact}>
        <p>Contacting GoMarket</p>
        <p>
          You may contact us via email address:
          <span>gomarketvn@gmail.com</span>
        </p>
      </div>
    </PageLayout>
  );
};
export default Term;
