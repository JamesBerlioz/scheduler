(() => {
  // src/scripts/createElement.js
  function createElement(elementClassName, elementTagName, elementId) {
    let elem = document.createElement(elementTagName);
    elem.className = elementClassName;
    elem.id = elementId;
    return elem;
  }
  function addElementIntoDom(element, parentElement, elementId) {
    if (elementId)
      element.id = elementId;
    parentElement.append(element);
    return element;
  }

  // src/scripts/elements/handler.js
  var handlerUp = createElement("handler", "div", "handlerUp");
  addElementIntoDom(handlerUp, document.getElementById("main"));

  // src/scripts/elements/routine.js
  var todayRoutine = createElement("routine", "div", "todayRoutine");
  addElementIntoDom(todayRoutine, handlerUp);

  // src/scripts/elements/routine__title.js
  var todayTitle = createElement("routine__title", "h3", "todayTitle");
  addElementIntoDom(todayTitle, todayRoutine);
  todayTitle.innerText = "Today:";

  // src/scripts/changeOldTask.js
  function changeOldTask(routine__inputCase, routine, routine__case) {
    routine.replaceChild(routine__inputCase, routine__case);
    routine__inputCase.value = routine__case.innerText;
  }

  // src/scripts/elements/routine__input-case.js
  var todayInputCase = createElement("routine__input-case", "div", "todayInputCase");

  // src/scripts/elements/routine__case.js
  var todayCases = [];
  var count = todayCases.length;
  function addTodayCase() {
    todayCases.push(
      createElement("routine__case", "button", `todayCase_${count + 1}`)
    );
    addElementIntoDom(todayCases[count], todayRoutine);
    changeable(todayCases[count]);
    count = todayCases.length;
  }
  function changeable(element) {
    element.addEventListener("click", () => {
      changeOldTask(todayInputCase, todayRoutine, element);
    });
  }

  // src/scripts/elements/routine__time.js
  var todayCaseTimes = [];
  var count2 = todayCaseTimes.length;
  function addTodayCaseTime(innerText, dateTime) {
    todayCaseTimes.push(
      createElement("routine__time", "time", `todayCase_${count2 + 1}Time`)
    );
    addElementIntoDom(todayCaseTimes[count2], todayCases[count2]);
    todayCaseTimes[count2].innerText = innerText;
    todayCaseTimes[count2].dateTime = dateTime;
    count2 = todayCaseTimes.length;
  }

  // src/scripts/elements/routine__task.js
  var todayCaseTasks = [];
  var count3 = todayCaseTasks.length;
  function addTodayCaseTask(innerText) {
    todayCaseTasks.push(
      createElement("routine__task", "p", `todayCase_${count3 + 1}Task`)
    );
    addElementIntoDom(todayCaseTasks[count3], todayCases[count3]);
    todayCaseTasks[count3].innerText = innerText;
    count3 = todayCaseTasks.length;
  }

  // src/scripts/createNewTask.js
  function createNewTask(routine__emptyCase, routine, routine__inputCase, routine__input) {
    routine__emptyCase.children[0].innerText = "";
    routine__emptyCase.remove();
    routine.append(routine__inputCase);
    routine__input.focus();
  }

  // src/scripts/cancelTask.js
  function cancelTask(routine__input, routine__inputCase, routine, routine__emptyCase) {
    routine__input.value = "";
    if (routine__inputCase.isConnected) {
      routine__inputCase.remove();
    }
    if (!routine__emptyCase.isConnected) {
      routine.append(routine__emptyCase);
    }
  }

  // src/scripts/confirmTask.js
  function confirmTask(routine__input, routine__inputCase, routine, routine__emptyCase, addTodayCase2, addTodayCaseTime2, addTodayCaseTask2, textValue, timeValue, dateTimeValue) {
    routine__input.value = "";
    routine__inputCase.remove();
    addTodayCase2();
    addTodayCaseTime2(timeValue, dateTimeValue);
    addTodayCaseTask2(textValue);
    routine.append(routine__emptyCase);
  }

  // src/scripts/elements/routine__input.js
  var todayInputText = createElement(
    "routine__input",
    "input",
    "todayInputText"
  );
  addElementIntoDom(todayInputText, todayInputCase);
  todayInputText.setAttribute("autofocus", "autofocus");
  document.addEventListener("click", (e) => {
    const clickedOnInputArea = e.composedPath().includes(todayInputCase);
    const clickedOnEmptyTask = e.composedPath().includes(todayEmpty);
    if (!clickedOnInputArea && !clickedOnEmptyTask) {
      if (todayInputText.value == "") {
        cancelTask(todayInputText, todayInputCase, todayRoutine, todayEmpty);
      } else {
        confirmTask(
          todayInputText,
          todayInputCase,
          todayRoutine,
          todayEmpty,
          addTodayCase,
          addTodayCaseTime,
          addTodayCaseTask,
          todayInputText.value,
          "12:00",
          "2017-04-29T12:00"
        );
      }
    }
  });
  todayInputText.addEventListener("keydown", (e) => {
    if (e.code == "Enter") {
      confirmTask(
        todayInputText,
        todayInputCase,
        todayRoutine,
        todayEmpty,
        addTodayCase,
        addTodayCaseTime,
        addTodayCaseTask,
        todayInputText.value,
        "12:00",
        "2017-04-29T12:00"
      );
    }
  });

  // src/scripts/elements/routine__empty-case.js
  var todayEmpty = createElement(
    "routine__empty-case",
    "button",
    "todayEmpty"
  );
  addElementIntoDom(todayEmpty, todayRoutine);
  todayEmpty.addEventListener("mouseover", () => {
    todayEmpty.children[0].innerHTML = "+";
  });
  todayEmpty.addEventListener("mouseout", () => {
    todayEmpty.children[0].innerHTML = "";
  });
  todayEmpty.addEventListener("click", () => {
    createNewTask(todayEmpty, todayRoutine, todayInputCase, todayInputText);
  });

  // src/scripts/elements/routine__empty-text.js
  var todayEmptyText = createElement(
    "routine__new-text",
    "p",
    "todayEmptyText"
  );
  addElementIntoDom(todayEmptyText, todayEmpty);
})();
//# sourceMappingURL=bundle.js.map
