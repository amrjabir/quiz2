export function getDataJS(name) {
  return document.querySelector(`[data-js="${name}"]`)
}

export function getAllDataJS(name) {
  return document.querySelectorAll(`[data-js="${name}"]`)
}

export function setDisplayNone(selector) {
  selector.classList.add('d-none')
}
export function removeDisplayNone(selector) {
  selector.classList.remove('d-none')
}
