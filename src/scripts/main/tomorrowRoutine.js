import { routine } from "../elements/routine";
import { routine__empty } from "../elements/routine__empty";
import { routine__title } from "../elements/routine__title";
import { handlerUp } from "./todayRoutine";

export const tomorrowRoutine = new routine("tomorrowRoutine");
tomorrowRoutine.addToParent(handlerUp);

export const tomorrowTitle = new routine__title("tomorrowTitle");
tomorrowTitle.setInnerText("Tomorrow:");
tomorrowTitle.addToParent(tomorrowRoutine);

export const tomorrowEmpty = new routine__empty("tomorrowEmpty");
tomorrowEmpty.addToParent(tomorrowRoutine);
