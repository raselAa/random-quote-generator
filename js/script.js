/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

//creating Array object
let quotes = [{

    quoto: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    source: 'Nelson Mandela',

},
{

    quoto: " Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    source: 'Benjamin Franklin',


},
{

    quoto: " Life is either a daring adventure or nothing at all. ",
    source: 'Helen Keller',


},
{

    quoto: "Only a life lived for others is a life worthwhile. ",
    source: 'Albert Einstein',


},
{

    quoto: " There's no crying in baseball!",
    source: 'Jimmy Dugan',
    citation: "A League of Their Own",
    year: 1992,
    tag: "movie"


}
];

console.log(quotes);
/***
 * `getRandomQuote` function for generating random number of quotes index
***/
function getRandomQuote() {
    let random = Math.floor(Math.random() * quotes.length);
    return quotes[random];
}
console.log(getRandomQuote());


// function for create random background color
function randomColorNumber() {
    let getNumber = Math.floor(Math.random() * 255);
    return getNumber;
}

function getRandomColor() {
    let Rgb = `rgb(${randomColorNumber()}, ${randomColorNumber()}, ${randomColorNumber()})`;
    return Rgb;

}


/***
 * `printQuote` function for display random quote in the browser
***/
function printQuote() {
    let getRan = getRandomQuote();

    let ranQuoto = `<p class = "quote"> ${getRan.quoto}</p> <p class = "source"> ${getRan.source}`;
    if (getRan.hasOwnProperty('citation')) {
        ranQuoto += `<span class="citation">${getRan.citation}</span>`;
    }
    if (getRan.hasOwnProperty('year')) {
        ranQuoto += `<span class="year">${getRan.year}</span>`;
    }

    if (getRan.hasOwnProperty('tag')) {
        ranQuoto += `, <span class="tag">${getRan.tag}</span>`;
    }

    ranQuoto += `</p>`;

    document.getElementById('quote-box').innerHTML = ranQuoto;
    document.body.style.backgroundColor = getRandomColor();


}

//set interval for auto refresh quotes
setInterval(printQuote, 8000)

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);