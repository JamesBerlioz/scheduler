import SuperElement from "./class_SuperElement";

export class routine__timeInput extends SuperElement {
  constructor(id) {
    super("routine__time-input", "input", id);

    this.htmlObject.setAttribute("type", "time");
  }
}
