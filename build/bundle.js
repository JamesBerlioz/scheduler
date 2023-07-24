(() => {
  // src/html-elements/handler/handler.js
  var handler = document.createElement("div");
  handler.className = "handler";
  document.getElementById("main").append(handler);

  // src/html-elements/routine/routine.js
  var routine = document.createElement("div");
  routine.className = "routine";
  handler.append(routine);

  // src/html-elements/routine/__title/routine__title.js
  var routine__title = document.createElement("h3");
  routine__title.className = "routine__title";
  routine__title.innerHTML = "Today:";
  routine.append(routine__title);

  // src/html-elements/routine/__case/routine__case.js
  var routine__case = document.createElement("button");
  routine__case.className = "routine__case";
  routine.append(routine__case);

  // src/html-elements/routine/__case/__time/routine__time.js
  var routine__time = document.createElement("time");
  routine__time.className = "routine__time";
  routine__time.dateTime = "2017-04-29T12:00";
  routine__time.innerHTML = "12:00";
  routine__case.append(routine__time);

  // src/html-elements/routine/__case/__task/routine__task.js
  var routine__task = document.createElement("p");
  routine__task.className = "routine__task";
  routine__task.innerHTML = "lunch";
  routine__case.append(routine__task);

  // src/html-elements/routine/__empty-case/routine__empty-case.js
  var routine__empty_case = document.createElement("button");
  routine__empty_case.className = "routine__empty-case";
  routine.append(routine__empty_case);
  routine__empty_case.addEventListener("click", () => console.log("CLICKED"));
})();
//# sourceMappingURL=bundle.js.map
