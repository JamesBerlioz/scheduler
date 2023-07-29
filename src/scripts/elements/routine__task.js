import SuperElement from "./class_SuperElement";

export class routine__task extends SuperElement {
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
      let emptyCase =
        this.htmlObject.parentElement.parentElement.querySelector(
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
}
