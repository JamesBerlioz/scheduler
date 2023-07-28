import { tomorrowCases } from "../common_classes/class_RoutineArray";
import { routine } from "../elements/routine";
import { routine__emptyCase } from "../elements/routine__empty-case";
import { routine__emptyText } from "../elements/routine__empty-text";
import { routine__input } from "../elements/routine__input";
import { routine__inputCase } from "../elements/routine__input-case";
import { routine__title } from "../elements/routine__title";
import { handlerUp } from "./todayRoutine";

export const tomorrowRoutine = new routine("tomorrowRoutine");
tomorrowRoutine.addToParent(handlerUp);

export const tomorrowTitle = new routine__title("tomorrowTitle");
tomorrowTitle.setInnerText("Tomorrow:");
tomorrowTitle.addToParent(tomorrowRoutine);

export const tomorrowInputCase = new routine__inputCase("tomorrowInputCase");
export const tomorrowEmptyCase = new routine__emptyCase(
  "tomorrowEmptyCase",
  tomorrowInputCase
);

export const tomorrowInputText = new routine__input(
  "tomorrowInputText",
  tomorrowEmptyCase,
  tomorrowCases
);
export const tomorrowEmptyText = new routine__emptyText("tomorrowEmptyText");

tomorrowInputText.addToParent(tomorrowInputCase);
tomorrowEmptyCase.addToParent(tomorrowRoutine);
tomorrowEmptyText.addToParent(tomorrowEmptyCase);
