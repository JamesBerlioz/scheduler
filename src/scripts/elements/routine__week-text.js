import SuperElement from "./class_SuperElement";

export class routine__weekText extends SuperElement {
  constructor(id) {
    super("routine__week-text", "p", id);

    this.setInnerText = function (text) {
        this.htmlObject.innerText = text;
      };
  }
}
