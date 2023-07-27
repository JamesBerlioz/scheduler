import { todayCaseAmount, todayCases } from "./elements/routine__case";

export function changeOldTask(routine, routine__inputCase, routine__case) {
  routine.replaceChild(routine__inputCase, routine__case);
  routine__inputCase.children[0].value = routine__case.children[1].innerText;
  routine__inputCase.children[0].focus();

  console.log(todayCases)
}
