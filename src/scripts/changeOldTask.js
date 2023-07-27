export function changeOldTask(routine__inputCase, routine, routine__case) {
  routine.replaceChild(routine__inputCase, routine__case);

  routine__inputCase.value = routine__case.innerText;
}
