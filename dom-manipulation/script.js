const quoteDisplay = document.getElementById('quoteDisplay');
const newQuoteButton = document.getElementById('newQuote');

const quotes = [
  { text: "Study to show thyself approved", category: "Education" },
  { text: "I wonder how AI gets it faster than me.", category: "Programming" },
  { text: "My success is growth, expansion and wealth.", category: "Motivation" }
];

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteDisplay.textContent = quotes[randomIndex].text;
}

newQuoteButton.addEventListener("click", showRandomQuote);
