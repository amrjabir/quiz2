import { getDataJS } from './lib'

export default function setupForm() {
  const formSubmitButton = getDataJS('form-submit-button')
  const form = getDataJS('form')
  formSubmitButton.addEventListener('click', () => form.reset())
}
