import { createElement, addElementIntoDom } from "../createElement";
import { todayCaseAmount, todayCases } from "./routine__case";
import { todayCaseTimes } from "./routine__time";
import { SuperElement } from "./class_SuperElement";


export class routine__task extends SuperElement {
  constructor(id) {
    super("routine__task", "p", id)

    this.constructor.count++;
  }

  static count = 0;

  static getCount() {
    return routine__task.count;
  }
}

/*
export const todayCaseTasks = [];

export function addTodayCaseTask(innerText) {
  todayCaseTasks.push(
    createElement(
      "routine__task",
      "p",
      `todayCase_${todayCaseAmount.value + 1}Task`
    )
  );
  addElementIntoDom(
    todayCaseTasks[todayCaseAmount.value],
    todayCases[todayCaseAmount.value]
  );
  todayCaseTasks[todayCaseAmount.value].innerText = innerText;
  todayCaseAmount.reloadTodayCaseAmount();
  console.log(todayCaseAmount.value);
}

export function reinitTodayCasesId() {
  console.log('rabotaet')
  for (let i = 0; i++; i < todayCases.length) {
    todayCases[i].id = `todayCase_${i + 1}`;
    todayCaseTimes[i].id = `todayCase_${i + 1}Time`;
    todayCaseTasks[i].id = `todayCase_${i + 1}Task`;
  }
}
*/