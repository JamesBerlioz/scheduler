import { changeOldTask } from "../changeOldTask";
import {
  createElement,
  addElementIntoDom,
} from "../createElement";
import { todayInputCase } from "./routine__input-case";
import { todayRoutine } from "./routine";

export const todayCases = [];
let count = todayCases.length;

export function addTodayCase() {
  todayCases.push(
    createElement("routine__case", "button", `todayCase_${count + 1}`)
  );
  addElementIntoDom(todayCases[count], todayRoutine);
  changeable(todayCases[count]);
  count = todayCases.length;
}

function changeable(element) {
  element.addEventListener("click", () => {
    changeOldTask(todayInputCase, todayRoutine, element);
  });
}
