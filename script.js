const endpoint = 'https://api.quotable.io/random';
const displayQuotes = document.querySelector("#quote");
const displayAuthor = document.querySelector("#author")
const quoteArr = [];
const previousBtn = document.querySelector("#back-btn")
const nextBtn = document.querySelector("#next-btn")
let currentIndex;
const arrLength = quoteArr.length



async function fetchQuotes(){
    try{
        const response = await fetch(endpoint, {
            headers: {
                Accept: 'applicaton/json'
            }
        });
    const quotesData = await response.json();
    const {content, author} = quotesData;
    quoteArr.push({content, author})
    currentIndex = quoteArr.length - 1
    console.log(currentIndex)
    displayQuotes.textContent = `${content}`;
    displayAuthor.textContent = `~${author}`;
     
    }catch(error){
        console.error('There was an error fetching the quotes', error)
    };
    
}

function getPreviousQuote(){
if(currentIndex > 0){
    displayQuotes.textContent = quoteArr[currentIndex -1].content;
    displayAuthor.textContent = quoteArr[currentIndex -1].author;
    currentIndex-=1;
}else{
  return console.log("No previous quotes");
}

}

fetchQuotes()

function displayNext(){
    if(currentIndex !== (quoteArr.length -1)){
displayQuotes.textContent = quoteArr[currentIndex + 1].content;
displayAuthor.textContent = quoteArr[currentIndex + 1].author;
currentIndex += 1;
    }else{
        fetchQuotes()
    }

}

nextBtn.addEventListener("click", displayNext)
previousBtn.addEventListener("click", getPreviousQuote)
