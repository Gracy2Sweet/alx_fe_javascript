const quoteDisplay = document.getElementById("quoteDisplay");
const newQuoteBtn = document.getElementById("newQuote");

let quotes = [
  { text: "Learning never exhausts the mind.", category: "Education" },
  { text: "Code is like humor. When you have to explain it, it’s bad.", category: "Programming" },
  { text: "Success is not final; failure is not fatal.", category: "Motivation" }
];

// REQUIRED FUNCTION NAME
function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  // REQUIRED innerHTML usage
  quoteDisplay.innerHTML = `<p>${quote.text}</p><small>${quote.category}</small>`;
}

// REQUIRED FUNCTION NAME
function addQuote() {
  const quoteText = document.getElementById("newQuoteText").value;
  const quoteCategory = document.getElementById("newQuoteCategory").value;

  if (quoteText === "" || quoteCategory === "") {
    alert("Please enter both quote and category");
    return;
  }

  quotes.push({
    text: quoteText,
    category: quoteCategory
  });

  showRandomQuote();

  document.getElementById("newQuoteText").value = "";
  document.getElementById("newQuoteCategory").value = "";
}

// REQUIRED EVENT LISTENER
newQuoteBtn.addEventListener("click", showRandomQuote);

// INITIAL DISPLAY
showRandomQuote();
