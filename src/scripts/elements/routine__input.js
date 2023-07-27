import { replaceInputWithEmpty } from "../common_functions/caseFunctions";
import { SuperElement } from "./class_SuperElement";

export class routine__input extends SuperElement {
  constructor(id, emptyCase) {
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
        if (e.code == "Enter" || e.code == "Escape"){
          this.checkTodayInputValue();
        }
      },
      true
    );

    this.checkTodayInputValue = function () {
      if (this.htmlObject.value == "") {
        replaceInputWithEmpty(this.htmlObject.parentElement, emptyCase);
      }
    };
  }
}


// document.addEventListener(
//   "click",
//   (e) => {
//     const clickedOnInputArea = e.composedPath().includes(todayInputCase);
//     if (!clickedOnInputArea && todayInputCase.isConnected) {
//       checkTodayInputValue();
//     }
//   },
//   true
// );

// todayInputText.addEventListener(
//   "keydown",
//   (e) => {
//     if (e.code == "Enter") {
//       checkTodayInputValue();
//     }
//   },
//   true
// );

// function checkTodayInputValue() {
//   if (todayInputText.value == "") {
//     console.log("cancel");
//     cancelTask(
//       todayInputText,
//       todayInputCase,
//       todayRoutine,
//       todayEmpty,
//       mode.value,
//       todayCaseIndex.value,
//       todayCases,
//       todayCaseAmount,
//       reinitTodayCasesId
//     );
//   } else {
//     console.log("confirm");
//     confirmNewTask(
//       todayInputText,
//       todayInputCase,
//       todayRoutine,
//       todayEmpty,
//       addTodayCase,
//       addTodayCaseTime,
//       addTodayCaseTask,
//       "12:00",
//       "2017-04-29T12:00",
//       mode.value,
//       todayCaseIndex.value,
//       todayCases
//     );
//   }
// }
