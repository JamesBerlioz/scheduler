import {
  createElement,
  addElementIntoDom,
} from "../createElement";
import { todayRoutine } from "./routine";
import { createNewTask } from "../createNewTask";
import { todayInputCase } from "./routine__input-case";
import { todayInputText } from "./routine__input";

export const todayEmpty = createElement(
  "routine__empty-case",
  "button",
  "todayEmpty"
);

addElementIntoDom(todayEmpty, todayRoutine);

todayEmpty.addEventListener("mouseover", () => {
  todayEmpty.children[0].innerHTML = "+";
});
todayEmpty.addEventListener("mouseout", () => {
  todayEmpty.children[0].innerHTML = "";
});

todayEmpty.addEventListener("click", () => {
  createNewTask(todayEmpty, todayRoutine, todayInputCase, todayInputText);
});
