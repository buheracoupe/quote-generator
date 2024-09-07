const endpoint = 'https://api.quotable.io/random';
const displayQuotes = document.querySelector("#quote");
const displayAuthor = document.querySelector("#author")


async function fetchQuotes(){
    try{
        const response = await fetch(endpoint, {
            headers: {
                Accept: 'applicaton/json'
            }
        });
    const quotesData = await response.json();
    console.table(quotesData);
    const {content, author} = quotesData;
    
    displayQuotes.textContent = `${content}`;
    displayAuthor.textContent = `~${author}`;
     
    }catch(error){
        console.error('There was an error fetching the quotes', error)
    };
    
}


fetchQuotes()


