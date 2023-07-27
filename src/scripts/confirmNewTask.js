export function confirmNewTask(
  routine__input,
  routine__inputCase,
  routine,
  routine__emptyCase,
  addTodayCase,
  addTodayCaseTime,
  addTodayCaseTask,
  timeValue,
  dateTimeValue,
  mode = "new",
  caseIndex,
  todayCases
) {
  let textValue = routine__input.value;
  routine__input.value = "";

  if (mode == "new") {
    routine__inputCase.remove();
    addTodayCase();
    addTodayCaseTime(timeValue, dateTimeValue);
    addTodayCaseTask(textValue);
  } else if (mode == "old") {
    todayCases[caseIndex].children[1].innerText = textValue;
    routine.replaceChild(todayCases[caseIndex], routine__inputCase);
  }

  routine.append(routine__emptyCase);
}
