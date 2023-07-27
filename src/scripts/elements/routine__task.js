import { createElement, addElementIntoDom } from "../createElement";
import { addTodayCase, todayCases } from "./routine__case";

export const todayCaseTasks = [];
let count = todayCaseTasks.length;

export function addTodayCaseTask(innerText) {
  todayCaseTasks.push(
    createElement("routine__task", "p", `todayCase_${count + 1}Task`)
  );
  addElementIntoDom(todayCaseTasks[count], todayCases[count]);
  todayCaseTasks[count].innerText = innerText;
  count = todayCaseTasks.length;
}
