import { getAllDataJS, setDisplayNone, removeDisplayNone } from './lib'

export default function setupCards() {
  const cards = getAllDataJS('card')
  cards.forEach(addCardLogic)
}

function addCardLogic(card) {
  addBookmarkLogic(card)
  addAnswerLogic(card)
}

//Bookmark Logic
function addBookmarkLogic(card) {
  const bookmarkIcon = card.querySelector('[data-js="bookmark-icon"]')
  bookmarkIcon.addEventListener('click', toggleBookmarkIcon)
}

function toggleBookmarkIcon(event) {
  event.target.classList.toggle('card__bookmark-icon--active')
}

//Answer Logic
function addAnswerLogic(card) {
  const answerButton = card.querySelector('[data-js="show-answer-button"]')
  const hideAnswerButton = card.querySelector('[data-js="hide-answer-button"]')
  const answer = card.querySelector('[data-js="answer"]')
  answerButton.addEventListener('click', showAnswer)

  function showAnswer() {
    const oldText = answerButton.textContent.trim().toLowerCase()
    answerButton.textContent =
      oldText === 'show answer' ? 'hide answer' : 'show answer'

    answer.classList.toggle('d-none', oldText === 'hide answer')
  }
}
