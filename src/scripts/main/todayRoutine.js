import { handler } from "../elements/handler";
import { routine } from "../elements/routine";
import { routine__empty } from "../elements/routine__empty";
import { routine__title } from "../elements/routine__title";

export const handlerUp = new handler("handlerUp");
document.getElementById("main").append(handlerUp.htmlObject);

export const todayRoutine = new routine("todayRoutine");
todayRoutine.addToParent(handlerUp);

export const todayTitle = new routine__title("todayTitle");
todayTitle.setInnerText("Today:");
todayTitle.addToParent(todayRoutine);

export const todayEmpty = new routine__empty("todayEmpty");
todayEmpty.addToParent(todayRoutine);
