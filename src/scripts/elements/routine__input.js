import {
  mode,
  replaceInputWithEmpty,
  replaceInputWithNewCase,
  replaceInputWithOldCase,
} from "../common_functions/replaceFunctions";
import SuperElement from "./class_SuperElement";

export class routine__input extends SuperElement {
  constructor(id, emptyCase, caseArray) {
    super("routine__input", "input", id);

    document.addEventListener(
      "click",
      (e) => {
        const clickedOnInputArea = e.composedPath().includes(this.htmlObject);
        if (!clickedOnInputArea && this.htmlObject.isConnected) {
          this.checkTodayInputValue();
        }
      },
      true
    );

    this.htmlObject.addEventListener(
      "keydown",
      (e) => {
        if (e.code == "Enter" || e.code == "Escape") {
          this.checkTodayInputValue();
        }
      },
      true
    );

    this.checkTodayInputValue = function () {
      if (this.htmlObject.value == "") {
        replaceInputWithEmpty(
          this.htmlObject.parentElement,
          emptyCase,
          caseArray
        );
      } else {
        if (mode.value == "new") {
          replaceInputWithNewCase(this.htmlObject.parentElement, emptyCase);
        } else if (mode.value == "old") {
          replaceInputWithOldCase(this.htmlObject.parentElement, caseArray);
        }
      }
    };
  }
}
