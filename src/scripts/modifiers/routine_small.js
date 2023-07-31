export function routine_smallStyle() {
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
