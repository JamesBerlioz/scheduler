export function createElement(elementClassName, elementTagName, elementId) {
  let elem = document.createElement(elementTagName);
  elem.className = elementClassName;
  elem.id = elementId;
  return elem;
}

export function addElementIntoDom(element, parentElement, elementId) {
  if (elementId) element.id = elementId;
  parentElement.append(element);
  return element;
}
