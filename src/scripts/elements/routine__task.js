import { createNewCase } from "../common_functions/caseCreator";
import SuperElement from "./class_SuperElement";

export class routine__task extends SuperElement {
  constructor(id) {
    super("routine__task", "input", id);

    this.htmlObject.setAttribute("maxlength", "26");

    this.htmlObject.addEventListener("focusout", this.checkInputValue);

    this.htmlObject.addEventListener("keydown", (e) => {
      if (e.code == "Enter" || e.code == "Escape") {
        this.htmlObject.blur();
      }
    });

    this.htmlObject.addEventListener("keyup", (e) => {
      let trimmedString = this.htmlObject.value.trim();
      let emptyCase =
        this.htmlObject.parentElement.parentElement.querySelector(
          ".routine__empty"
        );
      if (emptyCase != null) {
        if (trimmedString.length == 0) {
          emptyCase.style.display = "none";
        } else if (emptyCase.parentElement.childElementCount < 12) {
          emptyCase.style.display = "block";
        }
      }
    });
  }

  checkInputValue() {
    let trimmedString = this.value.trim();
    if (trimmedString == "") {
      this.parentElement.parentElement.querySelector(
        ".routine__empty"
      ).style.display = "block";
      this.parentElement.remove();
    } else {
      // let date = new Date();
      // let dayNumber = date.getDay();

      // let routineCollection = document.getElementsByClassName("routine");
      // for (let rout of routineCollection) {
      //   if (rout.id.endsWith(dayNumber.toString())) {
      //     // let todayEmpty = document.getElementById("todayEmpty");
      //     // let newCase = createNewCase(todayEmpty);

      //     // newCase.children[1].value = this.value;
      //     // todayEmpty.parentElement.insertBefore(newCase, todayEmpty);

      //     document.getElementById("todayRoutine").innerHTML = rout.innerHTML;
      //   }
      // }
    }
  }
}
