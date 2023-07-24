import { routine } from "../routine";

export const routine__empty_case = document.createElement("button");

routine__empty_case.className = "routine__empty-case";

routine.append(routine__empty_case);

routine__empty_case.addEventListener("click", () => console.log("CLICKED"));
