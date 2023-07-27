import {
  createElement,
  addElementIntoDom,
} from "../createElement";
import { todayEmpty } from "./routine__empty-case";

export const todayEmptyText = createElement(
  "routine__new-text",
  "p",
  "todayEmptyText"
);

addElementIntoDom(todayEmptyText, todayEmpty);
