const select = document.querySelector('select');
const html = document.querySelector('html');
const input = document.querySelector('input');
input.addEventListener('input', debitBox);
document.body.style.padding = '30px';

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

function debitBox(debitColor, textValue) {
  input.style.backgroundColor = debitColor;
  input.style.color = textValue;
}

select.onchange = function() {
  ( select.value === 'black' ) ? update('black','white') : update('white','black');
}

input.onchange = function() {
  ( input.value === 'green' ) ? update('green', 'red') : update('red', 'green');
}

//input.addEventListener('input', function() {
//  if ( input ) ? update('green', 'red') : update('red', 'green');
//});