// get quote from API
const quoateContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const newQuote = document.getElementById('new-quote')
const loader = document.getElementById('loader')
const tweetButton = document.getElementById('twitter')
let apiQuotes = []
function loading() {
    quoateContainer.hidden = true;
    loader.hidden = false
}
function complete() {
    loader.hidden = true
    quoateContainer.hidden = false;
}
async function getQuote(){
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const res = await fetch(apiUrl);
        apiQuotes = await res.json()
        newQuotes();
    } catch (error) {
        console.log('sorry')
    }
}

function newQuotes(){
const quote =  apiQuotes[Math.floor(Math.random()* apiQuotes.length)]
        quoteText.textContent = quote.text;
        if(!quote.author){authorText.textContent='Unknown'}
        else{authorText.textContent = quote.author;}
}
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet=${quoteText.textContent}-${authorText.textContent}`;
    window.open(twitterUrl,'_blank')
}
getQuote();
newQuote.addEventListener('click', getQuote);
tweetButton.addEventListener('click', tweetQuote);
