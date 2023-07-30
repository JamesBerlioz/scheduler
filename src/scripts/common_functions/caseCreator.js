import { routine__case } from "../elements/routine__case";
import { routine__task } from "../elements/routine__task";
import { routine__time } from "../elements/routine__time";

export function createNewCase(routine__empty) {
  let newCase;
  let newTime;
  let newTask;
  if (routine__empty.id.startsWith("today")) {
    newCase = new routine__case(`todayCase`);
    newTime = new routine__time(`todayCase_Time`);
    newTask = new routine__task(`todayCase_Task`);
  } else if (routine__empty.id.startsWith("tomorrow")) {
    newCase = new routine__case(`tomorrowCase`);
    newTime = new routine__time(`tomorrowCase_Time`);
    newTask = new routine__task(`tomorrowCase_Task`);
  } else if (routine__empty.id.startsWith("week")) {
    newCase = new routine__case(`weekCase`);
    newTime = new routine__time(`weekCase_Time`);
    newTask = new routine__task(`weekCase_Task`);
  }
  newTime.htmlObject.value = "08:00";

  newCase.htmlObject.append(newTime.htmlObject);
  newCase.htmlObject.append(newTask.htmlObject);

  return newCase.htmlObject;
}
