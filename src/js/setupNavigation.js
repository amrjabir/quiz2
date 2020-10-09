import { getDataJS, getAllDataJS } from './lib'

export default function setUpNavigation() {
  const navLinks = getAllDataJS('navigation-link')
  const pages = getAllDataJS('page')
  const headerTitle = getDataJS('header-title')

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
      switch (targetName) {
        case 'home':
          headerTitle.textContent = 'Quiz-App'
          break
        case 'bookmarks':
          headerTitle.textContent = 'Bookmarks'
          break
        case 'create':
          headerTitle.textContent = 'Create'
          break
        case 'profile':
          headerTitle.textContent = 'Profile'
          break
      }
    }

    function updateNavLinks() {
      navLinks.forEach(toggleNavLink)
      function toggleNavLink(navLink) {
        navLink.classList.toggle(
          'navigation__icon--active',
          navLink === clickedLink
        )
      }
    }
  }
}
