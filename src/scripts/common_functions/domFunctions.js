export function createElement(elementClassName, elementTagName, elementId) {
  let element = document.createElement(elementTagName);
  element.className = elementClassName;
  element.id = elementId;
  return element;
}

export function addElementIntoDom(element, parentElement, place = "end") {
  if (place == "end") parentElement.append(element);
  else if (place == "start") parentElement.prepend(element);
  return element;
}
