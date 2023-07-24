import { routine__case } from "../routine__case";

export const routine__time = document.createElement("time");

routine__time.className = "routine__time";
routine__time.dateTime = "2017-04-29T12:00";
routine__time.innerHTML = "12:00";

routine__case.append(routine__time);
