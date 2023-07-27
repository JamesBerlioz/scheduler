import { SuperElement } from "./class_SuperElement";

export class routine__case extends SuperElement {
  constructor(id) {
    super("routine__case", "button", id);

    this.constructor.count++;
  }

  static count = 0;

  static getCount() {
    return routine__case.count;
  }
}

const obj = new routine__case("todayCase_99");
const obj1 = new routine__case("todayCase_99");
const obj2 = new routine__case("todayCase_99");
// console.log(obj);
// console.log(obj.index);
// console.log(obj1.index);
// console.log(obj2.index);

/*

export const todayCases = [];

export const todayCaseAmount = {
  value: 0,
  reloadTodayCaseAmount: function () {
    this.value = todayCases.length;
  },
};

export function addTodayCase() {
  todayCases.push(
    createElement(
      "routine__case",
      "button",
      `todayCase_${todayCaseAmount.value + 1}`
    )
  );
  addElementIntoDom(todayCases[todayCaseAmount.value], todayRoutine);
  changeable(todayCases[todayCaseAmount.value]);
}

// export function deleteTodayCase(element) {
//   let index = todayCases.indexOf(element);
//   todayCases.splice(index, 1);
// }

export const mode = {
  value: "new",
  makeNew: function () {
    this.value = "new";
  },
  makeOld: function () {
    this.value = "old";
  },
};

export const todayCaseIndex = {
  value: 0,
  setIndex: function (newValue) {
    this.value = newValue;
  },
};

function changeable(element) {
  element.addEventListener("click", () => {
    changeOldTask(todayRoutine, todayInputCase, element);
    mode.makeOld();
    todayCaseIndex.value = todayCases.indexOf(element);
  });
}
*/
