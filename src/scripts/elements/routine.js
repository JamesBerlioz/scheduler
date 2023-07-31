import SuperElement from "./class_SuperElement";

export class routine extends SuperElement {
  constructor(id, weekDayNumber = '') {
    super("routine", "div", id+weekDayNumber);

    this.weekDayNumber = weekDayNumber;
  }
}
