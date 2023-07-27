import { replaceEmptyWithInput } from "../common_functions/caseFunctions";
import { SuperElement } from "./class_SuperElement";

export class routine__emptyCase extends SuperElement {
  constructor(id, inputCase) {
    super("routine__empty-case", "button", id);

    this.htmlObject.addEventListener("mouseover", () => {
      this.htmlObject.children[0].innerText = "+";
    });

    this.htmlObject.addEventListener("mouseout", () => {
      this.htmlObject.children[0].innerText = "";
    });

    this.htmlObject.addEventListener("click", () => {
      replaceEmptyWithInput(this.htmlObject, inputCase);
    });
  }
}

/*
todayEmpty.addEventListener("mouseover", () => {
  todayEmpty.children[0].innerHTML = "+";
});
todayEmpty.addEventListener("mouseout", () => {
  todayEmpty.children[0].innerHTML = "";
});

todayEmpty.addEventListener("click", () => {
  createNewTask(todayEmpty, todayRoutine, todayInputCase, todayInputText);
  mode.makeNew();
});
*/
