import { getDataJS, setDisplayNone, removeDisplayNone } from './lib'
import setupDarkmode from './setupDarkmode'
import setupCards from './setupCards'
import setupNavigation from './setupNavigation'

setupDarkmode()
setupCards()
setupNavigation()

// ###### querySelectors ######

// ------ Select Form Submit Button and Text Inputs ------
const formSubmitButton = getDataJS('form-submit-button')
const form = getDataJS('form')

// ###### CALL FUNCTIONS WITH ADDEVENTLISTENER ######

// ====== form submit button with arrow function to reset form ======
formSubmitButton.addEventListener('click', () => form.reset())
