// ==UserScript==
// @name         Search Engine Shortcuts
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       Hanne Maes
// @match        https://www.google.com/*
// @match        https://search.brave.com/*
// @icon         https://raw.githubusercontent.com/HanneMaes/google-search-shortcuts-addon/master/src/icons/icon-small.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var searchResults = []

    // what search engine are we on
    var url = window.location.href
    var searchEngine = 'google.com/search'
    if(url.includes('brave')) searchEngine = 'search.brave'
    console.log('Search Engine Shortcuts: ' + searchEngine + ' detected')

    // add the styling to the page
    document.head.innerHTML = document.head.innerHTML + `
<link href="https://fonts.googleapis.com/css2?family=Nova+Mono&display=swap" rel="stylesheet">
<style>
  .googleSearchResultsShortcut, .googleSearchResultsShortcut::after {
    border-radius: 5px;
    border: 2px solid black;
    cursor: default;
  }
  .googleSearchResultsShortcut {
    /* positioning */
    position: absolute;
    right: 40px;
    top: 0px;
    /* size */
    width: 20px;
    height: 20px;
    /* background */
    background-color: white;
    border-radius: 5px;
    /* typography */
    font-family: 'Nova Mono', monospace;
    color: black;
    /* center text */
    text-align: center;
    line-height: 19px;
  }
  .googleSearchResultsShortcut::after {
    content: '';
    display: block;
    /* draw this underneath the div */
    z-index: -1;
    /* size */
    width: 20px;
    height: 20px;
    /* positioning */
    position: relative;
    left: -2px;
    top: -15px;
    background-color: rgb(0, 0, 0);
    box-shadow: 0 3px 14px rgba(0, 0, 0, 0.4);
  }
</style>
`
    // loop trough ALL <a>
    var links = document.querySelectorAll('a');
    for(var i = 0; i < links.length; i++){

        // if it's not a link to the search engine itself and not an empty link
        if(!(links[i].href.includes(searchEngine)) && links[i].href != "") {

            // brave: don't include news cards and deeps links (links withing the site of a search result)
            if( !links[i].classList.contains('card') && !links[i].classList.contains('deep-link') ) {

               // put valid results in array
               searchResults.push({
                   html: links[i],      // get the search result HTML code so I can inject the shortcut icons
                   href: links[i].href, // get the search result HREF so I can bind a shortcut to the link
               })
            }
        }
    }
    console.log('Search Engine Shortcuts: searchResults ', searchResults)

    // display the shortcut graphics
    var i = 0
    for (var i in searchResults) {
        if (i < 10) { // only display the first 10 items

            searchResults[i].html.innerHTML = `
      <div style="position: relative; width: 0; height: 0; overfow: visible;">
        <div class="googleSearchResultsShortcut">` + parseInt(parseInt(i, 10), 10) + `</div>
      </div>
    ` + searchResults[i].html.innerHTML
            //console.log('- searchResults[i].html.innerHTML:', searchResults[i].html.innerHTML)

        }
    }

    // do this when a key is pressed
    document.addEventListener('keypress', logKey);
    function logKey(e) {
        //console.log('Search Engine Shortcuts: ' + searchEngine + ' detected')
        window.location.href = searchResults[e.key].href
    }

})();
