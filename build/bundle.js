(() => {
  // src/scripts/common_functions/domFunctions.js
  function createElement(elementClassName, elementTagName, elementId) {
    let element = document.createElement(elementTagName);
    element.className = elementClassName;
    element.id = elementId;
    return element;
  }
  function addElementIntoDom(element, parentElement, place = "end") {
    if (place == "end")
      parentElement.append(element);
    else if (place == "start")
      parentElement.prepend(element);
    return element;
  }

  // src/scripts/elements/class_SuperElement.js
  var SuperElement = class {
    constructor(name, tag, id) {
      this.htmlObject = createElement(name, tag, id);
      this.addToParent = function(parent, place) {
        addElementIntoDom(this.htmlObject, parent.htmlObject, place);
      };
    }
  };

  // src/scripts/elements/handler.js
  var handler = class extends SuperElement {
    constructor(id) {
      super("handler", "div", id);
    }
  };

  // src/scripts/elements/routine.js
  var routine = class extends SuperElement {
    constructor(id, weekDayNumber = "") {
      super("routine", "div", id + weekDayNumber);
      this.weekDayNumber = weekDayNumber;
    }
  };

  // src/scripts/elements/routine__case.js
  var routine__case = class extends SuperElement {
    constructor(id) {
      super("routine__case", "div", id);
    }
  };

  // src/scripts/elements/routine__task.js
  var routine__task = class extends SuperElement {
    constructor(id) {
      super("routine__task", "input", id);
      this.htmlObject.setAttribute("maxlength", "26");
      this.htmlObject.addEventListener("focusout", this.checkInputValue);
      this.htmlObject.addEventListener("keydown", (e) => {
        if (e.code == "Enter" || e.code == "Escape") {
          this.htmlObject.blur();
        }
      });
      this.htmlObject.addEventListener("keyup", (e) => {
        let trimmedString = this.htmlObject.value.trim();
        let emptyCase = this.htmlObject.parentElement.parentElement.querySelector(
          ".routine__empty"
        );
        if (emptyCase != null) {
          if (trimmedString.length == 0) {
            emptyCase.style.display = "none";
          } else if (emptyCase.parentElement.childElementCount < 12) {
            emptyCase.style.display = "block";
          }
        }
      });
    }
    checkInputValue() {
      let trimmedString = this.value.trim();
      if (trimmedString == "") {
        this.parentElement.parentElement.querySelector(
          ".routine__empty"
        ).style.display = "block";
        this.parentElement.remove();
      } else {
      }
    }
  };

  // src/scripts/elements/routine__time.js
  var routine__time = class extends SuperElement {
    constructor(id) {
      super("routine__time", "input", id);
      this.htmlObject.setAttribute("type", "time");
    }
  };

  // src/scripts/common_functions/caseCreator.js
  function createNewCase(routine__empty2) {
    let newCase;
    let newTime;
    let newTask;
    if (routine__empty2.id.startsWith("today")) {
      newCase = new routine__case(`todayCase`);
      newTime = new routine__time(`todayCase_Time`);
      newTask = new routine__task(`todayCase_Task`);
    } else if (routine__empty2.id.startsWith("tomorrow")) {
      newCase = new routine__case(`tomorrowCase`);
      newTime = new routine__time(`tomorrowCase_Time`);
      newTask = new routine__task(`tomorrowCase_Task`);
    } else if (routine__empty2.id.startsWith("week")) {
      newCase = new routine__case(`weekCase`);
      newTime = new routine__time(`weekCase_Time`);
      newTask = new routine__task(`weekCase_Task`);
    }
    newTime.htmlObject.value = "08:00";
    newCase.htmlObject.append(newTime.htmlObject);
    newCase.htmlObject.append(newTask.htmlObject);
    return newCase.htmlObject;
  }

  // src/scripts/elements/routine__empty.js
  var routine__empty = class extends SuperElement {
    constructor(id) {
      super("routine__empty", "button", id);
      this.htmlObject.addEventListener("mouseover", () => {
        this.htmlObject.innerText = "+";
      });
      this.htmlObject.addEventListener("mouseout", () => {
        this.htmlObject.innerText = "";
      });
      this.htmlObject.addEventListener("click", () => {
        let newCase = createNewCase(this.htmlObject);
        this.htmlObject.parentElement.insertBefore(newCase, this.htmlObject);
        newCase.children[1].focus();
        this.htmlObject.style.display = "none";
      });
    }
  };

  // src/scripts/elements/routine__title.js
  var routine__title = class extends SuperElement {
    constructor(id) {
      super("routine__title", "h3", id);
      this.setInnerText = function(text) {
        this.htmlObject.innerText = text;
      };
    }
  };

  // src/scripts/main/todayRoutine.js
  var handlerUp = new handler("handlerUp");
  document.getElementById("main").append(handlerUp.htmlObject);
  var todayRoutine = new routine("todayRoutine");
  todayRoutine.addToParent(handlerUp);
  var todayTitle = new routine__title("todayTitle");
  todayTitle.setInnerText("Today:");
  todayTitle.addToParent(todayRoutine);
  var todayEmpty = new routine__empty("todayEmpty");
  todayEmpty.addToParent(todayRoutine);

  // src/scripts/main/tomorrowRoutine.js
  var tomorrowRoutine = new routine("tomorrowRoutine");
  tomorrowRoutine.addToParent(handlerUp);
  var tomorrowTitle = new routine__title("tomorrowTitle");
  tomorrowTitle.setInnerText("Tomorrow:");
  tomorrowTitle.addToParent(tomorrowRoutine);
  var tomorrowEmpty = new routine__empty("tomorrowEmpty");
  tomorrowEmpty.addToParent(tomorrowRoutine);

  // src/scripts/elements/routine__week-text.js
  var routine__weekText = class extends SuperElement {
    constructor(id) {
      super("routine__week-text", "p", id);
      this.setInnerText = function(text) {
        this.htmlObject.innerText = text;
      };
    }
  };

  // src/scripts/modifiers/routine_small.js
  function routine_smallStyle() {
    let list = document.getElementsByClassName("routine_small");
    for (let i = 0; i < list.length; i++) {
      for (child of list[i].children) {
        if (!child.id.endsWith("Text")) {
          child.style.display = "none";
        }
      }
      let showingDelay;
      list[i].addEventListener("mouseenter", (e) => {
        showingDelay = setTimeout(() => {
          for (child of list[i].children) {
            if (child.id.endsWith("Case")) {
              child.style.display = "flex";
            } else if (child.id.endsWith("Text")) {
              child.style.display = "none";
            } else if (child.id.endsWith("Empty") && list[i].childElementCount > 12) {
              child.style.display = "none";
            } else {
              child.style.display = "block";
            }
          }
        }, 200);
      });
      list[i].addEventListener("mouseleave", () => {
        for (child of list[i].children) {
          if (child.id.endsWith("Case")) {
            child.children[1].blur();
          }
        }
        setTimeout(() => {
          for (child of list[i].children) {
            if (child.id.endsWith("Text")) {
              child.style.display = "block";
            } else {
              child.style.display = "none";
            }
          }
          clearInterval(showingDelay);
        }, 0);
      });
    }
  }

  // src/scripts/main/weekRoutine.js
  var handlerDown = new handler("handlerDown");
  document.getElementById("main").append(handlerDown.htmlObject);
  for (let i = 0; i < 7; i++) {
    let weekRoutine;
    if (i == 6) {
      weekRoutine = new routine("weekRoutine", 0);
    } else {
      weekRoutine = new routine("weekRoutine", i + 1);
    }
    weekRoutine.htmlObject.classList.add("routine_small");
    weekRoutine.addToParent(handlerDown);
    const weekText = new routine__weekText("weekText");
    weekText.addToParent(weekRoutine);
    const weekTitle = new routine__title("weekTitle");
    weekTitle.addToParent(weekRoutine);
    setWeekTitle(i, weekTitle, weekText);
    const weekEmpty = new routine__empty("weekEmpty");
    weekEmpty.addToParent(weekRoutine);
  }
  routine_smallStyle();
  function setWeekTitle(i, weekTitle, weekText) {
    switch (i) {
      case 0:
        weekTitle.setInnerText("Monday:");
        weekText.setInnerText("Mn");
        break;
      case 1:
        weekTitle.setInnerText("Tuesday:");
        weekText.setInnerText("Tu");
        break;
      case 2:
        weekTitle.setInnerText("Wednesday:");
        weekText.setInnerText("Wd");
        break;
      case 3:
        weekTitle.setInnerText("Thursday:");
        weekText.setInnerText("Th");
        break;
      case 4:
        weekTitle.setInnerText("Friday:");
        weekText.setInnerText("Fr");
        break;
      case 5:
        weekTitle.setInnerText("Saturday:");
        weekText.setInnerText("St");
        break;
      case 6:
        weekTitle.setInnerText("Sunday:");
        weekText.setInnerText("Sn");
        break;
    }
  }
})();
//# sourceMappingURL=bundle.js.map
