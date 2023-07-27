import { cancelTask } from "../cancelTask";
import { confirmTask } from "../confirmTask";
import {
  addElementIntoDom,
  createElement,
} from "../createElement";
import { addTodayCaseTask } from "./routine__task";
import { addTodayCaseTime } from "./routine__time";
import { addTodayCase } from "./routine__case";
import { todayEmpty } from "./routine__empty-case";
import { todayRoutine } from "./routine";
import { todayInputCase } from "./routine__input-case";

export const todayInputText = createElement(
  "routine__input",
  "input",
  "todayInputText"
);

addElementIntoDom(todayInputText, todayInputCase);

todayInputText.setAttribute("autofocus", "autofocus");

document.addEventListener("click", (e) => {
  const clickedOnInputArea = e.composedPath().includes(todayInputCase);
  const clickedOnEmptyTask = e.composedPath().includes(todayEmpty);
  if (!clickedOnInputArea && !clickedOnEmptyTask) {
    if (todayInputText.value == "") {
      cancelTask(todayInputText, todayInputCase, todayRoutine, todayEmpty);
    } else {
      confirmTask(
        todayInputText,
        todayInputCase,
        todayRoutine,
        todayEmpty,
        addTodayCase,
        addTodayCaseTime,
        addTodayCaseTask,
        todayInputText.value,
        "12:00",
        "2017-04-29T12:00"
      );
    }
  }
});

todayInputText.addEventListener("keydown", (e) => {
  if (e.code == "Enter") {
    confirmTask(
      todayInputText,
      todayInputCase,
      todayRoutine,
      todayEmpty,
      addTodayCase,
      addTodayCaseTime,
      addTodayCaseTask,
      todayInputText.value,
      "12:00",
      "2017-04-29T12:00"
    );
  }
});
