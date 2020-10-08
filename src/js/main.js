import { getDataJS, setDisplayNone, removeDisplayNone } from './lib'
import setupDarkmode from './setupDarkmode'

setupDarkmode()

// ###### querySelectors ######

// ------ Select Header ------
const headerHome = getDataJS('header-home')
const headerBookmarks = getDataJS('header-bookmarks')
const headerCreate = getDataJS('header-create')
const headerProfile = getDataJS('header-profile')

// ------ Select Main ------
const mainHome = getDataJS('main-home')
const mainBookmarks = getDataJS('main-bookmarks')
const mainCreate = getDataJS('main-create')
const mainProfile = getDataJS('main-profile')

// ------ Select Nav Icons ------
const navIconHome = getDataJS('nav-icon--home')
const navIconBookmarks = getDataJS('nav-icon--bookmarks')
const navIconCreate = getDataJS('nav-icon--create')
const navIconProfile = getDataJS('nav-icon--profile')

// ------ Select Bookmark Icons ------
const bookmarkIcon = getDataJS('bookmark-icon')

// ------ Select Answer Buttons and Answer Text------
const showAnswerButton = getDataJS('show-answer-button')
const hideAnswerButton = getDataJS('hide-answer-button')
const answerText = getDataJS('answer-text')

// ------ Select Form Submit Button and Text Inputs ------
const formSubmitButton = getDataJS('form-submit-button')
const form = getDataJS('form')

// ###### CALL FUNCTIONS WITH ADDEVENTLISTENER ######

// ====== navigation icons to display/hide pages ======
navIconHome.addEventListener('click', navigateToHome)
navIconBookmarks.addEventListener('click', navigateToBookmarks)
navIconCreate.addEventListener('click', navigateToCreate)
navIconProfile.addEventListener('click', navigateToProfile)

// ====== bookmark icons to toggle (activate/deactive) status ======
bookmarkIcon.addEventListener('click', toggleBookmarkIcon)

// ====== show and hide answer buttons to show/hide answer section ======
showAnswerButton.addEventListener('click', showAnswerSection)
hideAnswerButton.addEventListener('click', hideAnswerSection)

// ====== form submit button with arrow function to reset form ======
formSubmitButton.addEventListener('click', () => form.reset())

// ###### FUNCTION DECLARATIONS ######

// ====== function declarations for navigation ======

// ------ navigate to home page ------
function navigateToHome() {
  hideAllPages()
  showPage(headerHome, mainHome, navIconHome)
}

// ------ navigate to bookmarks page ------
function navigateToBookmarks() {
  hideAllPages()
  showPage(headerBookmarks, mainBookmarks, navIconBookmarks)
}

// ------ navigate to create page ------
function navigateToCreate() {
  hideAllPages()
  showPage(headerCreate, mainCreate, navIconCreate)
}

// ------ navigate to profile page ------
function navigateToProfile() {
  hideAllPages()
  showPage(headerProfile, mainProfile, navIconProfile)
}

// ====== function hide all pages ======
function hideAllPages() {
  setDisplayNone(headerHome)
  setDisplayNone(headerBookmarks)
  setDisplayNone(headerCreate)
  setDisplayNone(headerProfile)

  setDisplayNone(mainHome)
  setDisplayNone(mainBookmarks)
  setDisplayNone(mainCreate)
  setDisplayNone(mainProfile)

  deactivateIcon(navIconHome)
  deactivateIcon(navIconBookmarks)
  deactivateIcon(navIconCreate)
  deactivateIcon(navIconProfile)
}

// ====== function to show all parts of a page ======

function showPage(headerPageName, mainPageName, navIconPageName) {
  removeDisplayNone(headerPageName)
  removeDisplayNone(mainPageName)
  activateIcon(navIconPageName)
}

// ====== activate and deactivate navigation icon ======
function activateIcon(selector) {
  selector.classList.add('navigation__icon--active')
}
function deactivateIcon(selector) {
  selector.classList.remove('navigation__icon--active')
}

// ====== toggle (=activate/deactivate) bookmark icons ======
function toggleBookmarkIcon() {
  bookmarkIcon.classList.toggle('card__bookmark-icon--active')
}

// ====== show and hide answer section ======
function showAnswerSection() {
  removeDisplayNone(answerText)
  removeDisplayNone(hideAnswerButton)
  setDisplayNone(showAnswerButton)
}
function hideAnswerSection() {
  setDisplayNone(answerText)
  setDisplayNone(hideAnswerButton)
  removeDisplayNone(showAnswerButton)
}
