import {
  todayCases,
  tomorrowCases,
} from "./../common_classes/class_RoutineArray";
import { routine__case } from "../elements/routine__case";
import { routine__task } from "../elements/routine__task";
import { routine__time } from "../elements/routine__time";

export function createNewCase(routine, routine__input) {
  if (routine.id.startsWith("today")) {
    const newCase = new routine__case(`todayCase_${todayCases.length + 1}`);
    const newTime = new routine__time(
      `todayCase_${todayCases.length + 1}Time`
    );
    const newTask = new routine__task(
      `todayCase_${todayCases.length + 1}Task`
    );

    newTask.htmlObject.innerText = routine__input.value;

    newCase.htmlObject.append(newTime.htmlObject);
    newCase.htmlObject.append(newTask.htmlObject);

    todayCases.push(newCase);

    return newCase.htmlObject;
  } else if (routine.id.startsWith("tomorrow")) {
    const newCase = new routine__case(
      `tomorrowCase_${tomorrowCases.length + 1}`
    );
    const newTime = new routine__time(
      `tomorrowCase_${tomorrowCases.length + 1}Time`
    );
    const newTask = new routine__task(
      `tomorrowCase_${tomorrowCases.length + 1}Task`
    );

    newTask.htmlObject.innerText = routine__input.value;

    newCase.htmlObject.append(newTime.htmlObject);
    newCase.htmlObject.append(newTask.htmlObject);

    tomorrowCases.push(newCase);

    return newCase.htmlObject;
  }
}
