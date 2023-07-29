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
    constructor(id) {
      super("routine", "div", id);
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
          } else {
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
      }
    }
  };

  // src/scripts/elements/routine__time.js
  var routine__time = class extends SuperElement {
    constructor(id) {
      super("routine__time", "time", id);
    }
  };

  // src/scripts/common_functions/caseCreator.js
  function createNewCase(routine__empty2) {
    if (routine__empty2.id.startsWith("today")) {
      const newCase = new routine__case(`todayCase`);
      const newTime = new routine__time(`todayCase_Time`);
      const newTask = new routine__task(`todayCase_Task`);
      newTime.htmlObject.innerText = "08:00";
      newCase.htmlObject.append(newTime.htmlObject);
      newCase.htmlObject.append(newTask.htmlObject);
      return newCase.htmlObject;
    } else if (routine__empty2.id.startsWith("tomorrow")) {
      const newCase = new routine__case(`tomorrowCase_`);
      const newTime = new routine__time(`tomorrowCase_Time`);
      const newTask = new routine__task(`tomorrowCase_Task`);
      newTime.htmlObject.innerText = "08:00";
      newCase.htmlObject.append(newTime.htmlObject);
      newCase.htmlObject.append(newTask.htmlObject);
      return newCase.htmlObject;
    }
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
})();
//# sourceMappingURL=bundle.js.map
