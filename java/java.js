//name storage and output//
function displayName() {
  let name = document.getElementById('nameInput').value
  let helloName = document.getElementById('helloName')
  if (helloName && helloName.onclick) {
    alert('Hello ' + name + '!')
  }
  console.log(name)
}
function displayAnswer() {
  let answer = document.getElementById('answer').value
  let check = document.getElementById('checkAnswer')

  if (!isNaN(answer) && parseInt(answer) === 1) {
    alert('Correct')
  } else {
    alert('Incorrect')
  }
}
