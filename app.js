async function getQuote(){
    var history = document.getElementsByTagName("li")
    let response = await fetch ("https://api.kanye.rest/");
    let data = await response.json();
    let h1 = document.querySelector("h1");
    for (let i = 0; i < history.length; i++) {
        if (data.quote === history[i].innerText) {
            h1.innerText = "???";
            console.log("duplicate")
            return
        }
    }
    h1.innerText = data.quote;
    AddList(data.quote);
}
getQuote();


function AddList(quote) {

    let previousQuoteList = document.querySelector("#kanye-quote-history");
    let newLi = document.createElement("li");
    newLi.innerText = quote;
    previousQuoteList.appendChild(newLi)
}



let quoteChange = document.querySelector ("#kanye-quote");

function showQuote (event) {
    quoteChange.innerText = getQuote();
}

let button = document.querySelector("#new-quote-button");
button.addEventListener("click", showQuote);