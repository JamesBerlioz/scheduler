import { createElement, addElementIntoDom } from "../createElement";
import { todayRoutine } from "./routine";
import { SuperElement } from "./class_SuperElement";


export class routine__title extends SuperElement {
  constructor(id) {
    super("routine__title", "h3", id);

    this.setInnerText = function (text) {
      this.htmlObject.innerText = text;
    };
  }
}

/*
export const todayTitle = createElement("routine__title", "h3", "todayTitle");

addElementIntoDom(todayTitle, todayRoutine);

todayTitle.innerText = "Today:";
*/