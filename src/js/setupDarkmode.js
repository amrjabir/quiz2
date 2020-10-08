import { getDataJS, setDisplayNone, removeDisplayNone } from './lib'

export default function setupDarkmode() {
  const body = getDataJS('body')
  const lightmodeButton = getDataJS('lightmode-button')
  const darkmodeButton = getDataJS('darkmode-button')

  lightmodeButton.addEventListener('click', switchToLightmode)
  darkmodeButton.addEventListener('click', switchToDarkmode)

  function switchToDarkmode() {
    setDisplayNone(darkmodeButton)
    removeDisplayNone(lightmodeButton)
    body.classList.add('darkmode')
    body.classList.remove('lightmode')
  }

  function switchToLightmode() {
    removeDisplayNone(darkmodeButton)
    setDisplayNone(lightmodeButton)
    body.classList.remove('darkmode')
    body.classList.add('lightmode')
  }
}
