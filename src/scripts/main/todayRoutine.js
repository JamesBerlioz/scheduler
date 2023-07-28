import { todayCases } from "../common_classes/class_RoutineArray";
import { handler } from "../elements/handler";
import { routine } from "../elements/routine";
import { routine__emptyCase } from "../elements/routine__empty-case";
import { routine__emptyText } from "../elements/routine__empty-text";
import { routine__input } from "../elements/routine__input";
import { routine__inputCase } from "../elements/routine__input-case";
import { routine__title } from "../elements/routine__title";

export const handlerUp = new handler("handlerUp");
document.getElementById("main").append(handlerUp.htmlObject);

export const todayRoutine = new routine("todayRoutine");
todayRoutine.addToParent(handlerUp);

export const todayTitle = new routine__title("todayTitle");
todayTitle.setInnerText("Today:");
todayTitle.addToParent(todayRoutine);

export const todayInputCase = new routine__inputCase("todayInputCase");
export const todayEmptyCase = new routine__emptyCase(
  "todayEmptyCase",
  todayInputCase
);

export const todayInputText = new routine__input(
  "todayInputText",
  todayEmptyCase,
  todayCases
);
export const todayEmptyText = new routine__emptyText("todayEmptyText");

todayInputText.addToParent(todayInputCase);
todayEmptyCase.addToParent(todayRoutine);
todayEmptyText.addToParent(todayEmptyCase);
