const quotes = Array.from(document.querySelectorAll('.quotes blockquote'));
const count = document.querySelector('#count');
let current = 0;
function showQuote(index) {
  current = (index + quotes.length) % quotes.length;
  quotes.forEach((quote, position) => { quote.hidden = position !== current; });
  count.textContent = (current + 1) + ' / ' + quotes.length;
}
showQuote(0);
document.querySelector('.controls').hidden = false;
document.querySelector('#prev').addEventListener('click', () => showQuote(current - 1));
document.querySelector('#next').addEventListener('click', () => showQuote(current + 1));
