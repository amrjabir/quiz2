import { getAllDataJS } from './lib'

export default function setUpNavigation() {
  const navLinks = getAllDataJS('navigation-link')
  const pages = getAllDataJS('page')
  const headers = getAllDataJS('header')

  navLinks.forEach(addNavigationLogic)

  function addNavigationLogic(navLink) {
    navLink.addEventListener('click', updateNavigation)
  }

  function updateNavigation(event) {
    const clickedLink = event.currentTarget
    const targetName = clickedLink.dataset.name
    updatePage()
    updateHeader()
    updateNavLinks()

    function updatePage() {
      pages.forEach(toggleDisplayNone)

      function toggleDisplayNone(page) {
        const pageName = page.dataset.name
        page.classList.toggle('d-none', pageName !== targetName)
      }
    }

    function updateHeader() {
      headers.forEach(toggleDisplayNone)

      function toggleDisplayNone(header) {
        const headerName = header.dataset.name
        header.classList.toggle('d-none', headerName !== targetName)
      }
    }

    function updateNavLinks() {
      navLinks.forEach((navLink) => {
        navLink.classList.toggle(
          'navigation__icon--active',
          navLink === clickedLink
        )
      })
    }
  }
}
