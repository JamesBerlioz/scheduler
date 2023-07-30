import { handler } from "../elements/handler";
import { routine } from "../elements/routine";
import { routine__empty } from "../elements/routine__empty";
import { routine__title } from "../elements/routine__title";
import { routine__weekText } from "../elements/routine__week-text";
import {routine_smallStyle} from "../modifiers/routine_small"

export const handlerDown = new handler("handlerDown");
document.getElementById("main").append(handlerDown.htmlObject);

for (let i = 0; i < 7; i++) {
  const weekRoutine = new routine("weekRoutine");
  weekRoutine.htmlObject.classList.add("routine_small");
  weekRoutine.addToParent(handlerDown);

  const weekText = new routine__weekText("weekText");
  weekText.addToParent(weekRoutine);

  const weekTitle = new routine__title("weekTitle");
  weekTitle.addToParent(weekRoutine);

  setWeekTitle(i, weekTitle, weekText);

  const weekEmpty = new routine__empty("weekEmpty");
  weekEmpty.addToParent(weekRoutine);
}

routine_smallStyle();


function setWeekTitle(i, weekTitle, weekText) {
  switch (i) {
    case 0:
      weekTitle.setInnerText("Monday:");
      weekText.setInnerText("Mn");
      break;
    case 1:
      weekTitle.setInnerText("Tuesday:");
      weekText.setInnerText("Ts");
      break;
    case 2:
      weekTitle.setInnerText("Wednesday:");
      weekText.setInnerText("Wd");
      break;
    case 3:
      weekTitle.setInnerText("Thursday:");
      weekText.setInnerText("Th");
      break;
    case 4:
      weekTitle.setInnerText("Friday:");
      weekText.setInnerText("Fr");
      break;
    case 5:
      weekTitle.setInnerText("Saturday:");
      weekText.setInnerText("St");
      break;
    case 6:
      weekTitle.setInnerText("Sunday:");
      weekText.setInnerText("Sn");
      break;
  }
}
