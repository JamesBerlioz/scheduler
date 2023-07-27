export function confirmTask(
  routine__input,
  routine__inputCase,
  routine,
  routine__emptyCase,
  addTodayCase,
  addTodayCaseTime,
  addTodayCaseTask,
  textValue,
  timeValue,
  dateTimeValue
) {
  routine__input.value = "";
  routine__inputCase.remove();
  addTodayCase();
  addTodayCaseTime(timeValue, dateTimeValue);
  addTodayCaseTask(textValue);
  routine.append(routine__emptyCase);
}
