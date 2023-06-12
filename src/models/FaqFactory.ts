import { map } from "lodash-es";
import { Faq, IFaq } from "./Faq";

const FAQ_DATA = [
  {
    id: 1,
    title: "How to manage my payment",
    detail:
      "You can view, add, or make changes to an existing payment method saved in your GoMart Account.",
    type: false,
  },
  {
    id: 2,
    title: "Can I use multiple discount codes?",
    detail:
      "You can view, add, or make changes to an existing payment method saved in your GoMart Account.",
    type: false,
  },
  {
    id: 3,
    title: "Do you accept replacements?",
    detail:
      "You can view, add, or make changes to an existing payment method saved in your GoMart Account.",
    type: false,
  },
  {
    id: 4,
    title: "How do I make an exchange?",
    detail:
      "You can view, add, or make changes to an existing payment method saved in your GoMart Account.",
    type: false,
  },
  {
    id: 5,
    title: "Whats your return policy?",
    detail:
      "You can view, add, or make changes to an existing payment method saved in your GoMart Account.",
    type: false,
  },
];

export class FaqFactory {
  static getFaq() {
    return map(FAQ_DATA, (faq: IFaq) => new Faq(faq));
  }
}
