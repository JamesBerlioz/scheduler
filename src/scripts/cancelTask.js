export function cancelTask(
  routine__input,
  routine__inputCase,
  routine,
  routine__emptyCase
) {
  routine__input.value = "";
  if (routine__inputCase.isConnected) {
    routine__inputCase.remove();
  }
  
  if (!routine__emptyCase.isConnected) {
    routine.append(routine__emptyCase);
  }
}
