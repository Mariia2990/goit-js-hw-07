const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', () => {
  const trimValue = inputName.value.trim();

  outputName.textContent = trimValue !== '' ? trimValue : 'Anonymous';
});