let secretNumber = Math.trunc(Math.random() * 20 + 1)
let score = 20
let highScore = 0

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)
  if (!guess) {
    displayMessage('⛔ No number!')
  } else if (secretNumber === guess) {
    displayMessage('🥳 Correct Number')
    document.querySelector('.number').textContent = secretNumber
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '20rem'
    if (score > highScore) {
      highScore = score
      document.querySelector('.highscore').textContent = highScore
    }
    document.querySelector('.check').disabled = true
  } else if (secretNumber !== guess) {
    if (score > 1) {
      displayMessage(secretNumber > guess ? 'Too low!' : 'Too high!')
      score--
      document.querySelector('.score').textContent = score
    } else {
      displayMessage('🧨 You lost the game')
      document.querySelector('.score').textContent = 0
      document.querySelector('body').style.backgroundColor = '#FE2E2E'
    }
  }
})

document.querySelector('.again').addEventListener('click', function () {
  score = 20
  document.querySelector('.check').disabled = false
  document.querySelector('.score').textContent = score
  secretNumber = Math.trunc(Math.random() * 20 + 1)
  displayMessage('Start guessing...')
  document.querySelector('.number').textContent = '?'
  document.querySelector('.guess').value = ''
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').style.width = '15rem'
})
