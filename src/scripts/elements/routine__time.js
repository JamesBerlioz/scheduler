import {
  createElement,
  addElementIntoDom,
} from "../createElement";
import { todayCaseAmount, todayCases } from "./routine__case";
import { SuperElement } from "./class_SuperElement";


export class routine__time extends SuperElement {
  constructor(id) {
    super("routine__time", "time", id)

    this.constructor.count++;
  }

  static count = 0;

  static getCount() {
    return routine__time.count;
  }
}

/*
export const todayCaseTimes = [];

export function addTodayCaseTime(innerText, dateTime) {
  todayCaseTimes.push(
    createElement("routine__time", "time", `todayCase_${todayCaseAmount.value + 1}Time`)
  );
  console.log(todayCases)
  addElementIntoDom(todayCaseTimes[todayCaseAmount.value], todayCases[todayCaseAmount.value]);
  todayCaseTimes[todayCaseAmount.value].innerText = innerText;
  todayCaseTimes[todayCaseAmount.value].dateTime = dateTime;
}
*/