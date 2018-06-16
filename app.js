var word = document.querySelector('input[name=word]');
var button = document.querySelector('button');

function replaceVowels () {
  const regex = /a|e|i|o|u/gi;
  var header = document.createElement('h1');
  header.innerText = word.value.replace(regex, '');
  document.body.insertBefore(header,word);
}

button.addEventListener('click', replaceVowels);
