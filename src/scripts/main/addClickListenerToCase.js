import { todayCases, tomorrowCases } from "../common_classes/class_RoutineArray";
import { todayInputCase } from "./todayRoutine";
import { tomorrowInputCase } from "./tomorrowRoutine";

document.addEventListener("click", checkingCasesForNewOnes);
document.addEventListener("keydown", (e) => {
  if (e.code == "Enter" || e.code == "Escape") {
    checkingCasesForNewOnes();
  }
});

function checkingCasesForNewOnes() {
  for (elem of todayCases) {
    if (elem.hasClickEventListener == false) {
      elem.addClickEventListener(todayInputCase);
    }
  }
  for (elem of tomorrowCases) {
    if (elem.hasClickEventListener == false) {
      elem.addClickEventListener(tomorrowInputCase);
    }
  }
}
