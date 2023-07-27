export function replaceEmptyWithInput(routine__emptyCase, routine__inputCase) {
  routine__emptyCase.children[0].innerText = "";
  routine__emptyCase.parentElement.replaceChild(
    routine__inputCase.htmlObject,
    routine__emptyCase
  );
  routine__inputCase.htmlObject.children[0].focus();
}

export function replaceInputWithEmpty(routine__inputCase, routine__emptyCase) {
  routine__inputCase.parentElement.replaceChild(
    routine__emptyCase.htmlObject,
    routine__inputCase
  );
}
