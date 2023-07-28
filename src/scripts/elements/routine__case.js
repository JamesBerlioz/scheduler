import {
  mode,
  replaceOldCaseWithInput,
} from "../common_functions/replaceFunctions";
import SuperElement from "./class_SuperElement";

export class routine__case extends SuperElement {
  constructor(id) {
    super("routine__case", "button", id);

    this.hasClickEventListener = false;
  }

  addClickEventListener(inputCase) {
    this.hasClickEventListener = true;
    this.htmlObject.addEventListener("click", () => {
      mode.setOld();
      replaceOldCaseWithInput(this.htmlObject, inputCase.htmlObject);
    });
  }
}
