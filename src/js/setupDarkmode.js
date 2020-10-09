import { getDataJS, setDisplayNone, removeDisplayNone } from './lib'

export default function setupDarkmode() {
  const body = getDataJS('body')
  const darkmodeButton = getDataJS('darkmode-button')

  darkmodeButton.addEventListener('click', toggleDarkmode)

  function toggleDarkmode() {
    const oldText = darkmodeButton.textContent.trim().toLowerCase()
    darkmodeButton.textContent =
      oldText === 'darkmode' ? 'lightmode' : 'darkmode'

    body.classList.toggle('darkmode', oldText === 'darkmode')
  }
}
