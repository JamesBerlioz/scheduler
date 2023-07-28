import { createNewCase } from "./caseCreator";
import { caseRecycler } from "./caseRecycler";

export function replaceEmptyWithInput(routine__emptyCase, routine__inputCase) {
  routine__emptyCase.children[0].innerText = "";
  routine__inputCase.children[0].value = "";
  routine__emptyCase.parentElement.replaceChild(
    routine__inputCase,
    routine__emptyCase
  );
  routine__inputCase.children[0].focus();
}

export function replaceInputWithEmpty(
  routine__inputCase,
  routine__emptyCase,
  caseArray
) {
  routine__inputCase.parentElement.append(routine__emptyCase.htmlObject);
  routine__inputCase.remove();

  caseRecycler(caseArray);
}

export function replaceInputWithNewCase(
  routine__inputCase,
  routine__emptyCase
) {
  const newCase = createNewCase(
    routine__inputCase.parentElement,
    routine__inputCase.children[0]
  );
  routine__inputCase.parentElement.replaceChild(newCase, routine__inputCase);
  newCase.parentElement.append(routine__emptyCase.htmlObject);
}

export function replaceOldCaseWithInput(routine__case, routine__inputCase) {
  routine__inputCase.children[0].value = routine__case.children[1].innerText;
  routine__case.parentElement.replaceChild(routine__inputCase, routine__case);
  routine__inputCase.children[0].focus();
}

export const mode = {
  value: "new",
  setNew: function () {
    this.value = "new";
  },
  setOld: function () {
    this.value = "old";
  },
};

export function replaceInputWithOldCase(routine__inputCase, caseArray) {
  for (obj of caseArray) {
    if (obj.htmlObject.isConnected == false) {
      obj.htmlObject.children[1].innerText =
        routine__inputCase.children[0].value;
      routine__inputCase.parentElement.replaceChild(
        obj.htmlObject,
        routine__inputCase
      );
    }
  }
}
