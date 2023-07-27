export function createNewTask(
  routine__emptyCase,
  routine,
  routine__inputCase,
  routine__input
) {
  routine__emptyCase.children[0].innerText = "";
  routine__emptyCase.remove();
  routine.append(routine__inputCase);
  routine__input.focus();
}
