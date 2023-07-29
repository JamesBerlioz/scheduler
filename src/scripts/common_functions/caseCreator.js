import { routine__case } from "../elements/routine__case";
import { routine__task } from "../elements/routine__task";
import { routine__time } from "../elements/routine__time";

export function createNewCase(routine__empty) {
  if (routine__empty.id.startsWith("today")) {
    const newCase = new routine__case(`todayCase`);
    const newTime = new routine__time(`todayCase_Time`);
    const newTask = new routine__task(`todayCase_Task`);

    newTime.htmlObject.innerText = "08:00";

    newCase.htmlObject.append(newTime.htmlObject);
    newCase.htmlObject.append(newTask.htmlObject);

    // todayCases.push(newCase);
    // todayTasks.push(newTask);

    return newCase.htmlObject;
  } else if (routine__empty.id.startsWith("tomorrow")) {
    const newCase = new routine__case(`tomorrowCase_`);
    const newTime = new routine__time(`tomorrowCase_Time`);
    const newTask = new routine__task(`tomorrowCase_Task`);

    newTime.htmlObject.innerText = "08:00";

    // newTask.htmlObject.innerText = routine__input.value;

    newCase.htmlObject.append(newTime.htmlObject);
    newCase.htmlObject.append(newTask.htmlObject);

    // tomorrowCases.push(newCase);
    // tomorrowTasks.push(newTask);

    return newCase.htmlObject;
  }
}
