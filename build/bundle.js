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

  // src/scripts/common_functions/caseFunctions.js
  function replaceEmptyWithInput(routine__emptyCase2, routine__inputCase2) {
    routine__emptyCase2.children[0].innerText = "";
    routine__emptyCase2.parentElement.replaceChild(
      routine__inputCase2.htmlObject,
      routine__emptyCase2
    );
    routine__inputCase2.htmlObject.children[0].focus();
  }
  function replaceInputWithEmpty(routine__inputCase2, routine__emptyCase2) {
    routine__inputCase2.parentElement.replaceChild(
      routine__emptyCase2.htmlObject,
      routine__inputCase2
    );
  }

  // src/scripts/elements/routine__empty-case.js
  var routine__emptyCase = class extends SuperElement {
    constructor(id, inputCase) {
      super("routine__empty-case", "button", id);
      this.htmlObject.addEventListener("mouseover", () => {
        this.htmlObject.children[0].innerText = "+";
      });
      this.htmlObject.addEventListener("mouseout", () => {
        this.htmlObject.children[0].innerText = "";
      });
      this.htmlObject.addEventListener("click", () => {
        replaceEmptyWithInput(this.htmlObject, inputCase);
      });
    }
  };

  // src/scripts/elements/routine__empty-text.js
  var routine__emptyText = class extends SuperElement {
    constructor(id) {
      super("routine__empty-text", "p", id);
    }
  };

  // src/scripts/elements/routine__input.js
  var routine__input = class extends SuperElement {
    constructor(id, emptyCase) {
      super("routine__input", "input", id);
      document.addEventListener(
        "click",
        (e) => {
          const clickedOnInputArea = e.composedPath().includes(this.htmlObject);
          if (!clickedOnInputArea && this.htmlObject.isConnected) {
            this.checkTodayInputValue();
          }
        },
        true
      );
      this.htmlObject.addEventListener(
        "keydown",
        (e) => {
          if (e.code == "Enter" || e.code == "Escape") {
            this.checkTodayInputValue();
          }
        },
        true
      );
      this.checkTodayInputValue = function() {
        if (this.htmlObject.value == "") {
          replaceInputWithEmpty(this.htmlObject.parentElement, emptyCase);
        }
      };
    }
  };

  // src/scripts/elements/routine__input-case.js
  var routine__inputCase = class extends SuperElement {
    constructor(id) {
      super("routine__input-case", "div", id);
    }
  };

  // src/scripts/main/start.js
  var handlerUp = new handler("handlerUp");
  document.getElementById("main").append(handlerUp.htmlObject);
  var todayRoutine = new routine("todayRoutine");
  todayRoutine.addToParent(handlerUp);
  var todayInputCase = new routine__inputCase("todayInputCase");
  var todayEmpty = new routine__emptyCase("todayEmpty", todayInputCase);
  var todayInputText = new routine__input("todayInputText", todayEmpty);
  var todayEmptyText = new routine__emptyText("todayEmptyText");
  todayInputText.addToParent(todayInputCase);
  todayEmpty.addToParent(todayRoutine);
  todayEmptyText.addToParent(todayEmpty);
})();
//# sourceMappingURL=bundle.js.map
