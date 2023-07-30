import SuperElement from "./class_SuperElement";

export class routine__time extends SuperElement {
  constructor(id) {
    super("routine__time", "input", id);

    this.htmlObject.setAttribute("type", "time");
  }
}
