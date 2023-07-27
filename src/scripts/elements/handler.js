import { addElementIntoDom, createElement } from "../createElement";

export const handlerUp = createElement("handler", "div", "handlerUp");

addElementIntoDom(handlerUp, document.getElementById("main"));
