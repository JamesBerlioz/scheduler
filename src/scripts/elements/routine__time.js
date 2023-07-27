import {
  createElement,
  addElementIntoDom,
} from "../createElement";
import { todayCases } from "./routine__case";

export const todayCaseTimes = [];
let count = todayCaseTimes.length;

export function addTodayCaseTime(innerText, dateTime) {
  todayCaseTimes.push(
    createElement("routine__time", "time", `todayCase_${count + 1}Time`)
  );
  addElementIntoDom(todayCaseTimes[count], todayCases[count]);
  todayCaseTimes[count].innerText = innerText;
  todayCaseTimes[count].dateTime = dateTime;
  count = todayCaseTimes.length;
}
