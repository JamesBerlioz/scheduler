export function cancelTask(
  routine__input,
  routine__inputCase,
  routine,
  routine__emptyCase,
  mode,
  caseIndex,
  todayCases,
  todayCaseAmount,
  reinitTodayCasesId
) {
  routine__input.value = "";
  if (routine__inputCase.isConnected) {
    routine__inputCase.remove();
    routine.append(routine__emptyCase);
    if (mode == "old") {
      todayCases.splice(caseIndex, 1);
      todayCaseAmount.reloadTodayCaseAmount();
      reinitTodayCasesId();
    }
  }
}
