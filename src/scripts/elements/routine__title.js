import {
  createElement,
  addElementIntoDom,
} from "../createElement";
import { todayRoutine } from "./routine";

export const todayTitle = createElement("routine__title", "h3", "todayTitle");

addElementIntoDom(todayTitle, todayRoutine);

todayTitle.innerText = "Today:";
