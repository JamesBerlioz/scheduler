import SuperElement from "./class_SuperElement";

export class routine__title extends SuperElement {
  constructor(id) {
    super("routine__title", "h3", id);

    this.setInnerText = function (text) {
      this.htmlObject.innerText = text;
    };
  }
}
