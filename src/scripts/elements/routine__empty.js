import SuperElement from "./class_SuperElement";
import { createNewCase } from "../common_functions/caseCreator";

export class routine__empty extends SuperElement {
  constructor(id) {
    super("routine__empty", "button", id);

    this.htmlObject.addEventListener("mouseover", () => {
      this.htmlObject.innerText = "+";
    });

    this.htmlObject.addEventListener("mouseout", () => {
      this.htmlObject.innerText = "";
    });

    this.htmlObject.addEventListener("click", () => {
      let newCase = createNewCase(this.htmlObject);
      this.htmlObject.parentElement.insertBefore(newCase, this.htmlObject);
      newCase.children[1].focus();
      this.htmlObject.style.display = "none";
    });
  }
}
