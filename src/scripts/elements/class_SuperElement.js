import { addElementIntoDom, createElement } from "../common_functions/domFunctions";

export class SuperElement {
  constructor(name, tag, id) {
    this.htmlObject = createElement(name, tag, id);

    this.addToParent = function (parent, place) {
      addElementIntoDom(this.htmlObject, parent.htmlObject, place)
    };
  }
}
