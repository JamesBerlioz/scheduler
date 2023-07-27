import { addElementIntoDom, createElement } from "../createElement";
import { handlerUp } from "./handler";

export const todayRoutine = createElement("routine", "div", "todayRoutine");

addElementIntoDom(todayRoutine, handlerUp);
