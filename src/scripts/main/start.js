import { handler } from "../elements/handler";
import { routine } from "../elements/routine";
import { routine__emptyCase } from "../elements/routine__empty-case";
import { routine__emptyText } from "../elements/routine__empty-text";
import { routine__input } from "../elements/routine__input";
import { routine__inputCase } from "../elements/routine__input-case";

export const handlerUp = new handler("handlerUp");
document.getElementById("main").append(handlerUp.htmlObject);

export const todayRoutine = new routine("todayRoutine");
todayRoutine.addToParent(handlerUp);

export const todayInputCase = new routine__inputCase("todayInputCase");
export const todayEmpty = new routine__emptyCase("todayEmpty", todayInputCase);

export const todayInputText = new routine__input("todayInputText", todayEmpty);
export const todayEmptyText = new routine__emptyText("todayEmptyText");

todayInputText.addToParent(todayInputCase);
todayEmpty.addToParent(todayRoutine);
todayEmptyText.addToParent(todayEmpty);
