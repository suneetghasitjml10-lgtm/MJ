const yesBtn = document.getElementById('yesBtn');
const softBtn = document.getElementById('softBtn');

const finalScreen = document.getElementById('finalScreen');

function showEnding() {
  finalScreen.classList.add('show');
}

yesBtn.addEventListener('click', showEnding);

softBtn.addEventListener('click', showEnding);
