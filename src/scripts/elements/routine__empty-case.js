import {
  mode,
  replaceEmptyWithInput,
} from "../common_functions/replaceFunctions";
import SuperElement from "./class_SuperElement";

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
      mode.setNew();
      replaceEmptyWithInput(this.htmlObject, inputCase.htmlObject);
    });
  }
}
